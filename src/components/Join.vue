<template id="join">
    <div>
        <title-nav :titleList="titleList" :navs="navs"/>
        <div class="j-contentBox">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import gongsibg from "@/assets/about01_banner.jpg";
import titleNav from "./template/TitleNav.vue";
export default {
  "/join": "Join",
  data() {
    return {
      titleList: [
        {
          url: gongsibg,
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

