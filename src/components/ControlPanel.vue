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
      v-for="p in products"
      :key="p.product.id"
      :name="p.product.name"
      :prize="p.product.prize"
      :count="p.quantity"
      :id="p.product.id"
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
import {mapGetters} from "vuex"
export default {
  name:"ControlPanel",
  components:{
    Control,
    Info,
  },
  computed: mapGetters(['products',]),
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