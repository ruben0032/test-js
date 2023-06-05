function sum(a, b) {
  return a + b;
}
function mult(a, b) {
  return a * b;
}
function divi(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}
module.exports = {
  sum,
  mult,
  divi,
};
