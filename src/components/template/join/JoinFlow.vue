<template>
    <div class="j-flow">
        <img :src="joinImg[0].url" alt="">
    </div>
</template>
<script>
import joinLiuCheng from "@/assets/home_flow1.png";
export default {
  "/joinFlow": "JoinFlow",
  data(){
      return{
          joinImg:[{url:joinLiuCheng}]
      }
  }
};
</script>
<style scoped>
.j-flow{
    width: 1240px;
    margin: 50px auto;
    background: #FFF;
    overflow: hidden;
}
.j-flow img{
    width: 1240px;
}

</style>
