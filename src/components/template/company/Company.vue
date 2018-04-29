<template id="Company">
    <div>
        <div class="Cp-content">
            <!-- 公司介绍页面 -->
           <div class="Cp-logo">
               <img :src="img[0].img" alt="logo">
           </div>
           <h2>“禾谷鱼粉”是由北京禾谷鱼粉商贸有限公司创立的，面向全国打造的一个餐饮品牌，是专业的餐饮合作服务商。</h2>
            <img :src="img[1].img" alt="bgimg">
            <div class="Cp-gongSi">授人以鱼&ensp;&ensp;不如授之以渔</div>
            <div class="CP-miaoshu">集团总部位于首都北京在广安路9号国投财富广场,公司办公拥有500平米国际化办公环境,坐拥2000平米全方位服务物流配送中心,近年来公司整合国内顶尖的原料生产厂家,拥有自己的实体工厂,保证产品的安全、健康的营养以及新鲜的原料。同时全面了解市场的需求，不断创新产品的技术与口感，确保了每个产品都能受到消费者的认可。</div>
            <div class="Cp-video"><img :src="img[3].img" alt=""></div>
            <div class="Cp-miaoshu">
              <img :src="img[2].img" alt="">
                <!-- <p>北京禾谷鱼粉商贸有限公司成立于2013年，总部设立于哈尔滨与北京，主要经营鱼粉系列产品，公司始终秉承着“将最优质的产品提供给消费者，将最专业的服务提供给客户”的追求理念，随着禾谷鱼粉公司的不断扩展以及品牌的晋升，在2013年公司已经为集团产业、投资管理、连锁营运以及品牌管理于一体的多元化企业。</p>
                <p>禾谷鱼粉发挥口味特色优势，依托雄厚的资金实力，先进的经营管理，领先的研发能力敏锐把握市场脉搏，坚持走品牌战略。以优质的服务和高雅时尚的餐厅环境，为消费者提供健康、快捷、符合现代生活形态的快餐美食。</p> -->
            </div>
        </div>
    </div>
</template>
<script>
import imgLogo from "@/assets/home_logo.png";
import brand1 from "@/assets/brand1.jpg";
import brand2 from "@/assets/brand2.jpg";
import BGimg from "@/assets/7f.png";
export default {
  name: "Company",
  data() {
    return {
      img: [{ img: imgLogo }, { img: BGimg },{img:brand1},{img:brand2}]
    };
  }
};
</script>
<style scoped>
.Cp-content {
  width: 1240px;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
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
  color: #D61F6D;
  width: 930px;
  margin: 50px auto 70px;
  font-size: 30px;
  line-height: 30px;
  text-indent: 80px;
}
.CP-miaoshu{
  text-align: left;
  text-indent: 2em;
  font-size: 15px;
  line-height: 32px;
  margin:0 auto 30px auto;
  width: 960px;
}
.Cp-video {
  float: left;
  width: 585px;
  background: #FFF;
}
.Cp-miaoshu {
  width: 560px;
  float: right;
  /* padding-top: 20px; */
  background: #FFF;
  padding-right:90px;
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
