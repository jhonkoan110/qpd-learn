// Делает первый класс наследником второго
function extend(class1, class2) {
    Object.setPrototypeOf(class1.prototype, class2.prototype);
}

// function extend(class1, class2) {
//     class1.prototype.__proto__ = class2.prototype;
// }

class A {
    sayHello() {
        console.log('Hello');
    }
}
class B {}

// Делает B наследником A
extend(B, A);

const a = new A();
const b = new B();

b.sayHello(); // Hello // Работает метод, определённый у класса А.
console.log(Object.getPrototypeOf(b)); // A
console.log(a); // __proto__ : Object
console.log(b); // __proto__ : A
