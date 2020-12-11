import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.blue.lighten2,
        secondary: colors.blue.lighten3,
        accent: colors.blue.lighten4,
        anchor: colors.blue.lighten2
      },
      dark: {
        primary: colors.cyan.darken3,
        secondary: colors.cyan.darken1,
        normal: colors.cyan.lighten3
      }
    }
  }
})
