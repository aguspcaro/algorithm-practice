function sumaArray(arr = [1, 2]) {
  return arr.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);
}
