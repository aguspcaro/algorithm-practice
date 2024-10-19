function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; // Si el array tiene 1 o menos elementos, ya está ordenado
  }

  const pivot = arr[Math.floor(arr.length / 2)]; // Elegimos un pivote
  const left = [];
  const right = [];
  const equal = [];

  // Dividimos los elementos en tres arrays: menores, iguales y mayores al pivote
  for (let element of arr) {
    if (element < pivot) {
      left.push(element);
    } else if (element > pivot) {
      right.push(element);
    } else {
      equal.push(element); // Igual al pivote
    }
  }

  // Recursivamente ordenamos los arrays de izquierda y derecha y combinamos
  return [...quickSort(left), ...equal, ...quickSort(right)];
}

// Ejemplo de uso:
console.log(quickSort([38, 27, 43, 3, 9, 82, 10]));
