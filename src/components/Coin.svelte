<script lang="ts">
    import { coin } from "../lib/types"
    import coin_img from "../assets/coin.png"

</script>
<!-- https://www.flaticon.com/free-icons/coin -->
<div class="container">
    <img src="{coin_img}" class="coin" alt="💵">
</div>

<style>
    .container {
        vertical-align: middle;
        position: relative;
        display: inline-flex;
        align-items: center;
        height: 100%;
    }

    img.coin {
        image-rendering: optimizeSpeed;
      height: 1em;
      width: 1em;
      vertical-align: middle;
    }
</style>