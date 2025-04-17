function encontrarKthMaior(array, k) {
    array.sort((a, b) => a - b)
    return array[array.length - k]
}

const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
const k = 3;
console.log(encontrarKthMaior(array, k))