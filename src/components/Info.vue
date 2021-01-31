<template>
  <div id="show">
    <div :class="show === true ? 'handle':'show'" @click="handleItem">
      <p>{{name}}</p>
      <p>{{count}}</p>
      <p>{{prize}} sum</p>
      <p>{{count*prize}} sum</p>
    </div>
    <div v-if="show" class="handleItem">
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-house" circle></el-button>
      <el-input-number v-model="count" @change="handlePrize" :max="20" :min="1"></el-input-number>
      <el-button
      type="danger"
      icon="el-icon-delete"
      circle></el-button>
    </div>
  </div>
</template>

<script>
export default {
  name:"Info",
  props:["prize", "name", "count", "id"],
  data(){
    return{
      show: false,
      num: 1
    }
  },
  methods:{
    handleItem(){
      this.show = !this.show
    },
    handlePrize(value){
      this.$store.dispatch("handleCount", value)
    }
  }
}
</script>

<style scoped>
.show{
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
  overflow-y: auto;
}
.handle{
  display: flex;
  justify-content: space-between;
  color: white;
  background: #505AFC;
  padding: 5px 10px;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
  margin: 1px 0;
}
.handleItem{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 30px;
  background: #505AFC;
}
.show p{
  width: 20%;
}
.show p:nth-child(1){
  font-weight: bold;
}
</style>