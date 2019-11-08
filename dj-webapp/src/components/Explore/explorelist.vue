<template>
    <div>
        <img :src="data.Img" :key="eid" class="_img1">
        <p class="_p">{{data.Title}}</p>
        <div class="_block"></div>
    </div>
</template>

<script>
  export default {
    name: "explorelist",
    props:["data","eid"]
  }
</script>

<style scoped>

</style>