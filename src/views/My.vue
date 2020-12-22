<template>
  <v-row align="start">
    <v-col cols="12" md="3">
      <side-bar></side-bar>
    </v-col>
    <v-col cols="12" md="8" class="ml-12">
      <router-view />
    </v-col>
  </v-row>
</template>

<script>
import SideBar from '../components/SideBar'
import { mapState } from 'vuex'
export default {
  name: 'My',
  components: {
    SideBar
  },
  data() {
    return {
      id: 0
    }
  },
  computed: {
    ...mapState({
      visitId: (state) => state.visitId,
      loginStatus: (state) => state.loginStatus,
      loginUser: (state) => state.loginUser,
      user: (state) => state.user
    })
  },
  created() {
    if (this.visitId === '') {
      this.id = this.loginUser.id
      this.$store.commit('visitId','')
      this.$store.commit('visit','')
    } else {
      this.id = this.visitId
      this.$store.commit('visitId','')
      this.$store.commit('visit','')
    }
    // this.id = this.$route.params.id
    alert('你访问的用户id为' + this.id)
    this.axios({
      method: 'GET',
      url: '/user/' + this.id
    }).then((res) => {
      console.log(res.data.data.id)
      console.log(res.data.data.avatar)
      console.log(res.data.data.signature)

      this.$store.commit('visit', res.data.data)
    })
  },
  methods: {}
}
</script>

<style lang="scss"></style>
