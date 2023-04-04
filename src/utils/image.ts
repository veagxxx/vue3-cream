export const downloadImage = (imgSrc: string, name: string) => {
  const image = new Image();
  image.setAttribute('crossOrigin', 'anonymous');
  image.onload = () => {
    const canvas: HTMLCanvasElement = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    context.drawImage(image, 0, 0, image.width, image.height);
    // 得到图片的base64编码数据
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
     // 创建一个单击事件
    const event = new MouseEvent('click');
    a.download = name || 'photo';
    // 将生成的URL设置为a.href属性
    a.href = url;
     // 触发a的单击事件
    a.dispatchEvent(event);
  }
  image.src = imgSrc;
}