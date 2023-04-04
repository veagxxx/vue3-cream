import { onMounted } from 'vue';
// 自动转 base64
export const useBase64 = (el: string) => {
  return new Promise((resolve, reject) => {
    onMounted(() => {
      const imgEl = document.querySelector(el) as HTMLImageElement;
      imgEl.onload = () => {
        resolve({ baseUrl: useToBase64(imgEl) })
      }
    })
  })
}
// 手动转 base64
export const useToBase64 = (el: HTMLImageElement) => {
  const canvas: HTMLCanvasElement = document.createElement('canvas');
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  canvas.width = el.width;
  canvas.height = el.height;
  ctx.drawImage(el, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL('image/png');
}