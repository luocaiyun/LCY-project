<template>
    <div>
        <app-header></app-header>
        <home-product-list  :key="pid" :data="name" :pid="pid" v-for="(name,pid) in homeInfo.ListCon.ListOne"></home-product-list>

        <home-youhui></home-youhui>
        <app-footer></app-footer>
    </div>
</template>
<script>
  import footer from "../components/commons/footer"
  import header from "../components/commons/header"
  import productlist from "../components/home/productlist"
  import youhui from "../components/home/youhui"
  import homeApi from "../apis/homeApi";

  export default {
    name: "home",
    components: {
      "app-footer": footer,
      "app-header": header,
      "home-product-list": productlist,
      "home-youhui": youhui,
    },
    data: function () {
      return {
        homeInfo: [] , //页面的数据模型
      }
    },
    methods: {
      _initPageData() {
        homeApi.getHomeInfo(data => {
          console.log(data);
          this.homeInfo = data;
        })
      }
    },
    created() {
      this._initPageData();
    }
  }
</script>

<style scoped>
    @import "../../public/assets/stylesheet/home.css";
</style>