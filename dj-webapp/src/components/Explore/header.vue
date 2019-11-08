<template>
    <div>
        <p class="header"><span>发现</span>&nbsp;&nbsp;作品&nbsp;&nbsp;话题</p>
        <div class="header-img" >
            <img :src="data.ImgLeft" >
            <img :src="data.ImgRight" >
        </div>
        <div class="_block"></div>
    </div>
</template>

<script>
  export default {
    name: "vheader",
    props:["data"]

  }
</script>

<style scoped>

</style>