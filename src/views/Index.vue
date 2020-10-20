<template>
  <div class="index">
    <div class="mainBox">
      <div @click="handleClick('/marketing')" class="logo marketing">
        <img src="../assets/yingxiao.png" width="100" alt="" style="margin-bottom: 30px;">
        <span class = "yxTitle">营销探索</span>
      </div>
      <div @click="handleClick('/visual')" class="logo visualize">
        <img src="../assets/model.png" width="120" alt="" style="margin-bottom: 30px;">
        <span class = "kshTitle">可视化分析</span>
      </div>
      <div @click="handleClick('/model')" class="logo model">
        <img src="../assets/keshihua.png" width="120" alt="" style="margin-bottom: 30px;">
        <span class = "mxTitle">模型建设</span>
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
    background-image: url('../assets/background2.jpg');
    background-size: cover;
  }
  .mainBox {
    width: 700px;
    height: 600px;
    position: relative;
    /* overflow: hidden; */
    display: flex;
    justify-content: center;
    align-items: center;
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
    width: 98px;
    padding: 5px 10px;
    /* height: 32px; */
    text-align: center;
    line-height: 24px;
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
  .marketing {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  .visualize {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .model {
    position: absolute;
    right: 0;
    bottom: 0;
  }

</style>
