<template>
    <div>
        <div class="main">
            <img :src="data.Img1" class="lindang"><br>
            <div class="_top">
                <img :src="data.Img2" class="left-img">
                <span class="login">{{data.login}}</span>
                <img :src="data.Img4" class="_right-img">
            </div>
        </div>
        <div class="con-block"></div>
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