<template>
<div>
    <p class="productname" >{{data.SeriesName}}</p>
    <home-big-img :data="data.BigProduct" :pid="data.BigProduct"></home-big-img>
    <home-small-img :data="data.SmallLeft" :pid="data.SmallLeft"></home-small-img>
    <p class="_more">{{data.MoreSeries}}</p>
</div>
</template>

<script>
  import bigproduct from "./productlist/bigproduct";
  import smallproduct from "./productlist/smallproduct";

  export default {
    name: "vproductlist",
    props:["data","pid"],
    components: {
      "home-big-img": bigproduct,
      "home-small-img": smallproduct
    }
  }
</script>

<style scoped>

</style>