<template id="BrandStpry">
    <div class="BM-k">
        <!-- 品牌优势 -->
        <div v-for="bm in BMlist">
            <h2>{{bm.title}}</h2>
            <small>{{bm.Subtitle}}</small>
            <p>{{bm.content}}</p>
        </div>       
    </div>
</template>
<script>
export default {
  name: "BrandStpry",
  data() {
    return {
      BMlist: [
        {
          title: "成熟的管理模式",
          Subtitle: "Mature management model",
          content:
            "公司拥有千家成功、成熟店面品牌运营管理经验，有着专业高效的运营团队和严谨使用的辅导系统，让加盟合作伙伴无后顾之忧，为创业者提供强有力的安全营运保障。"
        },
        {
          title: "完善的服务体系",
          Subtitle: "A perfect service system",
          content:
            "我们能为加盟商提供良好的学习实践基地，公司机构齐全，提供产品研发、前期选址、加盟推广、营销策划、销售支持等全过程综合服务。"
        },
        {
          title: "现代化管理系统",
          Subtitle: "Modern management system",
          content:
            "最完整的供应链体系大幅度提升产品质量，和服务质量，积极构建综合加工物流中心。"
        },
        {
          title: "品牌战略",
          Subtitle: "Brand strategy",
          content:
            "专注产应：持续资源投入，走品牌发展之路。禾谷鱼粉成立之初就确立了“品牌”战略，以品牌塑造为核心，打造中国餐饮连锁第一品牌。品牌管理中心工作涵盖品牌策划，品牌设计、品牌传播等内容。他们的工作保障了每个禾谷鱼粉的伙伴能够无忧营运店面，得到一对一的专项品牌管理服务。"
        },
        {
          title: "中国合作伙伴分布",
          Subtitle: "Distribution of Chinese partners",
          content:
            "禾谷鱼粉以及公司其他品牌直营店和特许加盟店分布全国各个省份。"
        },
        {
          title: "成熟的研发团队",
          Subtitle: "Mature R & D team",
          content:
            "我们拥有完善的产品研发硬件设施以及专业的研发团队，确保了产品能够实时更新以及店面督导的系统指导，使公司品牌走向传统标准化。"
        },
        {
          title: "丰富的运营经验",
          Subtitle: "Rich operating experience",
          content:
            "多年的历练成就了高素质，高效率的服务团队，能够及时为客户解决从店面到后期经营模式，产品更新，策划活动等一系列问题。"
        }
      ]
    };
  }
};
</script>
<style scoped>
.BM-k {
  width: 1240px;
  margin: 0 auto;
}
.BM-k div{
    margin: 50px 0;
}
.BM-k div h2{
    font-size: 36px;
    color: #D61F6D;
    font-weight: bold;
}
.BM-k div small{
    font-size: 18px;
    line-height: 26px;
    color: #9d9d9d;
}
.BM-k div p{
    padding: 20px 0;
    font-size: 18px;
    border-top: 1px solid #9d9d9d;
    margin-bottom: 75px;
    text-indent: 2em;
}
</style>