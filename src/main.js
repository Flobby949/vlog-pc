import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from '@/plugins/vuetify'
import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css'
import Distpicker from 'v-distpicker'
import VueQuillEditor from 'vue-quill-editor'

//富文本编译器
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme
Vue.use(VueQuillEditor /* { default global options } */)

Vue.component('v-distpicker', Distpicker)

axios.defaults.baseURL = 'http://localhost:8080/api'
Vue.prototype.$layer = layer(Vue)
Vue.prototype.$layer = layer(Vue, {
  msgtime: 3 //目前只有一项，即msg方法的默认消失时间，单位：秒
})

import VuetifyDaterangePicker from 'vuetify-daterange-picker'
import 'vuetify-daterange-picker/dist/vuetify-daterange-picker.css'

Vue.use(VueAxios, axios, VuetifyDaterangePicker)

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
