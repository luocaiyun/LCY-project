<template>
    <div class="main-list">
        <img :src="data.ImgLeft"  class="imgleft">
        <span class="_span">{{data.ListName}}</span>
        <img :src="data.ImgRight" class="right-img">
    </div>
</template>

<script>
  export default {
    name: "informations",
    props:["data","pid"]
  }
</script>

<style scoped>

</style>