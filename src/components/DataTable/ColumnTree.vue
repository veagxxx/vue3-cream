<template>
  <el-table-column
    :type="column.type"
    :prop="column.prop"
    :label="column.label"
    :align="column.align || 'center'"
    :width="column.width"
    :fixed="column.fixed || false"
    :index="column.index"
    :formatter="column.formatter"
  >
    <template #default="scope" v-if="column.render">
      <component :is="column.render && column.render(scope.row)"></component>
    </template>
    <template v-if="column.children">
      <ColumnTree 
        v-for="item in column.children" 
        :key="item.prop" :column="item"
      ></ColumnTree>
    </template>
  </el-table-column>
</template>
<script lang='ts' setup>
  import { TbColumn } from '@/typings/table';
  interface Props {
    column: TbColumn<any>;
  }
  withDefaults(defineProps<Props>(), {})
</script>
<style lang='scss' scoped>
  
</style>