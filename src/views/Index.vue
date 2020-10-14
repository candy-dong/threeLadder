<template>
  <div class="index">
    <div class="mainBox">
      <div class="logo marketing">营销探索</div>
      <div class="logo visualize">可视化分析</div>
      <div class="logo model">模型建设</div>
      <!-- <el-button
        class="btn1"
        type="success" plain
        size=""
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

  }
  .mainBox {
    width: 760px;
    height: 460px;
    /* background-color: aquamarine; */
    position: relative;
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
