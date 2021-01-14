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

    // Проверка на равенство типов данных
    if (typeA !== typeB) {
        return false;
    }

    // Проверка на примитивы (ТУТ РЕЧЬ О ВСЕХ)
    if (isPrimitiveType(typeA)) {
        // Проверка на тип данных Number (ЭТО ТОЛЬКО ДЛЯ ЧИСЕЛ)
        if (typeA === 'number') {
            if (isNaN(a) || isNaN(b)) {
                return isNaN(a) && isNaN(b);
            }
            // Если проверка на NaN прошла, примитивы сравниваются
            return a === b;
        }

        // Проверка на равенство значений примитивов
        if (a === b) {
            return true;
        }
    }

    // Проверка на тип данных Function
    if (typeA === 'function') {
        if (a !== b) {
            return false;
        }
    }

    // Проверка на тип данных Object
    if (typeA === 'object') {
        // Проверка на null, тк typeof null === 'object
        if (a === null || b === null) {
            return a === b;
        }

        // Переменные для хранения ключей обьектов
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);

        // Сравнивается кол-во ключей у обоих объектов
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
    return ['undefined', 'number', 'string', 'boolean', 'bigint', 'symbol'].includes(x);
}
