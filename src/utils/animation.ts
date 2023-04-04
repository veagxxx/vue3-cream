/**
 * 动画的改变某个值
 * @param duration 动画持续时间/秒
 * @param from 开始值
 * @param to 期望值
 * @param callback 回调函数
 */
export const useAnimation = (
  duration: number, 
  from: number, 
  to: number, 
  callback: (value: number) => void
) => {
  const startTime = Date.now();
  const diff: number = to - from;
  const average: number = diff / duration;
  let value: number = from;
  callback(value);
  const _animate = () => {
    const currentTime: number = Date.now();
    const timeDiff: number = currentTime - startTime;
    if (timeDiff >= duration) {
      value = to;
      callback(value);
      return;
    }
    value = diff < 0 ? from + (timeDiff * average) : timeDiff * average;
    callback(value);
    requestAnimationFrame(_animate);
  }
  _animate();
}