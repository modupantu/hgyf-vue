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
                <li v-for="(na,index) in navs"><router-link :to="na.urlname">{{na.name}}</router-link></li>
            </ul>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: "TitleNav",
  props: ["titleList","navs"],
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
  margin: 0 auto;
}
.title_nav h1 {
  line-height: 34px;
  font-size: 24px;
  color: #D61F6D;
  margin-bottom: 5px;
}
.b-title{
    width: 100%;
    margin: 70px auto 40px auto;
    border-left: 1px solid #c8c8c8;
}
.b-title ul{
    width: 970px;
    -webkit-display:flex;
    display: flex;
    justify-content: center;
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
    border:1px solid #c8c8c8;
}

.b-title ul li:hover{
    border:1px solid #D61F6D;
}
.b-title ul li a{
    display: block;
    width: 240px;
    height: 60px;
}

</style>