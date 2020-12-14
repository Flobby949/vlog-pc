<template>
  <v-app>
    <v-card>
      <v-app-bar
        absolute
        color="#fcb69f"
        dark
        clipped-left
        src="https://flobby.oss-cn-shenzhen.aliyuncs.com/background-image/Snipaste_2020-05-15_12-59-02.png"
        height="500"
      >
        <template v-slot:img="{ props }">
          <v-img v-bind="props" gradient="to top right, rgba(40,44,52,.6), rgba(211,190,223,.4)"></v-img>
        </template>

        <!-- <v-app-bar-nav-icon @click="$router.push('/')"></v-app-bar-nav-icon> -->

        <v-toolbar-title class="display-1">{{ user.nickname }}的个人博客</v-toolbar-title>

        <div class="header">
          <nav-bar class="nav"></nav-bar>
        </div>

        <v-spacer></v-spacer>

      </v-app-bar>
    </v-card>

    <v-main>
      <v-container class="main-content">
        <router-view />
      </v-container>
    </v-main>

    <FooterBar class="footer"></FooterBar>

    <!-- <div>
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
    </div> -->
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import NavBar from '../components/NavBar'
import FooterBar from '../components/FooterBar'
export default {
  name: 'Layout',
  components: {
    NavBar,
    FooterBar
  },
  computed: {
    ...mapState({
      loginStatus: (state) => state.loginStatus,
      user: (state) => state.user,
    }),
  },
}
</script>

<style lang="scss" scoped>
.header {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: start;
  .nav {
    position: fixed;
    top: 10;
    z-index: 1000;
  }
}
.main-content {
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0.07) !important;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  position: relative;
  top: 400px;
  width: 80%;
  margin: 0 auto;
  z-index: 999;
}
.footer {
  height: 140px;
  background-color: #ee6e73;
  background-image: linear-gradient(to right, #bf30ac 0%, #0f9d58 100%);
  opacity: 0.7;
  text-align: center;
  color: #fff;
}
</style>
