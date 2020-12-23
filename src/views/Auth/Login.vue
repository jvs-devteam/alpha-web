<template>
  <div id="login-box">
    <index-header></index-header>
    <main>
      <h1 class="login-title">登录</h1>
      <div class="login-box">
        <div class="login-l"></div>
        <div @keydown.enter="login" class="login-r">
          <ul class="login-form">
            <li><input type="text" name="username" id="username" placeholder="请输入用户名" v-model="form.username"></li>
            <li><input type="password" name="password" id="password" placeholder="请输入密码" v-model="form.password"></li>
            <li><button @click="login">登陆</button></li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>qing

<script>
import {getBackend} from "@/network/VideoApi";
import IndexHeader from "@/components/Common/IndexHeader";

export default {
name: "Login",
  components: {IndexHeader},
  mounted() {
    let timer = setInterval(() => {
      if (this.$store.state.loginUser !== 0) {
        clearInterval(timer)
        if (this.$store.state.loginUser !== null) {
          console.log('You Have No Access To View This Page')
          this.$router.push('/');
        }
      }
    }, 50)
  },
  data: () => ({
    form: {
      username: '',
      password: ''
    }
  }),
  methods: {
    login() {
      let form = new FormData();
      form.append('username', this.form.username);
      form.append('password', this.form.password);
      getBackend({url: 'auth/login', method: 'post', data: form}).then(res => {
        console.log(res)
        if (res.data.code === 0) {
          getBackend({url: 'auth/getUserInfo'}).then(res => {
            if (res.data.code === 0) {
              this.$store.state.loginUser = res.data.data;
              console.log('logined')
              this.$router.push('/');
            }
          })
        }
      });
    }
  }
}
</script>

<style scoped>
main {
  width: 1200px;
  margin: 10px auto;
}

.login-title {
  text-align: center;
}

.login-box {
  display: flex;
}

.login-l {
  flex: 1;
}

.login-r {
  flex: 1;
}

.login-form {
  margin: 80px 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-form li {
  list-style: none;
  margin: 20px 0;
}

input {
  padding: 10px 15px;
  width: 240px;
  border: 1px solid #c2c2c2;
  border-radius: 5px;
  font-size: 12px;
  transition: border 0.5s;
}

input:focus {
  outline: none;
  border: solid #fb7299 1px;
}

button {
  padding: 10px 20px;
  background-color: #fb7299;
  color: #ffffff;
  border-radius: 5px;
  font-size: 12px;
}

button:hover {
  cursor: pointer;
}
</style>