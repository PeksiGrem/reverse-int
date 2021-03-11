module.exports = function reverse (n) {
  if(n < 0){
      n = n * (-1);
  }
  let arr = n.toString().split('').reverse();
  return Number(arr.join(''));
}
