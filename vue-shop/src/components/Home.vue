<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>Header<el-button type="info" @click="logout">退出</el-button></el-header>
    <!-- 头部主体 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">Aside</el-aside>
      <!-- 右侧内容主体 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    logout(){
      window.sessionStorage.clear();
      this.$router.push("/login");
    }
  }
}
</script>
<style lang="less" scoped>
.home-container{
  height: 100%;
}
.el-header {
  background-color: #373d41;
}
.el-aside{
  background-color: #333744;
}
.el-main{
  background-color: #EAEDF1;
}
</style>