const arr1 = [1, 2, 2, 2, 2, 2, 2, 1, 2, 3, 2, 4, 5, 6, 7, -20, { age: 27 }, 'asd', 'ssssss'];
const arr2 = [2, 3, 6, -20, { age: 27 }, 'asd', 'a'];

const difference = (array, values) => {
    const result = array.concat();

    for (let i = 0; i < values.length; i++) {
        const currentValue = values[i];

        if (result.includes(currentValue)) {
            result.splice(result.indexOf(currentValue), 1);
            i--;
        }
    }

    return result;
};

console.log('difference:');
console.log(difference(arr1, arr2)); // [1, 1, 4, 5, 7, {…}, "ssssss"]
