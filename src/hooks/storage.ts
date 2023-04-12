interface StorageOption<T> {
  mergeDefault: boolean | ((oldValue: T, newValue: T) => T);
}

export function useLocalStorage(key: string, value: any): any;
export function useLocalStorage<T>(key: string, value: T): T;
export function useLocalStorage<T>(key: string, value: T, option: StorageOption<T>): T;
export function useLocalStorage<T>(key: string, value: T, option?: StorageOption<T>): T {
  let insteadValue = value;
  if (option) {
    const { mergeDefault } = option;
    const previousValue: string | null = window.localStorage.getItem(key);
    if (previousValue) {
      if (typeof mergeDefault === 'function') {
        insteadValue = mergeDefault(JSON.parse(previousValue), value)
      } else {
        insteadValue = { ...insteadValue, ...JSON.parse(previousValue) };
      }
    }
  }
  window.localStorage.setItem(key, JSON.stringify(insteadValue));
  return insteadValue;
}


function useSessionStorage(key: string, value: any): any;
function useSessionStorage<T>(key: string, value: T): T;
function useSessionStorage<T>(key: string, value: T, option: any): T;
function useSessionStorage<T>(key: string, value: T, option?: any) {
  
}
