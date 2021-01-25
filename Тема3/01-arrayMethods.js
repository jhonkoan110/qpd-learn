'use strict';

const arr = ['ujadasd', 1, 2, 3, 2231, 123, 0, null, 'Кирилл'];

Object.defineProperties(Array.prototype, {
    first: {
        value: function () {
            return this[0];
        },
        enumerable: false,
    },
    last: {
        value: function () {
            return this[this.length - 1];
        },
        enumerable: false,
    },
    rand: {
        value: function () {
            const randIndex = Math.floor(Math.random() * this.length);
            return this[randIndex];
        },
        enumerable: false,
    },
});

console.log(arr.first());
console.log(arr.last());
console.log(arr.rand()); // 1
console.log(arr.rand()); // null
console.log(arr.rand()); // 2231
