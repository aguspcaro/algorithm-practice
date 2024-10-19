const bubbleSort = (arr) => {
  const newArr = arr;
  const n = newArr.length;

  for (let i = 0; i < n - 1; i++) {
    console.log("vuelta grande", "hasta", i, n - 1);

    for (let j = 0; j < n - i - 1; j++) {
      console.log("vuelta chica", "hasta", j, n - i - 1);
      console.log(
        "item seleccionado ----->",
        arr[j],
        "item siguiente al seleccionado ----->",
        arr[j + 1]
      );

      const itemSeleccionado = arr[j];
      const itemSiguienteAlSeleccionado = arr[j + 1];

      if (itemSeleccionado > itemSiguienteAlSeleccionado) {
        const current = arr[j];
        const prev = arr[j + 1];
        arr[j] = prev;
        arr[j + 1] = current;
      }
    }
  }
  return newArr;
};

console.log(bubbleSort([5, 2, 9, 10, 1]));

// [5, 2, 9, 10, 1] hasta 4
// [2, 5, 9, 1, 10] hasta 3
// [2, 5, 1, 9, 10] hasta 2
// [2, 1, 5, 9, 10] hasta 1
// [1, 2, 5, 9, 10] hasta 0
