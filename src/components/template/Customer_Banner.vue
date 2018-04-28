<template>
    <div>
        <div class="title">
            <h2>加盟客户<small>/JOIN CUSTOMER</small></h2>
        </div>
    <div class="swiper-container" id="Costomer">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <p class="name">-周女士</p>
                <p class="product">禾谷鱼粉</p>
                <p class="address">北京市大兴区黄村镇火神庙国际商业中心</p>
                <p>2017-04-12</p>
            </div>
            <div class="swiper-slide">
                <p class="name">-常女士</p>   
                <p class="product">禾谷鱼粉</p>
                <p class="address">北京市石景山区八角东路融科创意中心地下一层美食城</p>
                <p>2017-06-12</p>
            </div>
            <div class="swiper-slide">
                <p class="name">-辛先生</p>
                <p class="product">禾谷鱼粉</p>
                <p class="address">天津市大港区中塘镇正兴里底商</p>
                <p>2017-07-13</p>
            </div>
            <div class="swiper-slide">
                <p class="name">-李先生</p>
                <p class="product">禾谷鱼粉</p>
                <p class="address">天津市滨海新区汉沽新开中路</p>
                <p>2016-07-13</p>
            </div>
            <div class="swiper-slide">
                <p class="name">-李先生</p>
                <p class="product">禾谷鱼粉</p>
                <p class="address">吉林省长春市南关区自强街道重庆路69号活力城地下一层</p>
                <p>2017-09-02</p>
            </div>
            <div class="swiper-slide">
                <p class="name">-朱先生</p>
                <p class="product">禾谷鱼粉</p>
                <p class="address">吉林省长春市大马路与三道街交汇欧亚</p>
                <p>2017-09-02</p>
            </div>
            <div class="swiper-slide">
                <p class="name">-李先生</p>
                <p class="product">禾谷鱼粉</p>
                <p class="address">吉林省长春市朝阳区重庆街道重庆路1250号万达广场</p>
                <p>2017-09-02</p>
            </div>
            <div class="swiper-slide">
                <p class="name">-徐女士</p>
                <p class="product">禾谷鱼粉</p>
                <p class="address">吉林省长春市二道区远达街道长吉北线677号长春师范大学</p>
                <p>2018-03-02</p>
            </div>
            <div class="swiper-slide">
                <p class="name">-张先生</p>
                <p class="product">禾谷鱼粉</p>
                <p class="address">吉林省长春市净月区博硕路美食广场二楼</p>
                <p>2018-03-12</p>
            </div>
            <div class="swiper-slide">
                <p class="name">-吴先生</p>
                <p class="product">禾谷鱼粉</p>
                <p class="address">陕西省西安市临潼区兵马俑商业街</p>
                <p>2018-02-12</p>
            </div>
            <!-- <div class="swiper-slide" v-for="str1 in produceImg">
              <p class="produce_title">{{str1.title}}</p>
            </div> -->
        </div>
    </div>
    </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "Customer_Banner",
  props: ["produceImg"],
  mounted() {
    let mySwiper = new Swiper("#Costomer", {
      direction: 'vertical',
      autoplay: {
        delay: 3000
      },
      slidesPerView: 6, //显示几个
      spaceBetween: 1, //间距
      loop: true,
      speed: 1000,
      breakpoints: {
        1024: {
          slidesPerView: 5,
          spaceBetween: 1
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 1
        },
        640: {
          slidesPerView: 5,
          spaceBetween: 1
        },
        320: {
          slidesPerView: 5,
          spaceBetween: 1
        }
      }
    });
  }
};
</script>
<style scoped>
.swiper-container {
  width: 100%;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
}
.swiper-slide {
  text-align: center;
  font-size: 24px;
  background: #fff;
  /* Center slide text vertically */
   display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex; 
   display: flex; 

   /* -webkit-box-pack: center; */
  /* -ms-flex-pack: center; */
  /* -webkit-justify-content: center; */
  /* -webkit-box-align: center;
  -ms-flex-align: center; */
  /* -webkit-align-items: center;   */
  align-items: center;
   /* justify-content:space-between;  */
}
/* .swiper-slide p{
    line-height: 80px;
} */
.swiper-slide .name{
    width: 100px;
    margin:0 50px;
}
.swiper-slide .product{
    width: 100px;
    margin:0 50px;
}
.swiper-slide .address{
    width: 400px;
    margin:0 100px;
} 
.title{
    width: 100%;
    height:60px;
    line-height: 60px;
}
.title h2 {
  color: #D61F6D;
  font-size: 30px;
  margin-left: 20px;
}
.title h2 > small {
  color: white;
  font-size: 20px;
}
</style>
