<template>
  <div>
    <div class="drag" ref="el">
      <div class="draggable" ref="dragEl">Drag me</div>
      <span>I am at {{ posiX }}, {{ posiY }}</span>
    </div>
  </div>
</template>
<script lang='ts' setup>
  import { useDraggable } from "@/hooks";
  import { onMounted, ref } from "vue";
  const el = ref();
  const dragEl = ref();
  const posiX = ref<number>(0);
  const posiY = ref<number>(0);
  onMounted(() => {
    useDraggable({ target: el.value, dragEL: dragEl.value }, (x, y) => {
      posiX.value = x || 0;
      posiY.value = y || 0;
    });
  })
</script>
<style lang='scss' scoped>
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
    .draggable {
      cursor: move;
      user-select: none;
      margin-bottom: 16px;
    }
  }
</style>