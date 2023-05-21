<script lang="ts">
    import type { possibleViews } from "../lib/types";

  export var view: possibleViews;
  export var showShop:boolean;
</script>

<div class="nav">
    {#if showShop}
        <div class="view focus">Obchod</div>
    {:else}
        <!-- <div class="view">Baťoh</div> -->
        <div class="view focus">Farma</div>
    {/if}
</div>

<style>
    .nav {
        position: sticky;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        padding: 0.25em;
    }

    .nav .view {
        user-select: none;
        text-align: center;
        width: 25%;
        min-width: fit-content;
        padding: 0.2em;
        border-bottom: #222 2px solid;
    }


    .nav .view.focus {
        border-radius: 1em;
        padding: 0.25em;
        background: #222;
        border: none;
    }
</style>