<template id="join">
    <div>
        <title-nav :titleList="titleList" :navs="navs"/>
        <div class="j-contentBox">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import join_bg from "@/assets/join_bg.jpg";
import titleNav from "./template/TitleNav.vue";
export default {
  "/join": "Join",
  data() {
    return {
      titleList: [
        {
          url: join_bg,
          name: "加盟流程"
        }
      ],
      navs: [
        { urlname: "/join", name: "加盟流程" },
        { urlname: "/joinAdvantage", name: "加盟优势" }
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

