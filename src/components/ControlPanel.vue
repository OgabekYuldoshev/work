<template>
  <div id="control">
    <div class="control">
      <span>
        <i class="fas fa-shopping-cart"></i>
      </span>
      <span>
        <i class="fas fa-clipboard-list"></i>
      </span>
    </div>
    <div class="info">
      <div class="info-item">
        <p>Names</p>
        <p>Count</p>
        <p>Prize</p>
        <p>All</p>
      </div>
    </div>
    <div class="show">
      <Info
      @del="del(p.id)"
      v-for="p in products"
      :key="p.id"
      :name="p.name"
      :prize="p.prize"
      />
    </div>
    <div class="control-item">
      <Control />
    </div>
  </div>
</template>


<script>
import Control from "./Control"
import Info from "./Info"
export default {
  name:"ControlPanel",
  props:["products"],
  components:{
    Control,
    Info,
  },
  methods:{
    del(){
      this.$emit("del")
    }
  }
}
</script>


<style scoped>
.control{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.control span {
  width: 50%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(219, 219, 219);
}
.control span i {
  font-size: 20px;
  color: rgb(56, 56, 56)
}
.info-item{
  background: rgb(241, 241, 241);
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
}
.info-item p{
  width: 20%;
}
.control-item{
  align-self: flex-end;
}
.show{
  height: 390px;
  overflow-y: auto;
}
</style>