function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Si el array tiene 1 o menos elementos, ya está ordenado
  }

  const middle = Math.floor(arr.length / 2); // Encuentra la mitad del array y redondea para arriba

  const left = arr.slice(0, middle); // Divide la primera mitad hasta middle sin contarlo

  const right = arr.slice(middle); // Divide la segunda mitad

  console.log("left", left);
  console.log("right", right);

  return merge(mergeSort(left), mergeSort(right)); // Llama recursivamente y combina
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  console.log("left", left);
  console.log("right", right);

  // Mientras haya elementos en ambos arrays
  while (leftIndex < left.length && rightIndex < right.length) {
    console.log("iteration numbers", left[leftIndex], right[rightIndex]);
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  console.log("result", result);

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([38, 27, 43, 3, 9, 10, 23, 32]));
