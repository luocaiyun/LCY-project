<template>
    <div>
        <user-header :data="userInfo.header"></user-header>
        <user-information v-for="(phto,pid) in userInfo.NavList" :data="phto" :pid="pid" :key="pid"></user-information>
    </div>
    <!--    <user-footer></user-footer>-->
</template>

<script>
  import header from "../components/user/header";
  // import footer from "../components/commons/footer"
  import informations from "../components/user/informations";
  import userApi from "../apis/userApi";

  export default {
    name: "user",
    components: {
      // "user-footer": footer,
      "user-information": informations,
      "user-header": header
    },
    data: function () {
      return {
        userInfo: [] , //页面的数据模型
      }
    },
    methods: {
      _initPageData() {
        userApi.getuserInfo(data => {
          console.log(data);
          this.userInfo = data;
        })
      }
    },
    created() {
      this._initPageData();
    }

  }
</script>

<style scoped>
@import "../../public/assets/stylesheet/user.css";
</style>