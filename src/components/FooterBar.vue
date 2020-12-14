<template>
    <v-app>
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
    </v-app>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer-bg {
  height: 140px;
  background-color: #ee6e73;
  background-image: linear-gradient(to right, #bf30ac 0%, #0f9d58 100%);
  opacity: 0.7;
  text-align: center;
  color: #fff;
}
</style>