<template>
  <el-menu-item v-if="!menuItem.children" :index="menuItem.path">
    <el-icon>
      <svg-icon :iconClass="menuItem.meta.icon"></svg-icon>
      <!-- <component :is="menuItem.meta.icon"></component> -->
    </el-icon>
    <template #title>
      <span>{{ menuItem.meta.title }}</span>
    </template>
  </el-menu-item>
  <el-sub-menu v-else :index="menuItem.path">
    <template #title>
      <el-icon>
        <svg-icon :iconClass="menuItem.meta.icon"></svg-icon>
        <!-- <component :is="menuItem.meta.icon"></component> -->
      </el-icon>
      <span>{{ menuItem.meta.title }}</span>
    </template>
    <el-menu-item-group 
      v-for="(item, index) in menuItem.children" 
      :key="item.id"
    >
      <MenuTree :menuItem="item"></MenuTree>
    </el-menu-item-group>
  </el-sub-menu>
</template>
<script lang='ts' setup>
  defineProps({
    menuItem: {
      type: Object,
      default: () => {}
    }
  })
</script>
<style lang='scss' scoped>
  
</style>