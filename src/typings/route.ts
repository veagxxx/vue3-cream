export interface Route {
  id?: number;
  name: string;
  path?: string;
  children?: Route[];
  component?: string;
  role: string;
  meta?: Meta;
}
export interface Meta {
  icon?: string;
  title?: string;
  hasAuthority?: boolean;
}