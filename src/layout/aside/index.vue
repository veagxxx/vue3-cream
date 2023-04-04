<template>
  <el-scrollbar>
    <div class="mall-logo">
      <svg-icon class="logo-icon" icon-class="logo" size="large"></svg-icon>
    </div>
    <el-menu
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
  </el-scrollbar>
</template>
<script lang='ts' setup>
  import { ref, computed } from 'vue';
  import MenuTree from './MenuTree.vue';
  import { Route } from '@/typings/route';
  import { useRoute } from 'vue-router';
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
</script>
<style lang='scss' scoped>
  .el-scrollbar {
    height: 100%;
    background-color: v-bind(asideBgColor);
    border-right: 1px solid #eee;
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