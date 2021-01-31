<template>
  <div class="home">
  <el-container>
      <el-container>
        <el-main>
          <Header/>
          <ShowCase />
        </el-main>
      </el-container>
      <el-aside width="500px">
        <ControlPanel/>
      </el-aside>
  </el-container>
  </div>
</template>

<script>
import ControlPanel from "../components/ControlPanel"
import Header from "../components/Header"
import ShowCase from "../components/ShowCase"
export default {
  name: 'Home',
  components:{
    ControlPanel,
    Header,
    ShowCase
  },
}
</script>

<style scoped>
.el-main{
  padding: 0;
}
.el-aside{
  height: 100vh;
}
</style>