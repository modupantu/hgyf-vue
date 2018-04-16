<template id="BrandStpry">
    <div>
        <!-- 第一层 -->
        <div class="BS-content">
            <div class="BS-img">
                <img src="" alt="">
            </div>
            <div class="BS-depict">
                 <h2>禾谷渔粉的品牌由来</h2>
                 <p>品牌故事</p>
            </div>
        </div>
        <!-- 第二层 -->
        <div class="BS-content">
            <div class="BS-depict2">
                 <h2>禾谷渔粉的品牌由来</h2>
                 <p>品牌故事</p>
            </div>
            <div class="BS-img2">
                <img src="" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "BrandStpry"
};
</script>
<style scoped>
.BS-content{
    width: 1240px;
    margin: 0 auto;
    overflow: hidden;
}
.BS-img{
    float:left;
    width: 477px;
    height: 467px;
    background: red;
}
.BS-img img{
    width: 477px;
    height: 467px;
}
.BS-depict{
    width: 700px;
    float: right;
    padding-top: 65px;
    background: pink;
}
.BS-img2{
    float:right;
    width: 477px;
    height: 467px;
    background: red;
}
.BS-depict2{
    width: 700px;
    float: left;
    padding-top: 65px;
    background: pink;
}
</style>