<template>
  <el-container class="container">
    <Aside :hasCollapse="hasCollapse" :menusList="routerList"></Aside>
    <el-container class="main-container">
      <el-header>
        <Header :hasCollapse="hasCollapse"></Header>
      </el-header>
      <el-main>
        <el-scrollbar>
          <router-view v-slot="{ Component, route }">
            <transition name="fade" mode="out-in">
              <component :is="Component" :key="route.path"/>
            </transition>
          </router-view>
        </el-scrollbar>
      </el-main> 
    </el-container>
  </el-container>
  
</template>
<script lang='ts' setup>
  import Header from './header/index.vue';
  import Aside from './aside/index.vue';
  import { useSettingStore } from '@/store/index';
  import { computed } from 'vue';
  import { routerList } from '@/mock/routerData'
  const store = useSettingStore();
  const hasCollapse = computed(() => {
    return store.hasCollapse;
  })
</script>
<style lang='scss' scoped>
.container {
  height: 100%;
  .el-header {
    padding: 0;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    background-color: $headerBgColor;
  }
  .main-container {
    height: 100%;
    .el-main {
      padding: 0px;
      overflow: auto;
      overflow-x: hidden;
      background: $mainBgColor;
    }
  }
}
</style>