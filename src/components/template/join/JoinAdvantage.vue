<template>
    <div class="j-advantageBox">
        <div class="title">
          <h1>七大加盟支持</h1>
          <small>Seventh Party support</small>
        </div>
        <div v-for="str in JAList">
          <h2>{{str.title}}</h2>
          <small>{{str.name}}</small>
          <p>{{str.content}}</p>
        </div>
    </div>
</template>
<script>
export default {
  "/joinAdvantage": "JoinAdvantage",
  data(){
      return {
          JAList:[
              {title:'店面设计',name:'Shop design',content:'在实际施工中，公司的企划部和工程部，会给予相应的指导和建议，帮助加盟商迅速开业，减少不必要的麻烦。'},
              {title:'培训支持',name:'Training support',content:'在商铺开业前，总部提供2名以上人员的培训。包括商铺运营管理、陈列、员工话术销售技巧、制作、出品、补货、订货、排班、设备等方面，确保加盟商完全掌握营运知识。'},
              {title:'开业支持',name:'Opening support',content:'在商铺开业期间，总部会根据加盟商需求派督导老师到加盟店的店面进行开业指导，为期指导三天。'},
              {title:'营销支持',name:'Marketing support',content:'公司策划部提供针对该加盟商所在地的有针对性的开业策划方案。提供公司产品画册、提供开业海报、DM单的设计。'},
              {title:'营运支持',name:'Operational support',content:'禾谷为加盟商安排以为相对应的营运负责人，与门店随时进行联系与沟通跟进，随时解决您在营运中出现的问题。每周我们的营运负责人会与加盟商沟通，解决加盟商在营运中实际发生的一些问题。'},
              {title:'广告宣传支持',name:'Advertising support',content:'节假日促销--公司将为加盟合作伙伴提供宣传类的活动促销方案、海报方案、促销品方案。'},
              {title:'产品更新支持',name:'Product update support',content:'公司的研发部将不断进行新产品的研发在更新，公司会随季度不定期的推出新品发布。'}
          ]
      }
  }
};
</script>
<style scoped>
.j-advantageBox {
  width: 1240px;
 overflow: hidden;
  margin: 0 auto 50px auto;
  text-align: center;
}
small {
  color: #9d9d9d;
}
.title {
  margin: 40px 0;
}
.title h1 {
  font-size: 48px;
  font-weight: bold;
  color: #D61F6D;
}
.j-advantageBox small{
    font-size: 18px;
    line-height: 26px;
}
.title small {
  font-size: 28px;
}

.j-advantageBox h2 {
  font-size: 36px;
  color: #D61F6D;
  font-weight: bold;
}
.j-advantageBox p{
    padding:20px 0;
    font-size: 18px;
    border-top:1px solid #9d9d9d;
    margin-bottom: 75px;
}
</style>
