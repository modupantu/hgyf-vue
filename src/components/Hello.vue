<template>
<div> 
<a-banner :listImg="listImg"></a-banner>
  <div class="join_type">
    <ul>
      <li class="li_1">
        <p>123</p>
      </li>
      <li>
        <p>456</p>
      </li>
       <li>
        <p>456</p>
      </li>
       <li>
        <p>456</p>
      </li>
    </ul>
  </div>
  <!-- 加盟流程 -->
  <div class="join_liucheng">
    <div class="join_title">
        <img id="imgLogo" src="../assets/home_logo.png" alt="">
        <h2>加盟流程 12步完美搞定</h2>
    <small>禾谷鱼粉</small>
    <p>禾谷鱼粉商贸有限公司建设的，面向全国打造的一个餐饮品牌。想知道禾谷鱼粉怎么加盟？禾谷鱼粉加盟、禾谷鱼粉加盟费、禾谷鱼粉怎么加盟，就来此栏目。</p>
    </div>
     <img src="../assets/home_flow.png" alt="">
  </div>
  <!-- 产品列表 -->
  <div class="product_table">
    <div class="container">
      <p-banner v-bind:produceImg="produceImg"></p-banner>
    </div>
  </div>
</div>
</template>
<script>
import Banner from "./template/Banner.vue";
import Produce_Banner from "./template/Produce_Banner.vue";
export default {
  "/hello": "Hello",
  data() {
    return {
      listImg: [
        {
          url:
            "http://www.ysc66.com/Uploads//banner/2017-10-31/59f7f3a334aeb_1920x500.png"
        },
        {
          url: "http://www.ysc66.com/Public/Home/images/infomation/banner.png"
        },
        {
          url:
            "http://www.ysc66.com/Uploads//banner/2017-11-10/5a054c1c9376b_1920x500.png"
        },
        {
          url:
            "http://www.ysc66.com/Uploads//banner/2017-12-25/5a40b29eae795_1920x500.png"
        },
        {
          url: "http://www.ysc66.com/Public/Home/images/infomation/banner.png"
        }
      ],
      produceImg: [
        {
          url:
            "http://www.ysc66.com/Uploads//banner/2017-10-31/59f7f3a334aeb_1920x500.png",
          title: "产品1"
        },
        {
          url: "http://www.ysc66.com/Public/Home/images/infomation/banner.png",
          title: "产品2"
        },
        {
          url:
            "http://www.ysc66.com/Uploads//banner/2017-11-10/5a054c1c9376b_1920x500.png",
          title: "产品3"
        },
        {
          url:
            "http://www.ysc66.com/Uploads//banner/2017-12-25/5a40b29eae795_1920x500.png",
          title: "产品4"
        },
        {
          url: "http://www.ysc66.com/Public/Home/images/infomation/banner.png",
          title: "产品5"
        },
        {
          url:
            "http://www.ysc66.com/Uploads//banner/2017-10-31/59f7f3a334aeb_1920x500.png",
          title: "产品6"
        },
        {
          url:
            "http://www.ysc66.com/Uploads//banner/2017-10-31/59f7f3a334aeb_1920x500.png",
          title: "产品7"
        },
        {
          url:
            "http://www.ysc66.com/Uploads//banner/2017-10-31/59f7f3a334aeb_1920x500.png",
          title: "产品8"
        },
        {
          url:
            "http://www.ysc66.com/Uploads//banner/2017-10-31/59f7f3a334aeb_1920x500.png",
          title: "产品9"
        },
        {
          url:
            "http://www.ysc66.com/Uploads//banner/2017-12-25/5a40b29eae795_1920x500.png",
          title: "产品10"
        }
      ]
    };
  },
  components: {
    "p-banner": Produce_Banner,
    "a-banner": Banner
  },
  mounted() {
    window.addEventListener("scroll", this.imgScroll);
  },
  methods: {
    // imgScroll() {
    //   let i = 30;
    //   let scrollTop =
    //     window.pageYOffset ||
    //     document.documentElement.scrollTop ||
    //     document.body.scrollTop;
    //   let imgLogo = document.getElementById("imgLogo");
    //   console.log(scrollTop)
    //   if (scrollTop < 100) {
    //    imgLogo.removeAttribute('imgLogo');
    //   }else if (scrollTop >= 100){
    //     imgLogo.setAttribute('imgLogo','imgLogo');
    //   }
    // }
  }
};
</script>
<style scoped>
.join_type {
  width: 100%;
  height: 171px;
  background: #D61F6D;
  overflow: hidden;
}
.join_type ul {
  width: 1240px;
  height: 135px;
  margin: 20px auto;
  background: pink;
  border-left: 1px dotted #dc9c9b;
}
.join_type ul li {
  float: left;
  width: 293px;
  height: 122px;
  padding: 10px 0 3px;
  background: red;
  border-right: 1px dotted #dc9c9b;
}
.join_type ul .li_1 {
  width: 357px;
}
/*加盟流程*/
.join_liucheng {
  width: 1240px;
  height: 685px;
  overflow: hidden;
  background: burlywood;
  margin: 0 auto;
}
.join_liucheng .join_title {
  width: 100%;
  height: 270px;
  margin-top:60px;
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
    color: #777777;
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
  background: green;
}
</style>