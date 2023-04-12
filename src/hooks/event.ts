import { onMounted, onUnmounted } from "vue"
export const useEventListener = (
  target: Window | HTMLElement, 
  event: string, 
  listener: any,
  options?: boolean,
) => {
  if (target === window) {
    onMounted(() => target.addEventListener(event, listener, options));
    onUnmounted(() => target.removeEventListener(event, listener, options));
  }
  const register = () => {
    target.addEventListener(event, listener, options);
  }
  const stop = () => {
    target.removeEventListener(event, listener, options);
  }
  register();
  return stop;
}