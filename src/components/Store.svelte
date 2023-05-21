<script lang="ts">
    import { itemsInfo, type ItemStructure } from "../lib/types";


    function getDefaultName(costItem: [string, number],hideIcon: boolean): string {

        if(hideIcon) return itemsInfo[costItem[0]]?.title || costItem[0]
        return itemsInfo[costItem[0]]?.icon || itemsInfo[costItem[0]]?.title || costItem[0]
    }

    function canBuy(itemToBuy: [string,ItemStructure["cs"]]) {
        let can = true
        Object.entries(itemToBuy[1].cost).forEach(el => {
            let costItemKey = el[0]
            let backpackItemValue = costItemKey == "coin" ? coins : items[costItemKey]?.value || 0
            if(itemToBuy[1].cost[costItemKey] > backpackItemValue) {
                return can = false
            }
        })
        
        return can
    }

    export let coins:number;
    export let items: ItemStructure;
    export let modifyBackpackItem:Function;
    export let setCoins:Function;
</script>

<div class="items">
    {#each Object.entries(itemsInfo) as item}
        {#key item[1].value}
            <div class="item">
                <div class="left">
                    <div class="row">
                        <div class="icon">{item[1].icon || ""}</div>
                        <div class="info">
                            <span class="title">{item[1].title}</span>
                            <span class="value">[{items[item[0]]?.value || 0}]</span>
                        </div>
                    </div>
    
                    <div class="row payment">
                        <!-- <div class="title">cena:</div> -->
    
                        <div class="cost">
                            {#each Object.entries(item[1].cost) as costItem}
                                {#if costItem[0] == "coin"}
                                    <div class={`cost_item ${coins >= costItem[1] ? "can" : ""}`}>
                                        <div class="_icon">🪙</div>
                                        <div class="_value">{costItem[1]}</div>
                                    </div>
                                {:else}
                                    <div class={`cost_item ${(items[costItem[0]]?.value || 0) >= itemsInfo[item[0]].cost[costItem[0]] ? "can" : ""}`}>
                                        <div class="_icon">{getDefaultName(costItem, itemsInfo[costItem[0]]?.hideIcon||false)}</div>
                                        <div class="_value">{costItem[1]}</div>
                                    </div>
                                {/if}
                            {/each}
                        </div>
                    </div>
                </div>
                <div class="right">
                    {#key [coins, items]}
                        <button class={`buy ${canBuy(item) ? "can" : ""}`} on:click={()=>{
                            if(!canBuy(item)) return
                            modifyBackpackItem(item[0], 1)
                            Object.entries(item[1].cost).forEach(costItem => {
                                if(costItem[0] == "coin") {
                                    coins -= costItem[1]
                                    setCoins(coins)
                                    return
                                }
                                modifyBackpackItem(costItem[0], -costItem[1])
                            })
                        }}>Kup 1</button>
                    {/key}
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

    .items .item .info {
        font-size: 1.3em;
        display: flex;
        align-items: center;
        gap: 0.5em;
    }

    .items .item .info * {
        /* animation: updateValue 350ms forwards ease-in-out; */
    }

    .items .item .row {
        gap: 0.5em;
        display: flex;
        flex-direction: row;
    }

    .items .item {
        background-color: #0006;
        /* height: fit-content; */
        padding: 0.5em 0.7em;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        display: flex;
        border-radius: 1em;
    }



    .items .item .left {
        flex-direction: column;
    }


    .items .item .right .buy {
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background: #222;
        color: #aeaeae;
        cursor: not-allowed;
        height: 100%;
        width: fit-content;
        font-size: 1.3em;
        padding: 0.6em 1em;
        border-radius: 0.2em;
    }
    

    .items .item .right .buy.can {
        background: #252;
        cursor: pointer;
        color: #e3e3e3;
    }

    .payment > .title {
        color: #eee8;
    }

    .payment .cost {
        width: 100%;
        display: flex;
        gap: 0.5rem;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .payment .cost .cost_item {
        display: inline-block;
        flex-direction: row;
        background: #522;
        width: fit-content;
        padding: 0.25em 0.6em;
        border-radius: 0.3em;
        color: #eb8a8a;
    }

    .payment .cost .cost_item.can {
        background: #252;
        /* background: rgba(13, 248, 83, 0.485); */
        color: #ceffcdf7;
    }

    .payment .cost .cost_item * {
        display: inline-block;
    }

    .payment .cost .cost_item ._icon {
        height: 1em;
        /* color: #ababab; */
    }

    .payment .cost .cost_item ._value {
        font-weight: bold;
    }
</style>
