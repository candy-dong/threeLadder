<template>
  <div class="index">
    <div class="mainBox">
      <el-button
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
      </el-button>
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
    handleClick() {
      this.$router.push({
        path: '/marketing'
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
</style>
