<template>
  <div class="minesweeper" ref="el"></div>
</template>
<script lang='ts' setup>
  import { onMounted, ref } from 'vue';
  import { Minesweeper } from './index';
  const el = ref();
  onMounted(() => {
    new Minesweeper(el.value);
  })
</script>
<style lang='scss' scoped>
  .minesweeper {
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
    justify-content: center;
  }
</style>