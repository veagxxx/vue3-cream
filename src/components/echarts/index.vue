<template>
  <div class="echats" ref="chartRef"></div>
</template>
<script setup lang='ts'>
  import { onMounted, ref, onBeforeUnmount, watch, markRaw } from 'vue';
  import echarts, { ECOption } from '@/utils/echarts';
  interface Props {
    option: ECOption;
  }
  const props = withDefaults(defineProps<Props>(), {
  })
  const chartRef = ref<HTMLElement>();
  const chart = ref();
  const initChart = () => {
    if (chart.value !== undefined) {
      chart.value?.dispose();
    }
    chart.value = markRaw(echarts.init(chartRef.value as HTMLElement));
    chart.value?.setOption(props.option);
  }
  const onResize = () => {
    chart.value?.resize();
  }
  onMounted(() => {
    initChart();
    window.addEventListener('resize', onResize);
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize);
  })
  watch(() => props.option, () => {
    initChart();
  })
</script>
<style lang='scss' scoped>
  .echats {
    width: 100%;
    height: 100%;
  }
</style>