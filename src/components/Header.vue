<template>
  <div id="head">
    <div class="head">
      <h1>Logo</h1>
      <i class="fas fa-search"></i>
    </div>
    <div class="bread">
      <el-breadcrumb separator-class="el-icon-arrow-right white">
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item>Orderlayaway</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<style scoped>
#head{
  background:#505AFC;
}
.head{
  display: flex;
  padding: 20px 30px;
  justify-content: space-between;
  align-items: center;
  color: white;
}
.bread{
  background: #4048C9;
  padding: 5px 30px;
}
.el-breadcrumb-item{
  color: white;
}

</style>