<template>
  <div
  @click="event"
  id="card">
    <h5>{{name}}</h5>
    <el-progress
    id="progress"
    type="circle"
    :width="80"
    :percentage="percent"></el-progress>
    <p>{{prize}}</p>
  </div>
</template>

<script>
export default {
  name:"Card",
  props:["prize", "name", "percent"],
  methods:{
    event(){
      this.$emit("event")
    }
  }
}
</script>

<style scoped>
#card{
  position: relative;
  width: 12rem;
  height: 6rem;
  background: white;
  border-radius: 5px;
  display: grid;
  justify-content: space-between;
  cursor: pointer;
  margin: 10px;
  transition: .5s;
}
#card:hover{
  transform: scale(1.1);
}
#card h5{
  padding: 5px 8px;
}
#card p{
  padding: 5px 8px;
  align-self: end;
}
#progress{
  position:absolute;
  top: 10%;
  right: 5%;
}
</style>