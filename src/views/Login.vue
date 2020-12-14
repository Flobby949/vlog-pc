<template>
  <div class="bg row">
    <v-form ref="form" v-model="valid" lazy-validation class="col" style="height:400px">
      <v-text-field v-model="phone" :counter="11" :rules="phoneRules" label="Phone" value="18962521753" required></v-text-field>
      <v-text-field v-model="password" :rules="passRules" label="Password" value="123123" required></v-text-field>
      <v-row>
        <v-col cols="12" md="8">
          <v-text-field v-model="verifyCode" label="verifyCode" required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <img class="verify" @click.prevent="getVerifyCode" ref="codeImg" />
        </v-col>
      </v-row>

      <v-checkbox v-model="checkbox" :rules="[(v) => !!v || '同意才能继续!']" label="同意社区协议？" required></v-checkbox>

      <v-btn :disabled="!valid" color="success" class="mr-4">验证</v-btn>
      <v-btn color="primary" class="mr-4" @click="submit">登录</v-btn>
      <v-btn color="warning" @click="reset">重置</v-btn>
    </v-form>

    <!-- <v-dialog v-model="flag" max-width="500" v-else>
          <v-card>
            <v-card-title class="headline grey lighten-2">
              登录成功
            </v-card-title>
            <v-img heright="250" src="https://flobby.oss-cn-shenzhen.aliyuncs.com/avatar/163848923.jpg"></v-img>
            <v-card-text>现在进入我的博客</v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="flag = false">
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
    </v-dialog> -->
    <v-overlay absolute z-index="5" class="mask"></v-overlay>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    // flag: false,
    valid: true,
    phone: '',
    phoneRules: [(v) => !!v || '手机号不能为空', (v) => (v && v.length === 11) || '手机号必须11位'],
    password: '',
    passRules: [(v) => !!v || '密码不能为空', (v) => (v.length >= 6 && v.length <= 10) || '密码必须在6到10位之间'],
    checkbox: false,
    verifyCode: ''
  }),

  created() {
    //页面创建,请求获得验证码图片
    this.getVerifyCode()
  },
  watch: {
    phone: function(val, oldval) {
      if (val.length === 11) {
        console.log('length' + val.length)
        console.log('oldval' + oldval)
        this.getVerifyCode()
      }
    }
  },
  methods: {
    LoginAlertSuccess() {
      this.$layer.alert(
        '登录成功',
        {
          title: '去看看'
        },
        (layerid) => {
          this.$layer.close(layerid)
        }
      )
    },
    LoginAlertFail() {
      this.$layer.alert(
        '登录失败',
        {
          title: '确定'
        },
        (layerid) => {
          this.$layer.close(layerid)
        }
      )
    },
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    getVerifyCode() {
      //点击验证码图片重新获取验证码
      this.axios.get('/captcha?phone=' + this.phone, { responseType: 'blob' }).then((res) => {
        let img = this.$refs.codeImg
        let url = window.URL.createObjectURL(res.data)
        img.src = url
      })
    },
    submit() {
      this.axios({
        method: 'POST',
        url: '/user/captchaLogin',
        data: {
          phone: this.phone,
          password: this.password,
          captcha: this.verifyCode
        }
      }).then((res) => {
        if (res.data.code === 1) {
          // this.flag = !this.flag
          this.LoginAlertSuccess()
          this.$store.commit('login', res.data.data)
          this.$router.push('/index')
        } else {
          this.LoginAlertFail()
        }
      })
    }
  }
}
</script>

<style lang="scss">
.row {
  display: flex;
  align-items: center;
  justify-content: center;
  .col {
    flex: 0 0 40%;
    background-color: #eeeeee;
    border-radius: 10px;
    z-index: 10;
  }
}
.bg {
  width: 100%;
  height: 100vh;
  background: url('https://flobby.oss-cn-shenzhen.aliyuncs.com/background-image/001.png');
}
.mask {
  background-image: linear-gradient(to right, #bf30ac 0%, #0f9d58 100%);
  opacity: 0.45;
  z-index: 5;
}
</style>
