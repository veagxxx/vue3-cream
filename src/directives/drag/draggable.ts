import { App, DirectiveBinding } from "vue";
const vDrag = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding;
    const onDrag = (x: number, y: number) => {
      if (value) {
        if (typeof value !== 'function') {
          throw new Error('binding value must be a function!')
        } else {
          value({ x, y });
        }
      }
    }
    const { left, top } = el.getBoundingClientRect();
    onDrag(left, top);
    const onClick = (e: MouseEvent) => {
      if (el.contains(e.target as HTMLElement)) {
        const { offsetLeft, offsetTop } = el;
        const { pageX, pageY } = e;
        const elOffsetX: number = pageX - offsetLeft;
        const elOffsetY: number = pageY - offsetTop;
        const onMousemove = (ev: MouseEvent) => {
          const moveX: number = ev.pageX - elOffsetX;
          const moveY: number = ev.pageY - elOffsetY;
          el.style.left = `${moveX}px`;
          el.style.top = `${moveY}px`;
          onDrag(moveX, moveY);
        }
        const onClean = () => {
          document.removeEventListener('mousemove', onMousemove);
          document.removeEventListener('mouseup', onClean);
        }
        document.addEventListener('mousemove', onMousemove);
        document.addEventListener('mouseup', onClean);
      }
    }
    el.addEventListener('mousedown', onClick);
  },
  unmounted() {
    
  },
}
export const mountDrag = (app: App) => {
  app.directive('drag', vDrag);
}