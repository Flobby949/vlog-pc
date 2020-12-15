<template>
  <div class="footer-bg">
    <v-row justify="center" align="center">
      <v-col cols="12" md="12">
        © 2017-2020 Flobby. 版权所有 站点总字数：1k
      </v-col>
      <v-col cols="12" md="12">
        本站点以运行 10 天 22 小时 21 分钟
      </v-col>
      <v-col cols="12" md="12">
        本站总访问量 100 人次，访客数 10 人
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'FooterBar'
}
</script>

<style scoped>
.footer-bg {
  height: 140px;
  background-color: #ee6e73;
  /* background-image: linear-gradient(to right, #a3511b 0%, #f83535 100%); */
  opacity: 0.5;
  text-align: center;
  color: #fff;
}
</style>
