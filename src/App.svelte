<script lang="ts">
  import ListOfItems from "./components/ListOfItems.svelte";
  import "./lib/types";
  import {
    itemsInfo,
    type ItemStructure,
    type backpackStructure,
    type possibleViews,
    round,
    type possibleLevels,
    levelsInfo,
  } from "./lib/types";
  import pickaxe from "./assets/pickaxe.png";
  import Store from "./components/Store.svelte";
  import NavBarViews from "./components/NavBarViews.svelte";
    import Coin from "./components/Coin.svelte";
    import ListOfLevels from "./components/ListOfLevels.svelte";

  let view: possibleViews = "list-of-items";
  let showShop: boolean = false;
  let coins = 0;
  let autoSaveDelay = 5000
  let canBeSavedToDb = true
  let items: backpackStructure = {}
  let level:possibleLevels = "basic"
  let unlockedLevels:possibleLevels[] = ["basic"]
  let showLevelShop:boolean = false

  let dbLoadCache = loadFromDb()
  items = dbLoadCache.items
  coins = dbLoadCache.coins
  level = dbLoadCache.level
  unlockedLevels = dbLoadCache.unlockedLevels
  if(!unlockedLevels.includes(level)) level = "basic"

  export function modifyBackpackItem(key: string, modifyBy: number) {
    if(key == "coin") {
      coins += modifyBy
      return
    }
    if (!items[key]) {
      items[key] ||= modifyBy
    } else {
      items[key] ||= 0;
      items[key] += modifyBy;
    }
  }

  function kopat() {
    coins++;
  }

  function setCoins(newValue: number) {
    coins = newValue;
  }

  function loadFromDb(): {items: backpackStructure,coins:number,level: possibleLevels, unlockedLevels: possibleLevels[]} {
    return {
      items:
        JSON.parse(localStorage.getItem("ezc_items") || "{}") || {},

      coins:
        parseInt(localStorage.getItem("ezc_coins")) || 0,

      //@ts-ignore
      level:
        localStorage.getItem("ezc_level") || "basic",

      unlockedLevels: JSON.parse(localStorage.getItem("ezc_levels") || '["basic"]') || ["basic"],
    };
  }

  function syncSaveDb() {
    if(canBeSavedToDb) {
      localStorage.setItem("ezc_level", level);
      localStorage.setItem("ezc_levels", JSON.stringify(unlockedLevels));
      localStorage.setItem("ezc_items", JSON.stringify(items));
      localStorage.setItem("ezc_coins", coins.toString());
    }
    canBeSavedToDb = false
  }


  $: [items, coins] && syncSaveDb();
  $: [showLevelShop, showShop] && (()=>{
    // if(showLevelShop) showShop = false
    // if(showShop) showLevelShop = false
  })();
  $: [level] && reloadLevel()

  function reloadLevel() {
    document.body.style.setProperty("--bg-hue", levelsInfo[level].bghue.toString())
    document.body.style.setProperty("--bg-image", levelsInfo[level].bg.toString())
  }

  window.addEventListener("beforeunload", () => {
    canBeSavedToDb = true
    syncSaveDb()
  })


  setInterval(()=>{
    Object.entries(items).forEach(([animalName, animalCount])=>{
      if(itemsInfo[animalName]?.type == "animal" || false) {
        Object.entries(itemsInfo[animalName].produce).forEach(([animalProduceItemKey,animalProduceItemCount]) => {
          modifyBackpackItem(animalProduceItemKey,(animalProduceItemCount[1] / animalProduceItemCount[0]) * animalCount * 5)
        })
      }
    })


    canBeSavedToDb = true
  },5000)


  // setInterval(()=>{
  // },autoSaveDelay)

  function buyLevel(whichOne: possibleLevels) {
    if(!unlockedLevels.includes(whichOne)) {
      unlockedLevels = [...unlockedLevels,whichOne]
    }
  }

  function switchToLevel(newOne: possibleLevels) {
    level = newOne
  }

  function switchLevelShopOpen() {
    showLevelShop = !showLevelShop
  }

</script>

