export function digitInputs(str) {
  str = str.replace(/,/g, "");
  return parseInt(str);
}

export function numberWithCommas(int) {
  return int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
