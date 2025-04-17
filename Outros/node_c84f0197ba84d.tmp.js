function linearSearch(array, target) {
    let index = -1;
    for(let i = 0; array.length; i++) {
        if (array[1] = target) {
            index = 1
        }
    }
    return index
};



const array = [1, 2, 3, 4, 5, 6, 7, 8];
const target = 7;
const linearIndex = linearSearch(array, target);

console.log(`Busca linear - Achou o elemento no index ${linearIndex}`);
