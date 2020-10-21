<template>
  <div class="login">
    <img src="../assets/login_background.gif" style="position: absolute; index: -1; width: 100%; height: 100%;" alt="">
    <el-form ref="loginForm" :model="loginForm" class="login-form">
      <h1 class="titleLog">三梯平台</h1>
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" type="text" auto-complete="off" placeholder="账号">
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type="password" auto-complete="off" placeholder="密码" @keyup.enter.native="handleLogin">
        </el-input>
      </el-form-item>
      <el-form-item style="width;100%; display:flex; justify-content: space-between;">
        <el-button class = "loginBtn"
          :loading="loading"
          size="medium"
          type="primary"
          style="width:120px; margin-right:15px"
          @click.native.prevent="handleLogin"
        >
          <span>登 录</span>
        </el-button>
        <el-button class = "loginBtn"
          size="medium"
          type="primary"
          style="width:120px; margin-left:15px"
        >
          <span>注 册</span>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loading: false
    }
  },
  methods: {
    handleLogin() {
      this.loading = true
      setTimeout(() =>{
  　　   this.loading = false
        this.$router.push({
          path: '/index'
        })
  　　},500)
    }
  }
}
</script>
<style scoped>
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    background-size: cover;
    position: relative;
  }
  .titleLog {
    color: #8bc1aa;
    padding-bottom: 20px;
    font-size: 42px;
    font-weight: 700;
    text-align: center;
    font-family: Times, 'New Century Schoolbook', Georgia, 'New York', serif;
    text-shadow: 1px 1px rgba(197, 223, 248,0.8),2px 2px rgba(197, 223, 248,0.8),3px 3px rgba(197, 223, 248,0.8),4px 4px rgba(197, 223, 248,0.8),5px 5px rgba(197, 223, 248,0.8),6px 6px rgba(197, 223, 248,0.8);
  }
  .login-form {
    border-radius: 6px;
    color: #000;
    background-color: rgba(0, 0, 0,0.4);
    width: 400px;
    padding: 20px 25px 20px 25px;
    position: relative;
  }
  .loginBtn {
    font-size: 18px;
    letter-spacing: 4px;
    background-color: #8bc1aa;
    border-color: #8bc1aa;
  }
  .loginBtn:hover, .loginBtn:active {
    background: #8bc1aa;
    border-color: #8bc1aa;
    color: #FFF;
}
  .el-input {
    height: 38px;
  }
  .el-input input {
    height: 38px;
  }
  .el-form-item__content {
    width: 100%;
  }
</style>