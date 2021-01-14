const arr3 = [20, 19, 2, 16, 3, 2, -2, 4, 5, 6, 7, 7, 7, 7, 'asd', 'asd', { a: 3 }, { a: 3 }];

const sortedUniq = (array) => {
    // Проверка, массив или нет
    if (!Array.isArray(array)) {
        return [];
    }

    // Проверка на пустоту массива
    if (array.length === 0) {
        return array;
    }

    const setArray = new Set(array);
    const result = Array.from(setArray);

    return result;
};

console.log('sortedUniq:');
console.log(sortedUniq(arr3)); // [20, 19, 16, 3, 2, -2, 4, 5, 6, 7, "asd", {…}, {…}]
