<template>
    <div class="swiper-container" id="Pwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="str1 in produceImg" :style="{ backgroundImage: 'url(' + str1.url + ')' }">
              <p class="produce_title">{{str1.title}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name:'Produce_Banner',
  props: ["produceImg"],
  mounted() {
    let mySwiper = new Swiper("#Pwiper", {
      autoplay: {
        delay: 3000,
      },
      slidesPerView:3,//显示几个
      slidePerGroup:3,//几个为一组
      spaceBetween:30,//间距
      loop: true,
      speed: 1000
    });
  }
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 380px;
}
.swiper-container .swiper-wrapper {
  width: 100%;
  height: 100%;
}
.swiper-container .swiper-slide {
  position: relative;
  background-position: center;
  background-size: cover;
  width: 370px;
  height: 277px;
}
.swiper-slide img {
  width: 370px;
  height: 277px;
}
.produce_title{
   position: absolute;
  bottom:-100px;
  left:10px;
  width: 370px;
  height:70px;
  line-height: 70px;
  text-align: center;
  padding:0 10px;
  font-size: 18px;
  background: #fff;
 
}
.produce_title:hover{
  color:#D61F6D;
}
.swiper-slide:hover{
  background-size:1000px 500px; 
  background-repeat: no-repeat;
  animation: fd 1s;
}
@keyframes fd{
  from{background-size:600px 400px;}
  to{background-size:1000px 600px;}
}
</style>