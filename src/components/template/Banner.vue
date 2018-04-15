<template>
    <div class="swiper-container" id="Banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage: 'url(' + str.url + ')' }"></div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
        <div class="swiper-button-prev swiper-button-white"></div>
    <div class="swiper-button-next swiper-button-white"></div>
    </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name:'Banner',
  props: ["listImg"],
  mounted() {
    let _swiper = new Swiper("#Banner", {
      pagination: {
        el: '.swiper-pagination',
        clickable :true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 5000,//3秒切换一次
      },
      loop: true,
      speed: 1000
    });
  }
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 639px;;
}
.swiper-container .swiper-wrapper {
  width: 100%;
  height: 100%;
}
.swiper-container .swiper-slide {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
}
.swiper-container .swiper-pagination-bullet {
  width: 30px;
  height: 30px;
  display: inline-block;
  background: #7c5e53;
}
</style>