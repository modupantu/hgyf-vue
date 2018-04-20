<template id="brand">
    <div>
        <title-n v-bind:titleList="titleList" v-bind:navs="navs"></title-n>
        <router-view></router-view>
    </div>
</template>
<script>
import titleNav from "./template/TitleNav.vue";
import gongsibg from "@/assets/about01_banner.jpg";
export default {
  "/brand": "Brand",
  data() {
    return {
      titleList: [
        {
          url: gongsibg,
          name: "公司介绍"
        }
      ],
      navs: [
        { urlname: "/brand", name: "公司介绍" },
        { urlname: "/brandstpry", name: "品牌故事" },
        { urlname: "/brandmerit", name: "品牌优势" },
        { urlname: "/companycontact", name: "联系我们" }
      ]
    };
  },
  components: {
    titleN: titleNav
  }
};
</script>
<style scoped>
div{
    overflow: hidden;
}
</style>
