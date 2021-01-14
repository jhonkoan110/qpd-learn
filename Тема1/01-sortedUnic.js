const arr3 = [20, 19, 2, 16, 3, 2, -2, 4, 5, 6, 7, 7, 7, 7, 'asd', 'asd', { a: 3 }, { a: 3 }];

const sortedUniq = (array) => {
    const setArray = new Set(array);
    const result = Array.from(setArray).sort((a, b) => a + b);
    return result;
};

console.log('sortedUniq:');
console.log(sortedUniq(arr3)); // [20, 19, 16, 3, 2, -2, 4, 5, 6, 7, "asd", {…}, {…}]
