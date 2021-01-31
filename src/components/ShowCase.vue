<template>
  <div id="show">
    <div v-if="this.$store.state.pay === false">
      <div class="filter">
      <el-button
      @click="filter(data.name)"
      class="button"
      v-for="data in names"
      :key="data.name">{{data.name}}</el-button>
    </div>
    <div class="products">
      <Card
      @event="handleProduct(product.id)"
      v-for="product in products"
      :key="product.id"
      :name="product.name"
      :percent="product.percent"
      :prize="product.prize"
      />
    </div>
    </div>
    <div v-if="this.$store.state.pay">
      <Pay/>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'
import API from "../Api/data.json"
import Pay from "./Pay"
export default {
  name:"Show",
  components:{
    Card,
    Pay,
  },
  data(){
    return{
      products: API,
      names:[
        {
          name:"ALL"
        },
        {
          name:"Lenovo"
        },
        {
          name:"Apple"
        },
        {
          name:"Samsung"
        },
        {
          name:"GoPro"
        }
      ]
    }
  },
  methods:{
    handleProduct(id){
      this.$store.dispatch("handleProduct", id)
    },
    filter(value){
      const data = API.filter(product=>{
        if(value === "ALL"){
          return API
        } else {
          return product.brend === value
        }
      })
    this.products = data
    },
  }
}
</script>

<style scoped>
#show{
  background:#020A96;
  padding: 10px 30px;
  height: 676px;
}
.products{
  display: flex;
  flex-wrap: wrap;
}
.button{
  padding: 20px 50px;
  background: rgb(0, 140, 255);
  color: white;
  margin: 5px;
  border: none;
}
.filter{
  display: flex;
  overflow-x: auto;
}
</style>