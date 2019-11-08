<template>
    <div>
        <Explore-header :data="exploreInfo.header" ></Explore-header>
        <Explore-List :key="eid" :data="exp" :eid="eid" v-for="(exp,eid) in exploreInfo.ImgList"></Explore-List>
    </div>
</template>

<script>
  import header from "../components/Explore/header"
  import explorelist from "../components/Explore/explorelist"
  import exploreApi from "../apis/exploreApi";

  export default {
    name: "Explore",
    components: {
      "Explore-header": header,
      "Explore-List": explorelist,
    },
    data: function () {
      return {
        exploreInfo: [] , //页面的数据模型
      }
    },
    methods: {
      _initPageData() {
        exploreApi.getexploreInfo(data => {
          console.log(data);
          this.exploreInfo = data;
        })
      }
    },
    created() {
      this._initPageData();
    }
  }
</script>

<style scoped>
@import "../../public/assets/stylesheet/explore.css";
</style>