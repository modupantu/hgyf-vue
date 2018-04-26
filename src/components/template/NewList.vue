<template>
<div class="container">
    <div class="joinList" v-for="str in imgList">
        <img :src="str.url" alt="logo">
        <div class="content">
            <h3>{{str.title}}</h3>
            <small>时间:{{str.time}}</small>
            <p v-text="str.content"></p>
            <router-link :to="{path:str.upath}">阅读</router-link> 
        </div>
    </div>
</div>
</template>
<script>
import new1jpg from "@/assets/new/news_02.png";
export default {
  "/newlist": "NewList",
  data() {
    return {
      imgList: [
        {
          id: "b",
          upath: "/newshow",
          url: new1jpg,
          title:
            "【邀请函】禾谷渔粉邀请您参加第二十届中国(北京)特许加盟大会暨展览会",
          time: "2018-05-04",
          content: "展会地点  北京国家会议中心"
        },
         {
          id: "a",
          upath: "/newshowa",
          url: new1jpg,
          title: "【喜贺】禾谷渔粉沈阳餐饮加盟展圆满落幕",
          time: "2018-04-13",
          content:
            "北京禾谷鱼粉商贸有限公司成立于2013年，总部位于北京，主要经营渔粉，小吃系列产品。"
        }]
    };
  }
};
</script>
<style scoped>
.container {
  width: 1280px;
  overflow: hidden;
}
.joinList {
  float: left;
  width: 600px;
  height: 200px;
  margin: 40px 20px;
  position: relative;
}
.container .joinList img {
  float: left;
  width: 180px;
  height: 180px;
  margin: 10px 30px 10px 10px;
  border-radius: 50%;
}
.content {
  float: left;
  width: 380px;
  height: 200px;
}
.content h3 {
  font-size: 14px;
  padding: 15px 0 10px;
  line-height: 24px;
}
.content p {
  color: #666;
  margin: 10px 0 20px;
  font-size: 13px;
  line-height: 24px;
  height: 48px;
  overflow: hidden;
}
.content a {
  position: absolute;
  bottom: 30px;
  right: 30px;
  display: block;
  width: 50px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border-radius: 12px;
  font-size: 14px;
  color: #fff;
  background: #d61f6d;
  margin-left: 300px;
  z-index: 10;
}
.content a:hover {
  color: #ddd;
}
</style>
