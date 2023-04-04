/**
 * 10000 => 10,000
 * @param num 数字
 * @param separator 分隔符
 * @returns 
 */
export const formatNumber = (num: string | number, separator: string = ','): string | number => {
  if (!num || isNaN(+num)) {
    return num;
  }
  let result: string = '';
  const length: number = `${num}`.length;
  const pointIndex = `${num}`.indexOf('.');
  for (let i = length - 1; i >= 0; i--) {
    result = `${num}`[i] + result;
    if (pointIndex > -1) {
      if ((pointIndex - i) % 3 === 0 && `${num}`[i - 1] && i < pointIndex) {
        result = separator + result;
      }
    } else {
      if ((length - i) % 3 === 0 && `${num}`[i - 1]) {
        result = separator + result;
      }
    }
  }
  return result;
}