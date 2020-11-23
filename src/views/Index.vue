<template>
  <div class="index">
    <img src="../assets/main_background.gif" class="bgclass" alt="">
    <div class="mainBox">
      <div @click="handleClick('/visual')" class="logo model">
        <img src="../assets/keshihua.png" width="400" alt="">
      </div>
      <div @click="handleClick('/model')" class="logo visualize">
        <img src="../assets/model.png" width="400" alt="">
      </div>
      <div @click="handleClick('/marketing')" class="logo marketing">
        <img src="../assets/yingxiao.png" width="400" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {}
  },
  methods: {
    handleClick(val) {
      this.$router.push({
        path: val
      })
    }
  }
}
</script>

<style scoped>
  .index{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    position: relative;
  }
  .mainBox {
    width: 1200px;
    height: 700px;
    position: relative;
    /* overflow: hidden; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bgclass {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    left:0;
    top:0;
  }
  .btn1 {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  .btn2 {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .btn3 {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .el-button+.el-button {
    margin: 0;
  }
  .el-button {
    padding: 20px 30px;
    font-size: 24px;
  }
  .logo {
    text-align: center;
    line-height: 24px;
    cursor:pointer;
  }
  .logo .yxTitle {
    color: #fff;
  }
  .logo .kshTitle {
    color: #fff;
  }
  .logo .mxTitle {
    color: #fff;
  }
  .model {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  .marketing {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .visualize {
    position: absolute;
    right: 0;
    bottom: 0;
  }

</style>
