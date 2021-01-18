'use strict';

// function User(name) {
//     this.name = name;
// }

// User.prototype.sayHello = function () {
//     console.log(this.name);
// };

// const user = new User('kirill');

// user.sayHello();

// ===============================================

function createClass(options) {
    const { constructor, ...methods } = options;
    console.log(methods);

    return function () {
        // Вызывается функция-контруктор с привязанным контекстом
        // arguments - любое кол-во аргументов, которые попадают в constructor
        constructor.apply(this, arguments);

        // В prototype этого класса записываются все функции из объекта methods,
        // который пришёл в аргументе createClass
        for (let key in methods) {
            // key - имя функции
            // methods[key] - сама функция(её значение)
            Object.getPrototypeOf(this)[key] = methods[key];
        }
    };
}

const User = createClass({
    constructor(name, age) {
        this.name = name;
        this.age = age;
    },
    meow: function () {
        console.log(`Meow, I'm ${this.name}`);
    },
});

const user = new User('kirill', 25);
user.meow(); // Meow, I'm kirill

// ================================================

// const methods = [];

// function f1() {}
// function f2() {}
// function f3() {}

// methods.push(f1, f2, f3);

// function User() {}

// for (let i = 0; i < methods.length; i++) {
//     User.prototype[methods[i].name] = methods[i];
// }

// let user = new User();
