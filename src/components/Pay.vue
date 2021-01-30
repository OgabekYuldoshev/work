<template>
  <div id="pay">
    <el-container>
  <el-aside width="200px">
    <div class="info">
      <div class="info-prize">
        <p>All prize</p>
        <h5>1 000 000 sum</h5>
      </div>
      <div class="info-prize">
        <p>CashBack</p>
        <h5>1 000 000 sum</h5>
      </div>
      <div class="info-prize">
        <p>Element</p>
        <h5>1 000 000 sum</h5>
      </div>
      <div class="info-prize">
        <p>All prize</p>
        <h5>1 000 000 sum</h5>
      </div>
    </div>
  </el-aside>
  <el-container>
    <el-main>
      <NumberInput/>
    </el-main>
  </el-container>
</el-container>
<el-container class="container">
  <el-button type="primary">Nalichniy</el-button>
  <el-button type="primary">Karta</el-button>
  <el-button type="danger">Kombinatsiy</el-button>
  <el-button type="primary">Valyuta</el-button>
</el-container>
  </div>
</template>


<script>
import NumberInput from './NumberInput.vue'
export default {
  components: { NumberInput },
  name:"Pay",
}
</script>

<style scoped>
#pay{
  width: 530px;
}
.info-prize{

  padding: 5px 10px;
}
.container{
  display: flex;
  justify-content: space-between;
}
.info {
  width: 200px;
  background: white;
}
.el-main{
  padding: 0 10px;
}
.el-button{
  margin: 10px 0;
  width: 20%;
  height: 50px;
}
</style>