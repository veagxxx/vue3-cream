import { App } from "vue";

let __event: any = (e: Event) => {};
const vClickOutsize = {
  mounted(el: HTMLElement, binding: any) {
    const { value } = binding;
    const onClick = (e: Event) => {
      if (el.contains(e.target as HTMLElement)) {
        return false;
      }
      if (value) {
        if (typeof value !== 'function') {
          throw new Error('binding value is not a function!');
        } else {
          value(e);
        }
      }
    }
    __event = onClick;
    document.addEventListener('click', __event);
  },
  unmounted() {
    document.removeEventListener('click', __event)
    if (__event) {
      __event = null;
    }
  }
}

export const clickOutSize = (app: App) => {
  app.directive('click-outsize', vClickOutsize);
}