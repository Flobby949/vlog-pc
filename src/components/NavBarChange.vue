<template>
  <div class="nav-wrapper" ref="navbar" :class="{ bgColor: active }">
    <v-row class="nav-transparent mx-2 pl-12" justify="space-between" align="center">
      <v-col cols="12" md="3">
        <!-- <router-link to="/index">
          <h1 class="grey--text">{{ loginUser.nickname }}的博客</h1>
        </router-link> -->
      </v-col>
      <v-col cols="12" md="8">
        <router-link v-for="(item, index) in items" :to="item.path" :key="index" link class="mr-2">
          <v-btn elevation="6" text large class="nav-item" color="#e0e0e0" style="border:none:outline:none;">
            <v-icon right dark class="mr-2">{{ item.icon }}</v-icon>
            {{ item.text }}
          </v-btn>
        </router-link>
      </v-col>

      <v-col cols="12" md="1">
        <v-menu right top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list color="accent">
            <v-list-item link>
              <v-list-item-title>系统设置</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/404')" link>
              <v-list-item-title>主题设置</v-list-item-title>
            </v-list-item>
            <v-list-item @click="logout" link>
              <v-list-item-title>退出登录</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'NavBar',
  data: () => ({
    active: false,
    items: [
      {
        icon: 'mdi-home',
        text: '主页',
        path: '/index'
      },
      {
        icon: 'mdi-format-list-bulleted-square',
        text: '分类',
        path: '/category'
      },
      {
        icon: 'mdi-message',
        text: '消息',
        path: '/message'
      },
      {
        icon: 'mdi-tag',
        text: '标签',
        path: '/tag'
      },
      {
        icon: 'mdi-link',
        text: '友链',
        path: '/friend'
      },

      {
        icon: 'mdi-pen',
        text: '写文章',
        path: '/write'
      }
    ],
    my: {
      icon: 'mdi-account',
      text: '我的',
      // path: '/my'
      path: '/my/'
    }
  }),
  computed: {
    ...mapState({
      loginStatus: (state) => state.loginStatus,
      loginUser: (state) => state.loginUser
    })
  },
  mounted() {
    //等到页面产生再执行监听
    this.$nextTick(function() {
      window.addEventListener('scroll', this.onScroll)
    })
  },
  created() {
    console.log('用户的id' + this.loginUser.id)
    console.log('my:')
    console.log(this.my)
    this.my.path = this.my.path + '1'
    this.items.push(this.my)
    //this.items[5].path == this.items[5].path + 1
    console.log('创建前')
  },
  methods: {
    onScroll() {
      //取得滚动起点，也就是文档流的顶部
      let scrolled = document.documentElement.scrollTop || document.body.scrollTop
      this.active = scrolled > 100
    },
    logout() {
      this.$store.commit('logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  position: fixed;
  top: 10;
  left: 0;
  right: 0;
  z-index: 1000;
}
.bgColor {
  background-image: linear-gradient(to right, #175cc4 0%, #48afeb 100%);
}
</style>
