<template>
  <div class="home-page">
    <DataTable
      :height="height - 64"
      :columns="tableData.columns"
      :tableData="tableData.data"
      :loading="loading"
      :pagination="true"
      :currentPage="currentPage"
      :pageSize="pageSize"
      :pageSizes="[10, 20, 50, 100]"
      :total="100"
      @sizeChange="onSizeChange"
      @currentChange="onCurrentChange"
    />
  </div>
</template>
<script lang='ts' setup>
  import { useWidthHeight, useLoading } from '@/hooks/index';
  import { onMounted, reactive, ref } from 'vue';
  import { columns } from '@/mock/table';
  import { testApi } from '@/api/test';
  import DataTable from '@/components/DataTable/index.vue';
  onMounted(() => {
    getData()
  })
  const { height } = useWidthHeight();
  const { loading, setLoading } = useLoading();
  const currentPage = ref<number>(1);
  const pageSize = ref<number>(20);
  const tableData = reactive<any>({
    data: [],
    columns: columns,
  })
  const getData = async () => {
    setLoading(true);
    const res = await testApi({
      pageIndex: currentPage.value,
      pageSize: pageSize.value,
    });
    tableData.data = res.data;
    setLoading(false);
  }
  const onSizeChange = (value: number) => {
    pageSize.value = value
  }
  const onCurrentChange = (value: number) => {
    currentPage.value = value
  }
</script>
<style lang='scss' scoped>
  .home-page {
    @include main-box;
  }
</style>