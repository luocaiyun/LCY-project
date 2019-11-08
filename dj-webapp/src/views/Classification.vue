<template>
    <div>
        <Classification-header></Classification-header>
        <Classification-product :key="sid" :data="title" :sid="sid" v-for="(title,sid) in ClassificationInfo.ClassificationList"></Classification-product>
        <Classification-footer></Classification-footer>
    </div>
</template>

<script>
  import footer from "../components/commons/footer"
  import header from "../components/Classification/header"
  import products from "../components/Classification/products";
  import classificationApi from "../apis/classificationApi";

  export default {
    name: "Classification",
    components: {
      "Classification-footer": footer,
      "Classification-header": header,
      "Classification-product": products
    },
    data: function () {
      return {
        // flag:true,
        ClassificationInfo: []  //页面的数据模型
      }
    },
    methods: {
      _initPageData() {
        classificationApi.GetClassificationModels(data => {
          console.log(data);
          this.ClassificationInfo = data;
        })
      }
    },
    created() {
      this._initPageData();
    }

  }
</script>

<style scoped>
    @import "../../public/assets/stylesheet/classification.css";
</style>