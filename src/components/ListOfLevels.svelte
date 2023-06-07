<script lang="ts">
    import { levelsInfo, round, type possibleLevels, type possibleViews } from "../lib/types";
    import Coin from "./Coin.svelte";

  export var switchToLevel: Function;
  export var buyLevel: Function;
  export var level: possibleLevels;
  export var unlockedLevels: possibleLevels[];
  export var coins:number;
  export var setCoins:Function;
</script>

<div class="list">
    <div class="popis">tip: Po změně říše se jukni do obchodu</div>
    {#each Object.entries(levelsInfo) as _level}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        {#if unlockedLevels.includes(_level[0])}
            <div on:click={()=>{ switchToLevel(_level[0]) }} class={`item ${_level[0] == level ? "focus" : ""} can`} style={`--bg:${_level[1].bg || "#222"}`}>
                <div class="title">{_level[1].title}</div>
            </div>
        {:else}
            <div on:click={()=>{
                if(coins > _level[1].cost) {
                    setCoins(coins - _level[1].cost)
                    buyLevel(_level[0])
                    switchToLevel(_level[0])
                }
            }} class={`item ${coins > _level[1].cost ? "" : "blur"}`} style={`--bg:${_level[1].bg || "#222"}`}>
                <div class="title">???</div>
                <div class="popisek">Odemnkneš za <span class={`value ${coins > _level[1].cost ? "can" : "cant"}`}><Coin/> {round(_level[1].cost)}</span></div>
            </div>
        {/if}

    {/each}
    <div class="ziskano">{unlockedLevels.length} / {Object.keys(levelsInfo).length} získáno</div>
</div>

<style>
    .popis {
        display: block;
        color: #eeee;
        text-align: center;
        font-size: 0.8em;
        margin: 1em 0;
    }

    .item {
        user-select: none;
        margin-bottom: 0.8rem;
        box-shadow: #0008 0 5px 15px;
        display: block;
        text-align: center;
        width: 100%;
        padding: 2rem 1rem;
        border-radius: 0.5rem;
        background: linear-gradient(var(--oc),var(--oc)),var(--bg)repeat center;
        background-color: #222;
        background-size: 70px 70px;
        transition: 250ms font-size;
    }

    .item.can {
        cursor: pointer;
        --oc: #000e;
    }

    .item.focus {
        outline: hsl(var(--bg-hue), 100%, 50%) 2px solid;
        --oc: transparent;
        font-size: 1.2em;
        color: hsl(var(--bg-hue), 50%, 50%);
    }

    .item.blur {
        cursor: not-allowed;
        --oc: #121213;
    }

    .item .title {
        display: inline-block;
        background: #000a;
        text-shadow: #000 2px 2px 2px;
        border-radius: 0.1rem;
        padding: 0.2em 0.4em;
    }

    .item .popisek .value {
        font-weight: 600;
        background: #222222;
        padding: 0.1em 0.2em;
        position: relative;
    }

    .item .popisek .value.can {
        color: #3e3;
    }


    .item .popisek .value.cant {
        color: #e33;
    }
</style>