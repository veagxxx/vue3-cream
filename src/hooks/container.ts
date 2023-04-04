import { computed, ref, watch } from "vue";
import { useSettingStore } from "@/store";
import { useEventListener } from "./event";
const settingStore = useSettingStore();
// 获取 el-main 内容的高度
export const useWidthHeight = () => {
  const hasCollapse = computed<boolean>(() => {
    return settingStore.hasCollapse;
  })
  // 高度：window.innerHeight - header 高度
  const mainHeight = ref<number>(window.innerHeight - 60);
  // 宽度：window.innnerWidth - aside 宽度
  const mainWidth = ref<number>(window.innerWidth - (hasCollapse.value ? 60 : 200));
  const updateWidthHeight = () => {
    mainHeight.value = window.innerHeight - 60;
    mainWidth.value = window.innerWidth - (hasCollapse.value ? 60 : 200);
  }
  // 挂载/销毁事件
  useEventListener(window, 'resize', updateWidthHeight);

  watch(hasCollapse, (val) => {
    updateWidthHeight();
  })
  return { height: mainHeight, width: mainWidth };
}