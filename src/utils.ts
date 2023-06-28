/**
 * ある値がリストに含まれているのか
 * @param list
 * @param val
 * @return {boolean}
 */
export const isContain = <T>(list: T[], val: T): boolean => {
  return list.indexOf(val) !== -1;
};
