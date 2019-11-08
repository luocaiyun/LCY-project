<template>
    <div class="goods-classifi">
        <img :src="data.Img" alt="">
        <div>
            <p>{{data.Title}}</p>
            <span>{{data.Describe}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "products",
    props:["data","sid"]
  }
</script>

<style scoped>

</style>