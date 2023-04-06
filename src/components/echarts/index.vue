<template>
  <div class="echats" ref="chartRef"></div>
</template>
<script setup lang='ts'>
  import { onMounted, ref, onBeforeUnmount, watch, markRaw } from 'vue';
  import echarts, { ECOption } from '@/utils/echarts';
  import { useWidthHeight } from '@/hooks';
  import { useAnimation } from '@/utils/animation';
  interface Props {
    option: ECOption;
  }
  const props = withDefaults(defineProps<Props>(), {
  })
  const { width } = useWidthHeight();
  const chartRef = ref<HTMLElement>();
  const chart = ref();
  const timer = ref<any>(null);
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
    clearTimeout(timer.value);
  })
  watch(() => props.option, () => {
    initChart();
  })
  watch(width, (nVal, oVal) => {
    // 侧边栏展开/折叠动画间隔0.3s，使用动画解决侧边栏展开/折叠resize不生效
    useAnimation(300, nVal, oVal, () => {
      chart.value?.resize();
    })
  })
</script>
<style lang='scss' scoped>
  .echats {
    width: 100%;
    height: 100%;
  }
</style>