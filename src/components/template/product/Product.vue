<template>
    <div class="product">
        <div class="product-box">
            <ul>
                <li v-for="str in 10">
                    <div>
                      <img :src="str" alt="">
                    </div>
                    <p>{{str}}</p>
                </li>
               
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  "/product": "Product"
};
</script>
<style scoped>
.product {
  width: 1280px;
  min-height: 1000px;
  margin: 0 auto;
  background: red;
}
.product-box {
  width: 100%;
}
.product-box li {
  float: left;
  margin-left: 65px;
  margin-bottom: 70px;
  width: 350px;
  height: 300px;
  background: brown;
}
.product-box li div{
    width: 350px;
    height:250px;
}
.product-box li p {
    width: 350px;
    height:50px;
    background: wheat;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
}
</style>
