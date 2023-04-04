import { App } from "vue";
import { focus } from "./input/focus";
import { permission } from "./permission";
import { color } from "./color";
import { clickOutSize } from "./click";
// 自定义指令
export default (app: App) => {
  focus(app);
  permission(app);
  color(app);
  clickOutSize(app);
};