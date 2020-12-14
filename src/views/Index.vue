<template>
  <v-main>
    <v-carousel cycle height="900" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet height="100%">
          <v-row class="fill-height header">
            <img :src="slide.src" class="slider-img" />
            <!-- 引入封装的顶部导航栏 -->
            <div class="nav">
              <nav-bar></nav-bar>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-row style="width: 80%; margin: 0 auto; margin-top: -80px;">
      <v-col cols="12" md="6" v-for="(card, index) in cards" :key="index">
        <v-card v-if="index < 4"  class="cards">
          <v-img class="white--text" height="450px" :src="card.bgImg">
            <v-card-title>{{ card.title }}</v-card-title>
          </v-img>
          <v-card-text class="text--primary">
            <div>{{ card.content }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange" text>Share</v-btn>
            <v-btn color="orange" text>Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row style="width: 80%; margin: 0 auto;">
      <v-col cols="12" md="4" v-for="(card, index) in cards" :key="index">
        <v-card  class="cards">
          <v-img class="white--text align-end" height="300px" :src="card.bgImg">
            <v-card-title>{{ card.title }}</v-card-title>
          </v-img>
          <v-card-text class="text--primary">
            <div>{{ card.content }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange" text>Share</v-btn>
            <v-btn color="orange" text>Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import { mapState } from 'vuex'
import NavBar from '../components/NavBar'

export default {
  name: 'Index',
  data: () => ({
    cards: [],
    slides: [
      {
        src: 'https://flobby.oss-cn-shenzhen.aliyuncs.com/background-image/001.png'
      },
      {
        src: 'https://flobby.oss-cn-shenzhen.aliyuncs.com/background-image/Snipaste_2020-05-13_22-35-40.png'
      },
      {
        src: 'https://flobby.oss-cn-shenzhen.aliyuncs.com/background-image/Snipaste_2020-05-14_19-46-14.png'
      },
      {
        src: 'https://flobby.oss-cn-shenzhen.aliyuncs.com/background-image/Snipaste_2020-05-14_19-49-39.png'
      },
      {
        src: 'https://flobby.oss-cn-shenzhen.aliyuncs.com/background-image/Snipaste_2020-05-15_12-45-43.png'
      }
    ]
  }),
  components: {
    NavBar
  },
  computed: {
    ...mapState({
      loginStatue: (state) => state.loginStatue,
      user: (state) => state.user
    })
  },
  created() {
    this.axios.get('/cards').then((res) => {
      console.log(res.data.data)
      this.cards = res.data.data
    })
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: start;
  .nav {
    position: fixed;
    top: 10;
    z-index: 1000;
  }
}
.cards{
  z-index: 500;
}
</style>
