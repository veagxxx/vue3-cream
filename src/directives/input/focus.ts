import { App } from "vue";

const vFocus = {
  mounted(el: HTMLElement) {
    const className: string = el.className;
    if (className.startsWith('el-')) {
      while (el.children.length) {
        el = el.children[0] as HTMLElement;
      }
    }
    return el.focus();
  }
}
export const focus = (app: App) => {
  app.directive('focus', vFocus);
}