import { onMounted, onUnmounted } from "vue"
/**
 * 创建/销毁事件 hook
 * @param target 目标元素
 * @param event 事件名称
 * @param callback 回调
 */
export const useEventListener = (
  target: Window | HTMLElement, 
  event: string, 
  callback: EventListenerOrEventListenerObject
) => {
  onMounted(() => target.addEventListener(event, callback))
  onUnmounted(() => target.removeEventListener(event, callback))
}