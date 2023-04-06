<template>
  <el-scrollbar>
    <div class="mall-logo">
      <svg-icon class="logo-icon" icon-class="logo" size="large"></svg-icon>
    </div>
    <el-menu
      id="aside-menu"
      :collapse="hasCollapse"
      :collapse-transition="true"
      :unique-opened="false"
      :router="true"
      :default-active="activePath"
      :background-color="asideBgColor"
      :active-text-color="asideTextColor"
    >
      <MenuTree 
        v-for="item in menusList" 
        :key="item.id" 
        :menuItem="item"
      />
    </el-menu>
    <div class="aside-icon" @click="onCollapse" :title="hasCollapse ? '展开' : '折叠'">
      <svg-icon :icon-class="hasCollapse ? 'right' : 'left'"></svg-icon>
    </div>
  </el-scrollbar>
</template>
<script lang='ts' setup>
  import { ref, computed } from 'vue';
  import MenuTree from './MenuTree.vue';
  import { Route } from '@/typings/route';
  import { useRoute } from 'vue-router';
  import { useSettingStore } from '@/store/index';
  const settingStore = useSettingStore();
  const route = useRoute()
  interface Props {
    hasCollapse: boolean;
    menusList: Route[];
  }
  withDefaults(defineProps<Props>(), {
    hasCollapse: false,
  })
  const asideBgColor = ref<string>('#fff');
  const asideTextColor = ref<string>('#626aef');
  const activePath = computed(() => {
    return route.path
  })
  const onCollapse = () => {
    settingStore.updateCollapse()
  }
</script>
<style lang='scss' scoped>
  .el-scrollbar {
    height: 100%;
    background-color: v-bind(asideBgColor);
    border-right: 1px solid #eee;
    position: relative;
    .aside-icon {
      width: 24px;
      height: 24px;
      border-radius: 20px;
      border: 1px solid #ddd;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
      background-color: #fff;
      position: absolute;
      top: 50%;
      right: 0;
      z-index: 1;
      transform: translate(50%, -50%);
      cursor: pointer;
    }
    .mall-logo {
      height: $headerHeight;
      display: flex;
      justify-content: center;
      align-items: center;
      .logo-icon {
        font-size: 36px;
      }
    }
    .el-menu {
      height: 100%;
      border-right: none;
    }
    .el-menu:not(.el-menu--collapse) {
      width: $asideWidth;
    }
  }
</style>