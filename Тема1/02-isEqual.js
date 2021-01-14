const sdsds = function () {
    console.log(12);
};

const a = {
    a: 2,
    foo: sdsds,
    b: 3,
};

const b = {
    b: 3,
    a: 2,
    foo: sdsds,
};

console.log('isEqual:');
console.log(isEqual(a, b)); //true

function isEqual(a, b) {
    const typeA = getTypeOf(a);
    const typeB = getTypeOf(b);

    //Проверка на равенство типов данных
    if (typeA !== typeB) {
        return false;
    }

    // Проверка на NaN, если тип данных Number
    if (isPrimitiveType(typeA)) {
        if (typeA === 'number') {
            if (isNaN(a) || isNaN(b)) {
                return isNaN(a) && isNaN(b);
            }
        }
        return a === b;
    }

    // Если примитивы равны, также если массив или обьект ссылается сам на себя
    // Хранятся в одном месте в памяти
    if (a === b) {
        return true;
    }

    if (typeA === 'function') {
        if (a !== b) {
            return false;
        }
    }

    // Елси массивы с разной длиной => false
    if (typeA === 'object') {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);

        // Если обьекты, то сравнивается количество ключей в обоих
        if (keysA.length !== keysB.length) {
            return false;
        }

        // Если в обьекте B нет ключа из обьекта A => false
        for (const key of keysA) {
            if (!keysB.includes(key)) {
                return false;
            }
        }

        // Сравниваются значения обьектов под одинаковыми ключами
        for (const key of keysA) {
            if (isEqual(a[key], b[key]) === false) {
                return false;
            }
        }

        // Все проверки прошли
        return true;
    }
}

// Получение типа данных
function getTypeOf(x) {
    return typeof x;
}

// Проверка на примитивный тип
function isPrimitiveType(x) {
    return ['null', 'undefined', 'number', 'string', 'boolean', 'bigint', 'symbol'].includes(x);
}

// isEqual(human1, human2) // => true
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const human1 = new Person('Кирилл', 25);
const human2 = new Person('Кирилл', 25);
