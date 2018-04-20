<template>
    <div>
        <title-nav :titleList="titleList"></title-nav>
        <div class="container">
        <router-view></router-view>
        </div>
    </div>
</template>
<script>
import new1jpg from "@/assets/new/news_02.jpg";
import gongsibg from "@/assets/about01_banner.jpg";
import titleNav from "./template/TitleNav";
export default {
  "/news": "News",
  data() {
    return {
      titleList: [
        {
          url: gongsibg,
          name: "新闻中心"
        }
      ]
    }
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
.container {
  width: 1280px;
}
</style>
