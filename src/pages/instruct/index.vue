<template>
  <div class="directives">
    <div class="drag" v-drag="onDrag">
      <div class="draggable">Drag me</div>
      <span>I am at {{ posiX }}, {{ posiY }}</span>
    </div>
    <div class="resize" v-resize="onDrag">
      Resize me
    </div>
  </div>
</template>
<script lang='ts' setup>
  import { ref } from "vue";
  const posiX = ref<number>(0);
  const posiY = ref<number>(0);
  const onDrag = (position: { x: number, y: number }) => {
    posiX.value = position.x;
    posiY.value = position.y;
  }
</script>
<style lang='scss' scoped>
  .directives {
    @include main-box;
  }
  .drag {
    position: absolute;
    z-index: 1;
    background-color: #fff;
    width: 150px;
    height: 60px;
    font-size: 14px;
    text-align: center;
    padding: 4px 8px;
    user-select: none;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, .12);
    cursor: move;
    .draggable {
      user-select: none;
      margin-bottom: 16px;
    }
  }
  .resize {
    position: relative;
    width: 150px;
    height: 60px;
    font-size: 14px;
    user-select: none;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, .12);
    text-align: center;
    margin: auto;
    line-height: 60px;
    &::before {
      display: block;
      content: '';
      width: 100%;
      height: 100%;
      border: 1px solid hotpink;
      cursor: ew-resize;
    }
  }
</style>