<template>
  <div class="game">
    <Minesweeper/>
  </div>
</template>
<script lang='ts' setup>
  import Minesweeper from './minesweeper/index.vue';
</script>
<style lang='scss' scoped>
  .game {
    @include main-box;
  }
</style>