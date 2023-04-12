export const flatArray = (arr: any) => {
  return arr.reduce((prev: any, curr: any) => {
    if (Array.isArray(curr)) {
      return prev.concat(...flatArray(curr))
    } else {
      return prev.concat(curr);
    }
  }, [])
}