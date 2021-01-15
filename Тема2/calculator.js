'use strict';

function Calculator(startVal) {
    try {
        // Если функция Calculator была вызывана без ключевого слова 'new'
        // или в неё передали не число, выбрасывается ошибка
        if (
            !new.target ||
            typeof startVal !== 'number' ||
            (typeof startVal === 'number' && isNaN(startVal))
        ) {
            throw new UserException(
                'Функция должна быть вызвана с оператором new, а аргументом ф-и должно быть число',
            );
        }
    } catch (e) {
        console.log(e.name);
        console.log(e.message);
    }

    // Массив всего выражения
    this.state = [];
    // Стартовое значение всего выражения
    this.state[0] = startVal;
    // Массив операций
    this.operations = ['+', '-', '*', '/'];

    // Метод умножения. Принимает в себя число
    // Проводит проверку на нечисловое значение
    // Добавляет в главный массив(this.state) знак умножения и число
    // Знак умножения берёт из массива знаков операций. Следущие методы по аналогии.
    this.multiply = function (val) {
        if (checkVal(val)) {
            const opIndex = this.operations.indexOf('*');
            const op = this.operations[opIndex];
            this.state.push(op, val);
            return this;
        }
        return this;
    };
    // По аналогии
    this.divide = function (val) {
        if (checkVal(val)) {
            const opIndex = this.operations.indexOf('/');
            const op = this.operations[opIndex];
            this.state.push(op, val);
            return this;
        }
        return this;
    };
    // По аналогии
    this.plus = function (val) {
        if (checkVal(val)) {
            const opIndex = this.operations.indexOf('+');
            const op = this.operations[opIndex];
            this.state.push(op, val);
            return this;
        }
        return this;
    };
    // По аналогии
    this.minus = function (val) {
        if (checkVal(val)) {
            const opIndex = this.operations.indexOf('-');
            const op = this.operations[opIndex];
            this.state.push(op, val);
            return this;
        }
        return this;
    };

    // Производит конкретную операцию над двумя операндами
    // Принимает в себя массив и знак операции
    this.makeOperation = function (array, op) {
        // Находит в массиве индекс знака операции, например '*'
        const opIndex = array.indexOf(op);

        // Исходя из знака операции,
        switch (op) {
            // в элемент массива, который стоит перед знаком '*',
            // записывается результат умножения этого элемента и того, который стоит после знака '*',
            // затем из массива удаляется этот знак '*' и следующий за ним элемент
            case '*':
                array[opIndex - 1] = array[opIndex - 1] * array[opIndex + 1];
                array.splice(opIndex, 2);
                break;

            // По аналогии
            case '/': {
                array[opIndex - 1] = array[opIndex - 1] / array[opIndex + 1];
                array.splice(opIndex, 2);
                break;
            }
            // По аналогии
            case '+': {
                array[opIndex - 1] = array[opIndex - 1] + array[opIndex + 1];
                array.splice(opIndex, 2);
                break;
            }
            // По аналогии
            case '-': {
                array[opIndex - 1] = array[opIndex - 1] - array[opIndex + 1];
                array.splice(opIndex, 2);
                break;
            }

            default: {
                break;
            }
        }
    };

    // Вычисление всего выражения
    // Пробегается в цикле по массиву выражения
    // Проверяет на знаки арифм. операций, начинает с умножения и деления
    // Заканчивает сложением и вычитанием
    this.calculate = function () {
        for (let i = 0; i < this.state.length; i++) {
            // Если в массиве есть данная операция, вызывается ф-я
            // в которую передаётся массив и знак операции
            if (this.state.includes('*')) {
                makeOperation(this.state, '*');
                // В массиве может быть несколько знаков '*',
                // поэтому цикл пробегается по нему заново
                i = 0;
            }

            if (this.state.includes('/')) {
                makeOperation(this.state, '/');
                i = 0;
            }

            if (this.state.includes('+')) {
                makeOperation(this.state, '+');
                i = 0;
            }
            if (this.state.includes('-')) {
                makeOperation(this.state, '-');
                i = 0;
            }
        }

        return this;
    };
}

const calc = new Calculator(10);

console.log(calc.state);

// Проверка входящего значение на число и NaN
// Возвращает false, если val не число, либо если val = NaN
function checkVal(val) {
    if (typeof val !== 'number' || (typeof val === 'number' && isNaN(val))) {
        return false;
    }
    return true;
}

// Конструктор пользовательской ошибки, принимает в себя строку
// с сообщением ошибки
function UserException(message) {
    this.message = message;
    this.name = 'Исключение, определённое пользователем';
}
