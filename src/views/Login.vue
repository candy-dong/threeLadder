<template>
  <div class="login">
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
      <el-form-item style="width;100%; display:flex; justify-content: center;">
        <el-button
          :loading="loading"
          size="medium"
          type="primary"
          style="width:84px; margin-right:15px"
          @click.native.prevent="handleLogin"
        >
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
        <el-button
          size="medium"
          type="primary"
          style="width:84px; margin-left:15px"
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
    background-color: aquamarine;
  }
  .titleLog {
    color: #ffffff;
    font-size: 30px;
    font-weight: 700;
    text-shadow: 0 1px 4px rgba(0,0,0,.2);
    position: absolute;
    top: -45%;
    left: 0;
    width: 100%;
    text-align: center;
  }
  .login-form {
    border-radius: 6px;
    background-color: #ffffff;
    width: 400px;
    padding: 60px 25px 20px 25px;
    position: relative;
  }
  .el-input {
    height: 38px;
  }
  .el-input input {
    height: 38px;
  }
</style>