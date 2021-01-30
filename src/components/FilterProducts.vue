<template>
    <div class="filter">
      <el-button class="button" v-for="data in filter" :key="data.name">{{data.name}}</el-button>
    </div>
</template>

<script>
export default {
  data(){
    return{
      filter:[
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
  }
}
</script>

<style scoped>

.filter{
  display: flex;
  overflow-x: auto;
}
.filter::-webkit-scrollbar{
  width: .5rem;
}
.filter::-webkit-scrollbar-thumb {
  background-color: rgb(0, 102, 255);
  border-radius: 10px ;
  outline: none;
}

</style>
