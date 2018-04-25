<template id="about">
    <div>
        <title-nav :titleList="titleList" :navs="navs"></title-nav>    
        <router-view></router-view>
    </div>
</template>
<script>
import product_bg from "@/assets/product_bg.jpg";
import titleNav from "./template/TitleNav.vue";
import product from "./template/product/Product.vue";
export default {
  "/about": "About",
  data() {
    return {
      titleList: [
        {
          url: product_bg,
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
