import { onBeforeMount, reactive, toRefs } from "vue";
import { useEventListener } from "./event";
interface Position {
  x: number;
  y: number;
}
interface DragConfig {
  target: HTMLElement;
  dragEL?: HTMLElement;
  initValue?: Position;
}
const position = reactive({ x: 0, y: 0 });
export const useDraggable = (
  { target, dragEL, initValue }: DragConfig,
  callback?: (x: number, y: number) => void
) => {
  dragEL = dragEL ?? target;
  const { left, top } = target.getBoundingClientRect();
  position.x = initValue ? initValue.x ?? left : left;
  position.y = initValue ? initValue.y ?? top : top;
  let remove: any = null;
  callback && callback(position.x, position.y);
  const onMousedown = (e: MouseEvent) => {
    const { offsetX, offsetY } = e;
    const onMousemove = (e2: MouseEvent) => {
      const moveX = e2.pageX - offsetX;
      const moveY = e2.pageY - offsetY;
      target.style.left = `${moveX}px`
      target.style.top = `${moveY}px`
      position.x = moveX;
      position.y = moveY;
      callback && callback(position.x, position.y);
    };
    const onMouseup = () => {
      document.removeEventListener("mousemove", onMousemove);
      document.removeEventListener("mouseup", onMouseup);
    };
    document.addEventListener("mousemove", onMousemove);
    document.addEventListener("mouseup", onMouseup);

  }
  if (dragEL) {
    remove = useEventListener(dragEL, 'mousedown', onMousedown);
  }
  onBeforeMount(() => {
    remove && remove();
  })
  return { 
    ...toRefs(position),
  };
}