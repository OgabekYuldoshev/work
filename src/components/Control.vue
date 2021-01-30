<template>
  <div id="control">
    <div class="info">
      <div class="info-prize">
        <p>All prize</p>
        <h5>1 000 000 sum</h5>
      </div>
      <div class="info-prize">
        <p>CashBack</p>
        <h5>{{prizes}} sum</h5>
      </div>
      <div class="info-prize">
        <p>Element</p>
        <h5>1 000 000 sum</h5>
      </div>
      <div class="info-prize">
        <p>Client</p>
        <h5>Elon Mask</h5>
      </div>
    </div>
    <div class="route">
      <el-button>
        <i class="fas fa-user"></i> Client
      </el-button>
      <el-button>
        <i class="fas fa-print"></i> Print
      </el-button>
    </div>
    <div class="control-button">
      <el-button type="danger">Clear</el-button>
      <el-button type="primary">Postponement</el-button>
      <el-button type="success" @click="handlePay">Pay</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name:"Control",
  props:["prizes"],
  data(){
    return{
      prize: null
    }
  },
  methods:{
    handlePay(){
      this.$emit("pay")
    }
  }
}
</script>


<style scoped>
#control{
  background: rgb(233, 233, 233);
  align-items: flex-end;
}
.info-prize{
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
}
.route{
  display: flex;
  justify-content: space-around;
}
.route .el-button{
  width: 40%;
  height: 50px;
  margin: 10px 0;
}
.control-button{
  display: flex;
  justify-content: space-around;
}
.control-button .el-button{
  width: 30%;
  height: 50px;
  margin: 10px 0;
}
</style>