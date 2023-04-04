import { VNode } from "vue";

export interface TbColumn<T> {
  type?: string;
  prop?: string;
  label: string;
  align?: 'center' | 'left' | 'right';
  width?: string | number;
  fixed?: boolean | 'left' | 'right';
  index?: number | ((index: number) => number);
  children?: TbColumn<T>[];
  render?: ((value: T) => VNode); 
  formatter?: (row: TbColumn<T>, col: number, cellValue: any, index: number) => {};
}
