<template id="brand">
    <div>
        <titleN v-bind:titleList="titleList"></titleN>
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
     titleList:[{
          url: gongsibg,
          name: "公司介绍"
      }]
    }
  },
  components: {
    titleN: titleNav
  }
};
</script>
<style scoped>

</style>
