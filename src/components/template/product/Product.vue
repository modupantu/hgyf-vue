<template>
    <div class="product">
        <div class="product-box">
            <ul>
                <li v-for="str in produceImg">
                    <div>
                      <img :src="str.url" alt="">
                    </div>
                    <p>{{str.title}}</p>
                </li>
               
            </ul>
        </div>
    </div>
</template>
<script>
import product1 from "@/assets/product/product1.jpg";
import product2 from "@/assets/product/product2.jpg";
import product3 from "@/assets/product/product3.jpg";
import product4 from "@/assets/product/product4.jpg";
import product5 from "@/assets/product/product5.jpg";
import product6 from "@/assets/product/product6.jpg";
import product7 from "@/assets/product/product7.jpg";
import product8 from "@/assets/product/product8.jpg";
import product9 from "@/assets/product/product9.jpg";
import product10 from "@/assets/product/product10.jpg";
export default {
  "/product": "Product",
  data(){
      return{
          produceImg: [
        {
          url:product1,
          title: "红烧排骨粉"
        },
        {
          url: product2,
          title: "麻辣鱼粉"
        },
        {
          url:product3,
          title: "双椒鱼头粉"
        },
        {
          url:product4,
          title: "酸菜鱼粉"
        },
        {
          url: product5,
          title: "酸辣鱼粉"
        },
        {
          url:product6,
          title: "剁椒鱼粉"
        },
        {
          url:product7,
          title: "豆豉凌鱼粉"
        },
        {
          url:product8,
          title: "番茄肉丸粉"
        },
        {
          url:product9,
          title: "红烧鸡块粉"
        },
        {
          url:product10,
          title: "红烧牛腩粉"
        }
      ]
      }
  }
};
</script>
<style scoped>
.product {
  width: 1280px;
  min-height: 1000px;
  margin: 0 auto;
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
  background: brown;
}
.product-box li div{
    width: 350px;
    height:250px;
    overflow: hidden;
}
.product-box li div img{
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
