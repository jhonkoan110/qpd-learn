function Calculator(startValue) {
    try {
        if (!new.target || (typeof startValue !== 'number' && isNaN(startValue))) {
            throw new UserException(
                'Функция должна быть вызвана с оператором new, а аргументом ф-и должно быть число',
            );
        }
    } catch (e) {
        console.log(e.name);
        console.log(e.message);
        return undefined;
    }

    this.startValue = String(startValue);

    this.plus = function (value) {
        this.startValue = `${this.startValue} + ${value}`;
        return this;
    };
    this.minus = function (value) {
        this.startValue = `${this.startValue} - ${value}`;
        return this;
    };
    this.multiply = function (value) {
        this.startValue = `${this.startValue} * ${value}`;
        return this;
    };
    this.divide = function (value) {
        this.startValue = `${this.startValue} / ${value}`;
        return this;
    };
    this.calculate = function () {
        this.startValue = eval(this.startValue);
        return this.startValue;
    };
}

function UserException(message) {
    this.message = message;
    this.name = 'Исключение, определённое пользователем';
}

const calc = new Calculator('12');
console.log(calc);
calc.plus(10).multiply(4);

console.log(calc);
console.log(calc.plus(5).divide(2));
console.log(calc.calculate());
