<template>
  <el-row :gutter="20">
    <el-col 
      v-for="i in 7" 
      :key="i + 'col'" 
      :xs="24" 
      :md="12"
    >
      <div class="grid-content ep-bg-purple" ></div>
    </el-col>
  </el-row>
</template>
<script lang='ts' setup>
  
</script>
<style lang='scss' scoped>

.el-row {
  width: 100%;
  margin-bottom: 20px;
  margin-left: 0!important;
  margin-right: 0!important;
  &:last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
    margin-bottom: 24px;
  }

  .grid-content {
    border-radius: 4px;
    height: 200px;
    background-color: #fff;
  }
}
</style>