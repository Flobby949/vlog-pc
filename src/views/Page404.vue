<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-main>
      <div class="main">
        <c-container>
          <div class="white--text text-center" style="font-size:130px">404</div>
          <div class="grey--text text-center" style="font-size:30px">哎呀╭(╯^╰)╮ 出错了(╥╯^╰╥)</div>
        </c-container>
      </div>
    </v-main>
    <footer-bar class="footer-transparent black--text"></footer-bar>
  </v-app>
</template>

<script>
import NavBar from '../components/NavBar'
import FooterBar from '../components/FooterBar'
export default {
  name: 'Page404',
  data() {
    return {}
  },
  components: {
    NavBar,
    FooterBar
  },
  created() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.main {
  padding-top: 200px;
  height: 100%;
  width: 100%;
  z-index: 1000;
  background: url(https://flobby.oss-cn-shenzhen.aliyuncs.com/background-image/%E5%8D%8A.png);
}
.footer-transparent {
  background-color: grey;
}
</style>
