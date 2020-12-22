<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation v-if="user.id === loginUser.id">
      <v-text-field v-model="nickname" :counter="10" :rules="nameRules" label="昵称" :placeholder="loginUser.nickname"></v-text-field>
      <v-select
        v-model="genderSelect"
        :items="items"
        :rules="[(v) => !!v || 'Gender is required']"
        :placeholder="items[0]"
        label="性别"
        required
      ></v-select>
      <v-row justify="start">
        <v-date-picker v-model="birthdayPicker" elevation="5"></v-date-picker>
      </v-row>

      <v-row justify="start" class="my-6">
        <v-distpicker
          :province="addressSelect.province"
          :city="addressSelect.city"
          :area="addressSelect.area"
          @province="selectProvince"
          @city="selectCity"
          @area="selectArea"
        ></v-distpicker>
      </v-row>

      <v-btn color="primary" class="mr-12" @click="submit">提交</v-btn>
      <v-btn color="success" @click="reset">重置</v-btn>
    </v-form>

    <div v-else>
      <message-board></message-board>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import VDistpicker from 'v-distpicker'
import MessageBoard from '../components/MessageBoard'
// import { VDaterange } from "vuetify-daterange-picker"
// import "vuetify-daterange-picker/dist/vuetify-daterange-picker.css"
export default {
  name: 'loginUserInfo',
  data: () => ({
    valid: true,
    nickname: '',
    nameRules: [(v) => !!v || 'Name is required', (v) => (v && v.length <= 10) || 'Name must be less than 10 characters'],
    genderSelect: null,
    items: ['保密', '男', '女'],
    checkbox: false,
    birthdayPicker: new Date().toISOString().substr(0, 10),
    addressSelect: { province: '江苏省', city: '苏州市', area: '姑苏区' }
  }),
  computed: {
    ...mapState({
      loginStatus: (state) => state.loginStatus,
      loginUser: (state) => state.loginUser,
      user: (state) => state.user
    })
  },
  created() {},
  components: {
    // VDaterange,
    VDistpicker,
    MessageBoard
  },
  methods: {
    reset() {
      this.$refs.form.reset()
    },
    selectProvince(v) {
      console.log(v)
      this.addressSelect.province = v.value
    },
    selectCity(v) {
      console.log(v)
      this.addressSelect.city = v.value
    },
    selectArea(v) {
      console.log(v)
      this.addressSelect.area = v.value
    },
    getGenderTxt() {
      switch (this.genderSelect) {
        case 0:
          return '保密'
        case 1:
          return '男'
        case 2:
          return '女'
      }
    },
    submit() {
      if (this.nickname === '') {
        this.nickname = this.loginUser.nickname
      }
      if (this.items.indexOf(this.genderSelect) == -1) {
        this.genderSelect = '保密'
      }
      let newloginUser = this.loginUser
      newloginUser.nickname = this.nickname
      newloginUser.gender = this.items.indexOf(this.genderSelect) //注意字符串 --> 整型
      newloginUser.birthday = this.birthdayPicker
      newloginUser.address = `${this.addressSelect.province}-${this.addressSelect.city}-${this.addressSelect.area}`
      this.$store.commit('editloginUserInfo', newloginUser)
      this.axios({
        method: 'POST',
        url: '/loginUser/update',
        data: newloginUser
      }).then((res) => {
        console.log(res)
        console.log(JSON.stringify(res.data.data))
        this.$store.commit('login', res.data.data)
      })
    }
  }
}
</script>

<style lang="scss"></style>
