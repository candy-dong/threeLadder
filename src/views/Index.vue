<template>
  <div class="index">
    <div class="mainBox">
      <!-- <div class="logo marketing" >营销探索</div>
      <div class="logo visualize" >可视化分析</div>
      <div class="logo model" >模型建设</div> -->
      <img src="../assets/louti.png" width="700" alt="">
      <div @click="handleClick('/marketing')" style="cursor: pointer; position: absolute; left: 50px; bottom: 60px; font-size: 30px; display: flex; flex-direction: column; justify-content: center; align-items: center; color: #fff; font-style: italic;">
        <img src="../assets/yingxiao.png" width="100" alt="" style="margin-bottom: 30px;">
        <span>营销探索</span>
      </div>
      <div @click="handleClick('/visual')" style="cursor: pointer; position: absolute; left: 250px; bottom: 110px; font-size: 30px; display: flex; flex-direction: column; justify-content: center; align-items: center; color: #fff; font-style: italic;">
        <img src="../assets/keshihua.png" width="120" alt="" style="margin-bottom: 30px;">
        <span>可视化分析</span>
      </div>
      <div @click="handleClick('/model')" style="cursor: pointer; position: absolute; left: 500px; bottom: 160px; font-size: 30px; display: flex; flex-direction: column; justify-content: center; align-items: center; color: #fff; font-style: italic;">
        <img src="../assets/model.png" width="120" alt="" style="margin-bottom: 30px;">
        <span>模型建设</span>
      </div>
      <!-- <el-button
        class="btn1"
        type="success" plain
        @click="handleClick"
        >活动跟踪
      </el-button>
      <el-button
        class="btn2"
        type="warning" plain
        >智能分析
      </el-button>
      <el-button 
        class="btn3"
        type="danger" plain
        >模型建设
      </el-button> -->
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
    cursor: pointer;
    width: 80px;
    padding: 5px 10px;
    /* height: 32px; */
    background-color: aqua;
    text-align: center;
    line-height: 24px;
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
