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

class ConstructorError extends Error {
    constructor(message) {
        super(message);

        this.name = 'ConstructorError';
    }
}

function createClass(options) {
    // С помощью деструктуризации из options берётся constructor
    // И все оставшиеся методы, которые есть в options
    const { constructor, ...methods } = options;

    return function () {
        // Проверка на вызов со словом new
        try {
            if (!new.target) {
                throw new ConstructorError('Функция вызвана без ключевого слова "new"');
            }
        } catch (e) {
            console.log(e.name);
            console.log(e.message);
        }

        // Вызывается функция-контруктор с привязанным контекстом
        // arguments - любое кол-во аргументов, которые попадают в constructor
        constructor.apply(this, arguments);
        // Также можно записать
        // constructor.call(this, ...arguments);

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
