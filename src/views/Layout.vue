<template>
  <div class="layout">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/marketing">营销探索</el-menu-item>
          <el-menu-item index="/visual">可视化分析</el-menu-item>
          <el-menu-item index="/model">模型建设</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      activeIndex: '/marketing'
    }
  },
  watch: {
    '$route': {
      handler(val) {
        this.activeIndex = val.path
      },
      immediate: true
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.layout .el-header {
  padding: 0;
}
</style>