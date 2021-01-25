'use strict';

// Написать функцию createClass, которая принимает объект
// вида { constructor, …properties, …methods }  и возвращает
// функцию, аналогичную классу ES6, созданному с таким же
// конструктором, методами и свойствами. При это сам
// синтаксис классов из ES6 использовать нельзя.

class ConstructorError extends Error {
    constructor(message) {
        super(message);

        this.name = 'ConstructorError';
    }
}

// Функция создания класса
function createClass(options) {
    // С помощью деструктуризации из options берётся constructor
    // И все оставшиеся методы, которые есть в options
    const { constructor, ...fields } = options;

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

        // В prototype этого класса записываются все функции из объекта fields,
        // который пришёл в аргументе createClass
        for (let key in fields) {
            // key - имя функции
            // fields[key] - сама функция(её значение)
            // Если поле является методом, то добавить его в прототип объекта
            if (typeof fields[key] === 'function') {
                Object.defineProperty(Object.getPrototypeOf(this), key, {
                    value: fields[key],
                    enumerable: false,
                });
                // Если нет, то добавить свойство обьекту
            } else {
                Object.defineProperty(this, key, {
                    value: fields[key],
                });
            }
        }
    };
}

// Создаётся класс User
const User = createClass({
    constructor(name, age) {
        this.name = name;
        this.age = age;
    },
    a: 23,
    gender: 'male',
    meow: function () {
        console.log(`Meow, I'm ${this.name}`);
    },
    sayHello() {
        console.log('hello');
    },
});

User.prototype.showNumber = function (num) {
    console.log(num);
};

// Экземпляр класса User
const user = new User('kirill', 25);
user.meow(); // Meow, I'm kirill
user.showNumber(22); // 22
