<template>
<div>
    <div class="container">
        <h2 ><b>【邀请函】</b>{{a[0].title}}</h2>    
        <div class="conk">
            <span>作者：admin</span>
            <span>时间：{{a[0].time}}</span>
            <span>来源：北京禾谷鱼粉商贸有限公司</span>    
        </div>
        <div class="content">
            <p>{{a[0].content}}</p>
            <p>展会时间：{{a[0].zhtime}}</p>
            <p>地点：{{a[0].dizhi}}</p>
            <p>加盟电话：{{a[0].tel}}</p>
            <p>{{a[0].tuiguang}}</p>
            <div class="imgShow">
                <div class="imgone">
                  <img :src="a[0].url" alt="">
                </div>
                <div class="imgtwo">
                  <img :src="a[0].url2" alt="">
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import new1jpg from "@/assets/new/news_02.png";
import new1 from "@/assets/new/new1.jpg";
import brand2 from "@/assets/new/brand2.jpg";
export default {
  "/newshow": "NewShow",
  data() {
    return {
      a: [
        {
          url: new1,
          url2: brand2,
          title: "禾谷渔粉邀请您参加第二十届中国(北京)特许加盟大会暨展览会",
          time: "2018-5-19",
          zhtime:"2018-05-04到2018-05-06",
          content:
            "禾谷鱼粉将在2018-5-4日到2018-5-6日在北京特许加盟展览会参展，我们致力于打造成为最佳的鱼粉餐饮连锁品牌，为更多加盟投资者实现财富梦想！",
          content2:
            "北京禾谷鱼粉商贸有限公司成立于2013年，总部位于北京，主要经营渔粉，小吃系列产品。在米线行业内率先导入CIS形象识别系统，贯彻HACCP安全卫生系统。禾谷鱼粉发挥口味特色优势，依托雄厚的资金实力，先进的经营管理，领先的研发能力敏锐把握市场脉搏，坚持走品牌战略。禾谷鱼粉已经成为中国最受消费者青眯的快餐品牌之一，也是中国餐饮行业的一颗闪耀的新星。 ",
          tuiguang: "选择禾谷鱼粉，相信品牌的力量，和禾谷一起丰收鱼粉财富！！！",
          tel:"400-628-1577",
          dizhi:'北京国家会议中心'
        }
      ]
    };
  }
};
</script>
<style scoped>
.container {
  width: 980px;
  height: 1000px;
  margin: 0 auto;
  text-align: center;
}
.conk {
  width: 100%;
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
  font-size: 12px;
  line-height: 32px;
  margin-bottom: 35px;
}
h2 {
  color: #333333;
  font-size: 20px;
  line-height: 28px;
  margin: 60px auto 10px;
}
h2 b{
    color:#d61f6d;
}
.content p {
  color: #464646;
  font-size: 14px;
  line-height: 30px;
  text-indent: 2em;
  margin-bottom: 25px;
}
.imgShow{
 display: flex;
 width: 980px;
}
.imgShow .imgone{
  width: 490px;
  background: #FFF;
}
.imgShow .imgtwo{
  width: 490px;
  background: #FFF;
}
</style>

