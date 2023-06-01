<script lang="ts">
  import ListOfItems from "./components/ListOfItems.svelte";
  import "./lib/types";
  import {
    itemsInfo,
    type ItemStructure,
    type backpackStructure,
    type possibleViews,
    round,
  } from "./lib/types";
  import pickaxe from "./assets/pickaxe.png";
  import Store from "./components/Store.svelte";
  import NavBarViews from "./components/NavBarViews.svelte";
    import Coin from "./components/Coin.svelte";

  let view: possibleViews = "list-of-items";
  let showShop: boolean = false;
  let coins = 0;
  let autoSaveDelay = 5000
  let canBeSavedToDb = true
  let items: backpackStructure = {}

  let dbLoadCache = loadFromDb()
  items = dbLoadCache.items
  coins = dbLoadCache.coins

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

  function loadFromDb(): {items: backpackStructure,coins:number} {
    return {
      items:
        JSON.parse(localStorage.getItem("ezc_items") || "{}") || {},

      coins:
        parseInt(localStorage.getItem("ezc_coins")) || 0,
    };
  }

  function syncSaveDb() {
    if(canBeSavedToDb) {
      localStorage.setItem("ezc_items", JSON.stringify(items));
      localStorage.setItem("ezc_coins", coins.toString());
    }
    canBeSavedToDb = false
  }


  $: [items, coins] && syncSaveDb();

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
  },5000)

  setInterval(()=>{
    canBeSavedToDb = true
  },autoSaveDelay)
</script>

<main>
  <div class="header">
    <span><Coin /></span> <span class="value">{round(coins)}</span>
  </div>
  <div class="game">
    <NavBarViews {showShop} {view} />
    {#if showShop}
      <Store {coins} {items} {modifyBackpackItem} {setCoins} />
    {:else if view == "list-of-items" || view == "list-of-animals"}
      <ListOfItems {modifyBackpackItem} {items} />
    {:else}{/if}
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
    background: #0002;
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
</style>
