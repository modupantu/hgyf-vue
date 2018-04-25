<template>
    <div class="product">
        <div class="product-box">
            <ul>
                <li v-for="str in shopImg">
                    <div class="shop_box">
                      <img :src="str.url" alt="">
                    </div>
                    <p>{{str.title}}</p>
                </li>
               
            </ul>
        </div>
    </div>
</template>
<script>
import shop1 from "@/assets/shop/shop1.jpg";
import shop2 from "@/assets/shop/shop2.jpg";
import shop5 from "@/assets/shop/shop5.jpg";
import shop6 from "@/assets/shop/shop6.jpg";
import shop7 from "@/assets/shop/shop7.jpg";
import shop8 from "@/assets/shop/shop8.jpg";
import shop9 from "@/assets/shop/shop9.jpg";
export default {
  '/shop': 'Shop',
    data(){
      return{
          shopImg: [
        {
          url:shop1,
          title: "店面设计效果图"
        },
        {
          url: shop2,
          title: "店面设计效果图"
        },
        {
          url: shop5,
          title: "店面设计效果图"
        },
        {
          url:shop6,
          title: "店面设计效果图"
        },
        {
          url:shop7,
          title: "店面设计效果图"
        },
        {
          url:shop8,
          title: "店面设计效果图"
        },
        {
          url:shop9,
          title: "店面设计效果图"
        }
      ]
      }
  }
}
</script>
<style scoped>
.product {
  width: 1280px;
  min-height: 1000px;
  margin: 0 auto;
  /* background: red; */
}
.product-box {
  width: 100%;
}
.product-box li {
  float: left;
  margin-left: 65px;
  margin-bottom: 70px;
  width: 350px;
  height: 300px;
  /* background: brown; */
}
.product-box li div{
    width: 350px;
    height:265px;
    overflow:hidden;
}
.shop_box img{
    width: 350px;
    
}
.product-box li p {
    width: 350px;
    height:50px;
    background: wheat;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
}
</style>