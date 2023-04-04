import { App } from 'vue';
export const vColor = {
  mounted(el: HTMLElement, binding: any) {
    const { value, modifiers: { bgColor } } = binding;
    if (el && value && typeof value === 'string') {
      if (bgColor) {
        el.style.backgroundColor = value || 'currentColor';
      } else  {
        el.style.color = value || 'currentColor';
      }
    }
  },
}
export const color = (app: App) => {
  app.directive('color', vColor);
}