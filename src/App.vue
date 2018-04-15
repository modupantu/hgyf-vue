<template>
  <div id="app">
    <div class="header">
      <div class="container">
        <div class="logo"><img src="./assets/logo.png" alt="logo"></div>
        <ul class="nav">
          <!--使用指令v-link进行导航-->
          <li class="list"><router-link to="/">首页</router-link></li>
          <li class="list"><router-link to="/brand">品牌介绍</router-link></li>
          <li class="list"><router-link to="/about">产品展示</router-link></li>
          <li class="list"><router-link to="/join">加盟流程</router-link></li>
          <li class="list"><router-link to="/news">新闻中心</router-link></li>
        </ul>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
    <div class="footer">
      <div class="container">
      <div class="footer_cont">
        <h2>联系我们<small>/CONTACT US</small></h2>
        <p class="tel">咨询热线：400-628-1577</p>
        <p class="site">企业地址：北京市丰台区国投财富广场2号楼1013</p>
        <p class="link">友情链接：</p>
        <div>

        </div> 
        <p class="Copyright">Copyright ©京ICP备17061601号-1 北京禾谷鱼粉商贸有限公司 版权所有 <a href="">公司位置</a></p>
       
      </div>
      <div class="footer_msg">
        <h2>加盟留言<small>/JOIN MESSAGE</small></h2>
        <form action="" method="post">
          <ul>
            <li><i>*</i><input name="name"  id="name" type="text" placeholder="您的姓名"></li>
            <li><i>*</i><input type="tel" name="tel" id="tel"min="7" max="11" placeholder="您的电话"></li>
            <input type="text" class="site" name="site" placeholder="联系地址">
            <input type="email" class="site" name="email" placeholder="您的邮箱">
            <li><i>*</i><textarea name="msg" id="foot_msg" cols="50" rows="3" placeholder="留言内容"></textarea></li>
          </ul>
          <input type="submit" class="foot_btn" value="在线提交">
          <input type="reset" class="foot_btn" value="重置">
        </form>
      </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "App"
};
</script>

<style>
html,
body,
div,
ul,
li,
h1,
h2,
h3,
h4,
h5,
h6,
p,
dl,
dt,
dd,
ol,
form,
input,
textarea,
th,
td,
select {
  margin: 0;
  padding: 0;
  font-family: "Microsoft YaHei";
  font-size: 14px;
  color: #333;
  list-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}
ul,
ol {
  list-style: none;
}
input,
textarea {
  outline: none;
  border: none;
}
img {
  border: none;
  vertical-align: middle;
}

a {
  text-decoration: none;
  color: #232323;
}
.clear:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.clear {
  display: inline-block;
} /* for IE/Mac */
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.header {
  width: 100%;
  height: 90px;
  background: #fff;
}
.container {
  width: 1280px;
  margin: 0 auto;
}
.logo {
  width: 211px;
  height: 65px;
  float: left;
  margin: 15px 0 0;
}
.nav {
  width: 700px;
  margin-left: 10px;
  float: left;
}
.nav li {
  float: left;
  text-align: center;
  width: 16.66666667%;
  height: 90px;
  position: relative;
}
.nav li:after {
  content: "";
  position: absolute;
  right: 0;
  top: 39px;
  width: 1px;
  height: 14px;
  border-right: 1px dotted #ccc;
}
.nav li > a {
  font-size: 16px;
  color: #333;
  height: 24px;
  line-height: 22px;
  display: inline-block;
  padding: 0 18px;
  margin: 35px 0 0;
}
.nav li > a:hover {
  background: #b93936;
}
.footer {
  width: 100%;
  padding: 30px 0 25px 0;
  background: #313131;
  height: 486px;
  margin: 0 auto 0;
}
.footer_cont {
  float: left;
  width: 545px;
  height: 480px;
}
.footer_cont > h2 {
  color: #b93936;
  font-size: 30px;
  margin-bottom: 30px;
}
.footer_cont > h2 > small {
  color: white;
  font-size: 20px;
}
.footer_cont > p {
  color: #8e8e8e;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 3px;
}
.footer_cont > p > a {
  color: #8e8e8e;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 3px;
}
.footer_cont > p > a:hover {
  color: #b93936;
}
.footer_msg {
  float: right;
  width: 580px;
  height: 350px;
  overflow: hidden;
}
.footer_msg > h2 {
  color: #b93936;
  font-size: 30px;
  margin-bottom: 30px;
}
.footer_msg > h2 > small {
  color: white;
  font-size: 20px;
}
.footer_msg ul{
  width: 100%;
  height: 230px;
  overflow: hidden;
}
.footer_msg li {
  width: 180px;
  margin: 0 0 15px 35px;
  float: left;
  color: #b93936;
  position: relative;
}
.footer_msg .site{
  margin: 0 0 15px 35px;
  width:365px;
}
.footer_msg .foot_btn{
  width:150px;
  margin: 0 0 15px 35px;
  background: #b93936;
  color: white;
  border:none;
}

.footer_msg .foot_btn:last-child{
  color: white;
  background:  #8e8e8e;
}
.footer_msg .foot_btn:hover{
  background: #b93936;
}
.footer_msg li i {
  font-style: normal;
  position: absolute;
  left: 0;
  top: 10px;
  color: #ff0000;
  display: inline-block;
  width: 12px;
  text-align: center;
}

.footer_msg input {
  line-height: 35px;
  height: 35px;
  padding: 0 10px 0 17px;
  border: none;
  font-size: 14px;
  background: none;
  border-bottom: #444 solid 1px;
  width: 80%;
  color: #dfdfdf;
}
.footer_msg textarea{
  line-height: 35px;
  height: 35px;
  padding: 0 10px 0 17px;
  border: none;
  font-size: 14px;
  background: none;
  border-bottom: #444 solid 1px;
  color: #dfdfdf;
}
</style>
