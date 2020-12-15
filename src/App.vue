<template>
  <v-app id="app">
    <v-main>
      <router-view />
    </v-main>
    <v-btn class="mx-2" fab dark color="red" fixed bottom right v-if="show" @click="backToTop">
      <v-icon dark> mdi-arrow-up </v-icon>
    </v-btn>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    show: false
  }),
  mounted() {
    // 等到页面产生滚动才执行监听
    this.$nextTick(function() {
      window.addEventListener('scroll', this.scrollToTop)
    })
  },
  methods: {
    backToTop() {
      //定时器,平滑渡过回到顶部
      let timer = setInterval(() => {
        let ispeed = Math.floor(-this.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop + ispeed
        if (this.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 100)
    },
    //计算距离顶部的高度，高度大于四百是显示图标，小于400是隐藏
    scrollToTop() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.scrollTop = scrollTop
      this.show = scrollTop > 400
    }
  }
}
</script>
<style lang="scss">
.move {
  animation-duration: 1s;
  animation-delay: 0.5s;
}
a:link {
  text-decoration: none;
}
.bgColor {
  background-image: linear-gradient(to right, #bf30ac 0%, #0f9d58 100%);
}
</style>
