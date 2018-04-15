<template>
<div>
    <div>
        <div>
            <img :src="titleList[0].url" alt="">
        </div>
        <div class="title_nav">
            <h1>{{titleList[0].name}}</h1>
        </div>
        <div class="b-title">
            <ul>
                <li class="bodrderRed"><router-link to="/company">公司介绍</router-link></li>
                <li><router-link to="/brandstpry">品牌故事</router-link></li>
                <li><router-link to="/brandmerit">品牌优势</router-link></li>
                <li><router-link to="/companycontact">联系我们</router-link></li>
            </ul>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: "TitleNav",
  props: ["titleList"],
  methods:{

  }
};
</script>

<style scoped>
.title_nav {
  width: 100%;
  padding: 30px 0 35px;
  border-bottom: 1px solid #c8c8c8;
  text-align: center;
}
.title_nav h1 {
  line-height: 34px;
  font-size: 24px;
  color: #b93936;
  margin-bottom: 5px;
}
.b-title{
    width: 100%;
    margin: 70px auto 40px auto;
    border-left: 1px solid #c8c8c8;
}
.b-title ul{
    width: 970px;
    text-align: center;
    overflow: hidden;
    margin: 0 auto; 
}
.b-title ul li{
    float: left;
    width: 240px;
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    border-top:1px solid #c8c8c8;
    border-bottom:1px solid #c8c8c8;
    border-left:1px solid #c8c8c8;
}
.b-title ul li:nth-child(4){
    border-right:1px solid #c8c8c8;
}
.b-title ul li:hover{
    border:1px solid #b93936;
}
.b-title ul li a{
    display: block;
    width: 240px;
    height: 60px;
}

</style>