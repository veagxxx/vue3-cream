<template>
  <span class="animation-number">{{ count }}</span>
</template>
<script lang='ts' setup>
  import { useAnimation } from '@/utils/animation';
  import { formatNumber } from '@/utils/format';
  import { onMounted, ref } from 'vue';
  interface Props {
    from: number;
    to: number;
    duration?: number;
    precision?: number;
    autoplay?: boolean;
    separator?: boolean;
  }
  const { from, to, duration, precision, autoplay, separator } = withDefaults(defineProps<Props>(), {
    duration: 3000,
    precision: 0,
    autoplay: true,
    separator: false,
  });
  const emitter = defineEmits(['handleFinish']);
  const count = ref<string>(from.toFixed(precision));
  onMounted(() => {
    console.log(formatNumber(100000))
    autoplay && play();
  })
  const play = () => {
    useAnimation(duration, from, to, (value) => {
      count.value = separator ? formatNumber(value.toFixed(precision)).toString() : value.toFixed(precision);
      if (value === to) {
        emitter('handleFinish', count.value);
      }
    })
  }
  defineExpose({ play });
</script>
<style lang='scss' scoped>
  .animation-number {
    font-size: 18px;
    font-variant-numeric: tabular-nums;
  }
</style>