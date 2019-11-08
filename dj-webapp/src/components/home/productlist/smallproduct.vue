<template>
    <div>
        <div class="osmo-action-osmo">
            <div class="osmo-left">
                <img :src="data.SmallImg1">
                <p>{{data.SmallName1}}</p>
                <p>{{data.SmallPrice1}}</p>
            </div>
            <div class="con2"></div>
            <div class="osmo-right">
                <img :src="data.SmallImg">
                <p>{{data.SmallName}}</p>
                <p>{{data.SmallPrice}}</p>
            </div>
        </div>
        <div class="con1"></div>
    </div>
</template>

<script>
  export default {
    name: "smallproduct",
    props:["data","pid"],
  }
</script>

<style scoped>

</style>