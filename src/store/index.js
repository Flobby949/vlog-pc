import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginStatus: false,
    avatar: '',
    visitId: '',
    loginUser: {
      id: 1,
      phone: '18962521753',
      password: '4297f44b13955235245b2497399d7a93',
      nickname: 'Flobby',
      avatar: 'https://flobby.oss-cn-shenzhen.aliyuncs.com/avatar/447f6179-96be-4f15-88dd-496837a13143.jpg',
      gender: 0,
      birthday: 2020 - 12 - 13,
      address: '江苏省-苏州市-姑苏区',
      banner: 'https://flobby.oss-cn-shenzhen.aliyuncs.com/background-image/bg1.png',
      signature: '万事胜意 | 平安喜乐',
      createTime: '2020-12-05 19:07:12'
    },
    user: {}
  },
  getters: {},
  mutations: {
    // 登录成功后，用户数据存入本地存储
    login(state, user) {
      state.loginStatus = true
      state.user = user
      state.avatar = user.avatar
      localStorage.setItem('loginUser', JSON.stringify(user))
    },
    //访问用户页面
    visit(state, user) {
      state.user = user
    },
    //访问用户id
    visitId(state, visitId) {
      state.visitId = visitId
    },
    // 退出登录
    logout(state) {
      state.loginStatus = false
      state.user = {}
      state.avatar = ''
      localStorage.removeItem('user')
    },
    setAvatar(state, data) {
      state.avatar = data
    },
    // 修改资料
    editUserInfo(state, obj) {
      if (state.user) {
        state.user.nickname = obj.nickname
        state.user.password = obj.password
        state.user.avatar = obj.avatar
        state.user.gender = obj.gender
        state.user.birthday = obj.birthday
        state.user.address = obj.address
        localStorage.setItem('user', JSON.stringify(state.user))
      }
    }
  },
  actions: {}
})
