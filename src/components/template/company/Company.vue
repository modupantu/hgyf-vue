<template id="Company">
    <div>
        <div class="Cp-content">
            <!-- 公司介绍页面 -->
           <div class="Cp-logo">
               <img :src="img[0].img" alt="logo">
           </div>
           <h2>“禾谷鱼粉”是由禾谷鱼粉商贸有限公司创立的，面向全国打造的一个餐饮品牌，是专业的餐饮合作服务商。</h2>
            <img :src="img[1].img" alt="bgimg">
            <div class="Cp-gongSi">禾谷鱼粉商贸有限公司成立于2010年，总部位于上海，主要经营米线系列产品和地方特色小吃。
在米线行业内率先导入CIS形象识别系统，贯彻HACCP安全卫生系统。以弘扬中华美食文化与推动中国快餐为使命。</div>
            <div class="Cp-video"></div>
            <div class="Cp-miaoshu">
                <p>公司瞄准中高端餐饮市场，现已启动全国市场，已在广州、武汉、杭州、成都等地设立分公司直营门店，以上海为中心向全国辐射的商业拓展模式。</p>
                <p>大鼓米线发挥口味特色优势，依托雄厚的资金实力，先进的经营管理，领先的研发能力敏锐把握市场脉搏，坚持走品牌战略。以优质的服务和高雅时尚的餐厅环境，为消费者提供健康、快捷、符合现代生活形态的快餐美食。</p>
            </div>
        </div>
    </div>
</template>
<script>
import imgLogo from "@/assets/home_logo.png";
import BGimg from "@/assets/7f.jpg";
export default {
  name: "Company",
  data() {
    return {
      img: [{ img: imgLogo }, { img: BGimg }]
    };
  }
};
</script>
<style scoped>
.Cp-content {
  width: 1240px;
  height: 1200px;
  background: pink;
  margin: 0 auto;
  text-align: center;
}
.Cp-logo {
  margin-bottom: 15px;
}
.Cp-content h2 {
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 35px;
}
.Cp-gongSi {
  color: #333;
  width: 930px;
  margin: 50px auto 70px;
  font-size: 15px;
  line-height: 32px;
  text-indent: 80px;
}
.Cp-video {
  float: left;
  width: 480px;
  height: 400px;
  background: greenyellow;
}
.Cp-miaoshu {
  width: 560px;
  float: right;
  padding-top: 20px;
  background: fuchsia;
  padding-right:65px;
}
.Cp-miaoshu p {
    text-align: left;
  color: #333;
  font-size: 15px;
  text-indent: 2em;
  line-height: 34px;
  margin-top: 35px;
}
</style>
