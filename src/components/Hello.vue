<template>
<div> 
<a-banner :listImg="listImg"></a-banner>
  <div class="join_type">
    <ul  class="lu">
      <li>
        <img src="../assets/hello1.png" alt="">
      </li>
      <li>
        <img src="../assets/hello3.png" alt="">
      </li>
       <li>
        <img src="../assets/hello2.png" alt="">
      </li>
       <li>
        <img src="../assets/hello4.png" alt="">
      </li>
    </ul>
  </div>
  <!-- 加盟流程 -->
  <div class="join_liucheng">
    <div class="join_title">
        <img id="imgLogo" src="../assets/home_logo.png" alt="">
        <h2>加盟流程 15步完美搞定</h2>
    <small>禾谷鱼粉</small>
    <p>禾谷鱼粉商贸有限公司建设的，面向全国打造的一个餐饮品牌。想知道禾谷鱼粉怎么加盟？禾谷鱼粉加盟、禾谷鱼粉加盟费、禾谷鱼粉怎么加盟，就来此栏目。</p>
    </div>
     <img src="../assets/home_flow.jpg" alt="">
  </div>
  <!-- 产品列表 -->
  <div class="product_table">
    <div class="container">
      <p-banner v-bind:produceImg="produceImg"></p-banner>
    </div>
  </div>
  <!-- 客户信息 -->
   <div class="Customer">
    <div class="container">
      <c-banner></c-banner>  
    </div>
  </div>
</div>
</template>
<script>
import Banner from "./template/Banner.vue";
import banner1 from "@/assets/banner1.png";
import banner2 from "@/assets/banner2.png";
import banner3 from "@/assets/banner3.png";
import banner4 from "@/assets/banner4.png";
import banner5 from "@/assets/banner5.png";
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
import Produce_Banner from "./template/Produce_Banner.vue";
import Customer_Banner from "./template/Customer_Banner.vue";
export default {
  "/hello": "Hello",
  data() {
    return {
      listImg: [
        {
          url:banner1
        },
        {
          url: banner2
        },
        {
          url:banner3
        },
        {
          url:banner4
        },
        {
          url:banner5
        }
      ],
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
    };
  },
  components: {
    "p-banner": Produce_Banner,
    "a-banner": Banner,
    "c-banner":Customer_Banner,
  }
};
</script>
<style scoped>
.join_type {
  width: 100%;
  /* height: 171px; */
  background: #D61F6D;
  overflow: hidden;
}
.join_type ul {
  width: 1240px;
  /* height: 135px; */
  margin: 20px auto;
  /* background: pink; */
  border-left: 1px dotted #dc9c9b;
}
.join_type ul li {
  float: left;
  width: 293px;
  /* height: 122px; */
  padding: 10px 0 30px;
  /* background: red; */
  border-right: 1px dotted #dc9c9b;
}
.lu li img{ 
   width: 293px;
   overflow: hidden;
}
/* .join_type ul .li_1 {
  width: 357px;
} */
/*加盟流程*/
.join_liucheng {
  width: 1240px;
  height: 685px;
  overflow: hidden;
  background: #FFF;
  margin: 0 auto;
}
.join_liucheng .join_title {
  width: 100%;
  height: 270px;
  margin-top:40px;
  text-align: center;
}
#imgLogo {
  transform-origin: center top;
  transform: rotate(0deg);
  animation: huang 2s infinite;
}
.join_title h2{
font-size: 30px;
line-height: 36px;
}
.join_title p{
      line-height: 24px;
    color: #777;
    margin-top: 8px;
    font-size: 14px;
}

@keyframes huang{
  0%{
    transform: rotate(30deg);
  }
  50%{
    transform: rotate(-30deg);
  }
  100%{
    transform: rotate(30deg);
  }
}
/*产品列表*/
.product_table {
  width: 100%;
  height: 390px;
  padding: 75px 0 50px 0;
  background: #e3e3e3;
}
.Customer{
  width:1280px;
  height: 400px;
  margin: 75px auto 70px;
  position: relative;
  background: #e3e3e3;
  overflow: hidden;
}
</style>