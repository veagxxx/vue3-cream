<template>
  <div class="home-page">
    <div class="chart-list x-start">
      <div class="echart-item" v-for="(item, index) in echartList" :key="'chart' + index">
        <Echart :option="item"/>
      </div>
    </div>
  </div>
</template>
<script lang='ts' setup>
  import Echart from '@/components/echarts/index.vue';
  import { echartList } from './index';
</script>
<style lang='scss' scoped>
  .home-page {
    .chart-list {
      height: 100%;
      @include flex-box;
      flex-wrap: wrap;
    }
    .echart-item {
      box-sizing: border-box;
      max-width: calc(33% - 8px);
      flex: 0 0 calc(33% - 8px);
      height: 320px;
      border-radius: 4px;
      background-color: #fff;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, .12);
      &:not(:nth-child(3n)) {
        margin-right: 16px;
      }
      &:not(:nth-child(-n + 3)) {
        margin-top: 16px;
      }
    }
  }
</style>