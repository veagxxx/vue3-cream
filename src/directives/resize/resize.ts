import { App, DirectiveBinding } from 'vue';
const vResize = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    
  },
}
export const mountResize = (app: App) => {
  app.directive('resize', vResize);
}