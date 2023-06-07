<script lang="ts">
    import { levelsInfo, type possibleLevels, type possibleViews } from "../lib/types";

  export var showShop:boolean;
  export var showLevelShop:boolean;
  export var switchToLevel: Function;
  export var buyLevel: Function;
  export var level: possibleLevels;
  export var switchLevelShopOpen: Function;
  export var unlockedLevels: possibleLevels[];
</script>

<div class="nav">
    <button on:click={()=>{switchLevelShopOpen()}} class="focus level"><span>{levelsInfo[level].title}</span> <span class="material-symbols-outlined">{showLevelShop ? "expand_less" : "expand_more"}</span></button>

    <div class="views">
        {#if showShop}
            <div class="view focus">Obchod</div>
        {:else if showLevelShop}
            <div class="view focus">Říše</div>
        {:else}
            <!-- <div class="view">Baťoh</div> -->
            <div class="view focus">Farma</div>
        {/if}
    </div>
</div>

<style>
    .nav {
        position: sticky;
        display: flex;
        width: 100%;
        padding: 0.25em;
    }

    .nav .views {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        gap: 0.5rem;
    }

    .nav .view {
        user-select: none;
        text-align: center;
        width: 100%;
        max-width: 400px;
        min-width: max-content;
        padding: 0.2em 1em;
        border-bottom: #222 2px solid;
    }


    .nav .view.focus {
        border-radius: 1em;
        padding: 0.25em;
        background: #222;
        border: none;
    }


    .nav .level {
        font-size: inherit;
        font-family: inherit;
        color: inherit;
        display: flex;
        vertical-align: middle;
        align-items: center;
        flex-shrink: 0;
        width: fit-content;
        border-radius: 1em;
        padding: 0.25em 0.5em;
        background: #222;
        border: #222 2px solid;
        border-bottom: #0008 0.2em solid;
    }
</style>