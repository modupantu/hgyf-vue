<template id="CompanyContact">
    <div class="CC-box">
        <!-- 联系我们 -->
        <ul class="CC-lianxi">
            <li>
                <img :src="imgs[0].img" alt="">
                <a href="tel:4006281577">4006281577</a>
            </li>
            <li>
                <img :src="imgs[1].img" alt="">
                <a href="#">北京市丰台区国投财富广场2号楼1013</a>
            </li>
        </ul>
        <div class="CC-map">
            <iframe width='1220px' height='500px' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://yuntu.amap.com/share/Bri6vy'></iframe>
        </div>
    </div>
</template>
<script>
import tel from "@/assets/phone.png";
import addr from "@/assets/addr.png";
export default {
  name: "CompanyContact",
  data() {
    return {
      imgs: [{ img: tel }, { img: addr }]
    };
  }
};
</script>
<style scoped>
.CC-box {
  width: 1240px;
  margin: 0 auto;
  overflow: hidden;
}
.CC-lianxi {
  width: 1020px;
  margin: 80px auto;
  height: 200px;
}
.CC-lianxi li {
  float: left;
  width: 442px;
  height: 146px;
  margin: 0 30px;
  text-align: center;
}
.CC-lianxi li img {
  display: block;
  margin: 0 auto;
}
.CC-lianxi li a {
  color: #6d6d6d;
  font-size: 24px;
  line-height: 48px;
}
.CC-map{
    width: 1220px;
    height: 500px;
    padding: 3px;
    border: 1px solid #ededed;
    margin: 0 auto 20px;
    box-shadow: 0 0 10px 0 #D8D8D7;
}

</style>