<template>
    <div>
    <div class="_osmo-mobile">
        <div class="osmo-mobile"></div>
        <p>{{data.BigName}}</p>
        <h6>{{data.BigPrice}}</h6>
    </div>
    <div class="con1"></div>
    </div>
</template>

<script>
  export default {
    name: "vbigproduct",
    props:["data","pid"],
  }
</script>

<style scoped>

</style>