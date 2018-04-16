<template id="about">
    <div>
        <title-nav :titleList="titleList" :navs="navs"></title-nav>    
        <router-view></router-view>
    </div>
</template>
<script>
import gongsibg from "@/assets/about01_banner.jpg";
import titleNav from "./template/TitleNav.vue";
import product from "./template/product/Product.vue";
export default {
  "/about": "About",
  data() {
    return {
      titleList: [
        {
          url: gongsibg,
          name: "产品展示"
        }
      ],
      navs: [
        { urlname: "/about", name: "产品展示" },
        { urlname: "/shop", name: "店铺展示" },
      ]
    };
  },
  components: {
    titleNav
  }
};
</script>
<style scoped>
div{
    overflow: hidden;
}
</style>
