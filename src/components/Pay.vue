<template>
  <div id="pay">
    <el-container>
  <el-aside width="200px">
    <div class="info">
      <div class="info-prize">
        <p>All prize</p>
        <h5>{{allPrizeItem}} sum</h5>
      </div>
      <div class="info-prize">
        <p>All Items</p>
        <h5>{{allItem}}</h5>
      </div>
      <div class="info-prize">
        <p>Element</p>
        <h5>1 000 000 sum</h5>
      </div>
      <div class="info-prize">
        <p>All prize</p>
        <h5>{{num || 0}} sum</h5>
      </div>
    </div>
  </el-aside>
  <el-container>
    <el-main>
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
import {mapGetters} from "vuex"
export default {
  name:"Pay",
  computed:mapGetters(["allPrizeItem", "allItem"]),
  data(){
    return{
      num:''
    }
  },
  methods:{
    clear(){
      this.num = ''
    },
    append(num){
      if(this.num.length !== 20){
        this.num = `${this.num}${num}`
      }else{
        return this.num
      }
    }
  }
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
.container .el-button{
  margin: 10px 0;
  width: 20%;
  height: 50px;
}

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
.buttons .el-button{
  width: 33.3%;
  padding: 0;
  margin: 0;
  height: 50px;
  background: rgb(243, 243, 243);
}
.buttons .el-button+.el-button{
  margin-left: 0;
}
</style>