<template>
  <div id="number">
    <div class="display">{{num || '0'}}</div>
    <div class="buttons">
      <el-button @click="append('1')">1</el-button>
      <el-button @click="append('2')">2</el-button>
      <el-button @click="append('3')">3</el-button>
      <el-button @click="append('4')">4</el-button>
      <el-button @click="append('5')">5</el-button>
      <el-button @click="append('6')">6</el-button>
      <el-button @click="append('7')">7</el-button>
      <el-button @click="append('8')">8</el-button>
      <el-button @click="append('9')">9</el-button>
      <el-button @click="append('.')">.</el-button>
      <el-button @click="append('0')">0</el-button>
      <el-button @click="clear()">del</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NumberInput",
  
}
</script>



<style scoped>
#number{
  width: 20rem;
}
.buttons{
  display: flex;
  flex-wrap: wrap;
}
.display{
  height: 50px;
  background: white;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 20px;
}
.el-button{
  width: 33.3%;
  padding: 0;
  margin: 0;
  height: 50px;
  background: rgb(243, 243, 243);
}
.el-button+.el-button{
  margin-left: 0;
}
</style>