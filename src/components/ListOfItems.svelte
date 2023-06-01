<script lang="ts">
    import "../lib/types"
    import { itemsInfo, type backpackStructure, type ItemStructure, round } from "../lib/types";

    function getSellReward(keyOfItem:string):number {
        return itemsInfo[keyOfItem].sell * items[keyOfItem]
    }

    function sellItem(keyOfItem:string) {
        if(!itemsInfo[keyOfItem].sell) {
            return
        }
        modifyBackpackItem("coin",getSellReward(keyOfItem))
        modifyBackpackItem(keyOfItem,-items[keyOfItem])
    }

    export var items: backpackStructure;
    export let modifyBackpackItem: Function;
</script>

<div class="items">
    {#each Object.entries(items) as item}
        {#key item[1]}
            <div class="item">
                <div class="left">
                    <div class="icon">{itemsInfo[item[0]]?.icon || " "}</div>
                    <div class="info">
                        <span class="title">{itemsInfo[item[0]]?.title}</span>
                        <span class="value">{round(item[1])}</span>
                    </div>
                </div>
                <div class="right">
                    {#if itemsInfo[item[0]].sell && item[1] > 0}
                        <button class="sell" on:click={()=>{sellItem(item[0])}}>Sell <div class="bubble"><span class="coin">🪙</span> {round(getSellReward(item[0]))} </div></button>
                    {/if}
                </div>
            </div>
        {/key}
    {/each}
</div>

<style>
    .items {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 0.1rem;
    }



    .sell {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background: #522e;
        cursor: pointer;
        /* background: transparent; */
        color: #f97575;
        height: 100%;
        width: fit-content;
        font-size: 1em;
        padding: 0.4em 0.8em;
        border-radius: 0.2em;
    }

    .bubble {
        width:max-content;
        position: absolute;
        vertical-align: middle;
        display: flex;
        align-items: center;
        gap: 0.2em;
        padding: 0 0.2em;
        border-radius: 1em;
        font-size: 0.8em;
        background: #252e;
        color: #a5ff9a;

        bottom: 1.8em;
        right: 1.5em;
    }

    .bubble .coin {
        font-size: 0.8em;
        vertical-align: middle;
    }

    .items .left {
        display: flex;
        width: 100%;
        flex-direction: row;
        gap: 0.5em;
    }

    .items .item .icon {
        width: 1em;
        height: 100%;
        font-size: 1.5em;
        user-select: none;
        display: flex;
        align-items: center;
        vertical-align: middle;
    }

    .items .item .info .value {
        color: #bebebe;
    }

    .items .item .info{
        font-size: 1.3em;
        display: flex;
        align-items: center;
        gap: 0.5em;
    }
    
    .items .item {
        flex-direction: row;
        border-radius: 1em;
        height: fit-content;
        padding: 0.5em 0.7em;
        width:100%;
        display: flex;
        background-color: #0006;
    }
</style>