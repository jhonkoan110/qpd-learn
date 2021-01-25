'use strict';

function Calculator(startVal) {
    try {
        // Если функция Calculator была вызывана без ключевого слова 'new'
        // или в неё передали не число, выбрасывается ошибка
        if (!new.target || !checkVal(startVal)) {
            throw new UserException(
                'Функция должна быть вызвана с оператором new, а аргументом ф-и должно быть число',
            );
        }
    } catch (e) {
        console.log(e.name);
        console.log(e.message);
    }

    // Массив всего выражения со стартовым значением
    this.state = [startVal];

    // Массив операций
    this.operations = ['+', '-', '*', '/'];

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

    // Проводит проверку на нечисловое значение
    // Добавляет в главный массив(this.state) знак операции и число
    // Знак операции берёт из массива знаков операций
    const addToState = (op, val) => {
        if (checkVal(val)) {
            const opIndex = this.operations.indexOf(op);
            const opSymbol = this.operations[opIndex];
            this.state.push(opSymbol, val);
        } else {
            console.log('В аргументе должно быть число');
        }
    };

    // Метод умножения
    this.multiply = function (val) {
        addToState('*', val);
        return this;
    };
    // Метод деления
    this.divide = function (val) {
        addToState('/', val);
        return this;
    };
    // Метод сложения
    this.plus = function (val) {
        addToState('+', val);
        return this;
    };
    // Метод вычитания
    this.minus = function (val) {
        addToState('-', val);
        return this;
    };

    // Производит конкретную операцию над двумя операндами
    // Принимает в себя массив и знак операции
    function makeOperation(array, op) {
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
    }

    // Вычисление всего выражения
    // Пробегается в цикле по массиву выражения
    // Проверяет на знаки арифм. операций, начинает с умножения и деления
    // Заканчивает сложением и вычитанием
    this.calculate = function () {
        let i = 0;
        while (i < this.state.length) {
            // Если в массиве есть данная операция, вызывается ф-я
            // в которую передаётся массив и знак операции
            if (this.state.includes('*') || this.state.includes('/')) {
                const multiplyIndex = this.state.indexOf('*');
                const divideIndex = this.state.indexOf('/');
                // Если умножения в массиве нет, и есть деление, выполнить деление
                if (multiplyIndex === -1 && divideIndex !== -1) {
                    makeOperation(this.state, '/');
                    i = 0;
                    // Если деления в массиве нет, и есть умножение, выполнить умножение
                } else if (multiplyIndex !== -1 && divideIndex === -1) {
                    makeOperation(this.state, '*');
                    i = 0;
                    // Если есть и умножение и деление, выполнить ту операцию, которая идёт раньше
                } else if (multiplyIndex < divideIndex) {
                    makeOperation(this.state, '*');
                    i = 0;
                } else {
                    makeOperation(this.state, '/');
                    i = 0;
                }
                // Елси нет ни умножения, ни деления, перейти к вычитанию и сложнению
            } else {
                if (this.state.includes('+')) {
                    makeOperation(this.state, '+');
                    i = 0;
                }
                if (this.state.includes('-')) {
                    makeOperation(this.state, '-');
                    i = 0;
                }
            }

            i++;
        }
        return this.state[0];
    };
}

const calc = new Calculator(1);

calc.plus(2).multiply(3).plus(12).divide(2).divide(3).multiply(4);

console.log(calc.calculate());
