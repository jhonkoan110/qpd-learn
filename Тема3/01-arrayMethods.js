'use strict';

Array.prototype.first = function () {
    return this[0];
};

Array.prototype.last = function () {
    return this[this.length - 1];
};

Array.prototype.rand = function () {
    const randIndex = Math.floor(Math.random() * this.length);
    return this[randIndex];
};

const arr = ['ujadasd', 1, 2, 3, 2231, 123, 0, null, 'Кирилл'];

const firstElement = arr.first();
const lastElement = arr.last();
const randElement = arr.rand();

console.log(firstElement); // ujadasd''
console.log(lastElement); // 'Кирилл'
console.log(randElement); // 3
console.log(arr.rand()); // 1
console.log(arr.rand()); // null
console.log(arr.rand()); // 2231
