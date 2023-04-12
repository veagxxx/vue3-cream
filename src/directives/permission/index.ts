import { App, DirectiveBinding } from "vue";
import { useUserStore } from '@/store/index';
// 权限
const vPermission = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding;
    const userStore = useUserStore();
    const roles: string[] = userStore.user.roles;
    if (value && value instanceof Array && value.length > 0) {
      const hasPermission = roles.some((role: string) => {
        return value.includes(role);
      })
      if (!hasPermission) {
        el.style.display = 'none';
      }
    } else {
      throw new Error('need roles! Like v-permission="[\'admin\',\'editor\']"')
    }
  },
}

export const permission = (app: App) => {
  app.directive('permission', vPermission);
}