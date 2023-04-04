<template>
  <el-table 
    v-loading="loading"
    :data="tableData" 
    :height="height" 
    :maxHeight="maxHeight"
    :border="border"
    :stripe="stripe"
    :size="size"
    :lazy="lazy"
  >
    <ColumnTree 
      v-for="item in columns" 
      :key="item.prop" 
      :column="item"
    ></ColumnTree>
  </el-table>
  <div class="pagination" v-if="pagination">
    <el-pagination 
      :current-page="currentPage"
      :page-size="pageSize"
      :page-sizes="pageSizes"
      :layout="layout"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange" 
    />
  </div>
</template>
<script lang='ts' setup>
  import { TbColumn } from '@/typings/table';
  import ColumnTree from './ColumnTree.vue';
  interface Props {
    columns: TbColumn<any>[];
    tableData: any[];
    height?: number | string;
    maxHeight?: number | string;
    border?: boolean;
    stripe?: boolean;
    size?: 'default' | 'small' | 'large';
    loading?: boolean;
    lazy?: boolean;
    pagination?: boolean;
    currentPage?: number;
    pageSize?: number;
    total?: number;
    pageSizes?: number[];
    layout?: string;
  }
  withDefaults(defineProps<Props>(), {
    size: 'default',
    pagination: false,
    layout: 'total, sizes, prev, pager, next, jumper',
  })
  const emit = defineEmits(['sizeChange', 'currentChange'])
  const handleSizeChange = (value: number): void => {
    emit('sizeChange', value)
  }
  const handleCurrentChange = (value: number): void => {
    emit('currentChange', value)
  }
</script>
<style lang='scss' scoped> 
  .pagination {
    padding: 6px 6px 0;
  }
</style>