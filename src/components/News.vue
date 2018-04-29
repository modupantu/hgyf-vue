<template>
    <div>
        <title-nav :titleList="titleList"></title-nav>
        <div class="container">
        <router-view></router-view>
        </div>
    </div>
</template>
<script>
import new1jpg from "@/assets/new/news_02.png";
import news from "@/assets/news.jpg";
import titleNav from "./template/TitleNav";
export default {
  "/news": "News",
  data() {
    return {
      titleList: [
        {
          url: news,
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