<main>
  <div class="header">
    <span><Coin/></span> <span class="value">{round(coins)}</span>
  </div>
  <div class="game">
    <NavBarViews {showShop} {showLevelShop} {buyLevel} {switchToLevel} {level} {unlockedLevels} {switchLevelShopOpen} />
    {#if showLevelShop}
        <ListOfLevels {setCoins} {coins} {level} {buyLevel} {switchToLevel} {unlockedLevels}/>
    {:else if showShop}
      <Store {coins} {items} {modifyBackpackItem} {setCoins} {level} />
    {:else if view == "list-of-items" || view == "list-of-animals"}
      <ListOfItems {modifyBackpackItem} {items} />
      {#key Object.keys(items)}
          {#if Object.keys(items).length >= Object.keys(itemsInfo).length}
            <div class="game-completed">
              <h2>Gratuluji 🤝🎉</h2>
              <p><b>Dohrál jsi e-zviratka!</b>, <i>zatím jsi odemknul všechny itemy. Ale stále se můžeš těšit na další updaty 😉</i></p>
            </div>
          {:else}
            <div class="ziskano">{Object.keys(items).length} / {Object.keys(itemsInfo).length} získáno</div>
          {/if}
      {/key}
    {/if}
  </div>
  <div class="nav">
    <!-- https://www.flaticon.com/free-icons/pickaxe -->
    <div class="kopatContainer">
      <button class="kopat" on:click={kopat}>
        <img src={pickaxe} class="icon" height="32" alt="" /><span class="text">
          Kopej</span
        >
      </button>
    </div>

    <input type="checkbox" id="toggle-store" bind:checked={showShop} />
    <label for="toggle-store" class="obchod material-symbols-outlined">store</label>
  </div>
</main>

<style>
  :root {
    --bg-hue: 111;
    --bg-image: url(https://lorem.picsum/200);
  }

  :global(body) {
    image-rendering: pixelated;
    background: var(--bg-image) center repeat;
    background-size: 100px 100px;
    background-color: #3e583a;
    image-orientation: 90deg;
  }

  main > .header {
    width: 100%;
    padding: 0.5em;
    font-size: 1.4em;
    text-align: center;
    user-select: none;
  }

  main > .header span {
    vertical-align: middle;
  }

  main > .header .value {
    font-size: 1.4em;
    color: #e3e3e3;
    user-select: text;
  }

  main > .game {
    position: relative;
    padding: 1rem;
    border-radius: 1rem;
    background: hsl(var(--bg-hue), 21%, 25%);
    height: 100%;
    max-height: calc(100vh - 9em);
    overflow: auto;
    display: flex;
    flex-direction: column;
  }

  .nav {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 1rem;
  }

  .nav .kopatContainer {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .nav .kopat .icon {
    height: 1em;
  }

  .nav .obchod {
    position: relative;
    flex-shrink: 0;
    right: 0;
    user-select: none;
    transition: 100ms;

    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: #222;
    color: #e3e3e3;
    aspect-ratio: 1 / 1;
    height: 2.4em;
    width: 2.4em;
    font-size: 1.4em;
    padding: 0.6em 1em;
    border-radius: 50%;
  }

  .nav .kopat {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border: none;
    background: #222;
    color: #e3e3e3;
    font-family: inherit;
    font-size: 1.4em;
    padding: 0.6em 3em;
    border-radius: 0.1em;
    height: 100%;
  }

  .nav label {
    /* all: unset; */
    width: fit-content;
  }

  #toggle-store {
    display: none;
  }

  @media (max-width: 950px) {
    .nav .kopat .text {
      display: none;
    }
  }

  .nav .kopat:active {
    animation: kachnaclick 250ms forwards;
  }

  #toggle-store:checked ~ .obchod {
    background: #343434;
  }

  @keyframes kachnaclick {
    from {
      background: #343434;
    }

    to {
    }
  }

  .game-completed {
    text-align: center;
  }

  :global(.ziskano) {
        width: 100%;
        text-align: center;
        color: #bebebe;
        text-shadow: #222a 2px 2px 2px;
    } 
</style>
