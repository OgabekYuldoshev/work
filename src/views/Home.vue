<template>
  <div class="home">
  <el-container>
      <el-container>
        <el-main>
          <Header/>
          <ShowCase @handleProduct="filter"/>
        </el-main>
      </el-container>
      <el-aside width="500px">
        <ControlPanel :products="data"/>
      </el-aside>
  </el-container>
  </div>
</template>

<script>
import ControlPanel from "../components/ControlPanel"
import Header from "../components/Header"
import ShowCase from "../components/ShowCase"
import API from "../Api/data"
export default {
  name: 'Home',
  components:{
    ControlPanel,
    Header,
    ShowCase
  },
  data(){
    return{
      data:[]
    }
  },
  methods:{
    filter(id){
      const data = API.filter(p=>{
        return p.id === id
      })
      this.data.push(data)
    }
  }
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