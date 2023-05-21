<script lang="ts">
    import "../lib/types"
    import type { ItemStructure } from "../lib/types";
    export var items: ItemStructure;

</script>

<div class="items">
    {#each Object.entries(items) as item}
        {#key item[1].value}
            <div class="item">
                <div class="icon">{item[1]?.icon || " "}</div>
                <div class="info">
                    <span class="title">{item[1].title}</span>
                    <span class="value">{item[1].value}</span>
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

    .items .item .info{
        font-size: 1.3em;
        display: flex;
        align-items: center;
        gap: 0.5em;
    }

    .items .item .info * {
        /* animation: updateValue 350ms forwards ease-in-out; */
    }

    .items .item {
        border-radius: 1em;
        gap: 0.5em;
        height: fit-content;
        padding: 0.5em 0.7em;
        width:100%;
        display: flex;
        background-color: #0006;
    }




    @keyframes updateValue {
        from {
            color: rgb(0, 238, 0);
        }
        to {

        }
    }
</style>