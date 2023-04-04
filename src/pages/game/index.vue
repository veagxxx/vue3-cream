<template>
  <div class="game">
    <NumberAnimation 
      ref="numberAnimationRef"
      :from="1"
      :to="100000"
      :precision="2"
      separator
      :autoplay="false"
      @handle-finish="onFinish"
    />
    <el-button @click="onPlay">开始</el-button>
  </div>
</template>
<script lang='ts' setup>
  import { onMounted, ref } from 'vue';
  import NumberAnimation from '@/components/number-animation/index.vue';
  onMounted(() => {
    
  })
  const numberAnimationRef = ref<InstanceType<typeof NumberAnimation>>()
  const onPlay = () => {
    numberAnimationRef.value?.play();
  }
  const onFinish = () => {
    console.log('onFinish')
  }
</script>
<style lang='scss' scoped>
  
</style>