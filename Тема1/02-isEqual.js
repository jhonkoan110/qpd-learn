const a = {
    a: 2,
    foo: function () {
        console.log(12);
    },
    b: 3,
};

const b = {
    b: 3,
    a: 2,
    foo: function () {
        console.log(12);
    },
};

console.log('isEqual:');
console.log(isEqual(a, b)); //true

function isEqual(a, b) {
    const pull = new Map();

    const result = isEqualMaster(a, b);

    pull.clear;

    return result;

    function isEqualMaster(a, b) {
        if (pull.has(a)) {
            return pull.get(a) === b;
        }
        const typeA = getTypeOf(a);
        const typeB = getTypeOf(b);

        //Проверка на равенство типов данных
        if (typeA !== typeB) {
            return false;
        }

        // Проверка на NaN, если тип данных Number
        if (isPrimitiveType(typeA)) {
            if (typeA === 'Number') {
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

        pull.set(a, b);
        pull.set(b, a);

        // Проверки на примитивы и на одинаковый тип данных прошли
        if (typeA === 'Function') {
            if (a.toString() !== b.toString()) {
                return false;
            }
        }

        // Елси массивы с разной длиной => false
        if (typeA === 'Array') {
            if (a.length !== b.length) {
                return false;
            }

            // Сравниваются оба массива, если хоть одно значение не совпало => false
            for (let i = 0; i < a.length; i++) {
                if (isEqualMaster(a[i], b[i])) {
                    return false;
                }
            }

            return true;
        } else {
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
                if (isEqualMaster(a[key], b[key]) === false) {
                    return false;
                }
            }

            // Все проверки прошли
            return true;
        }
    }

    // Получение из строчки например [object Number] слова Number
    // в зависимости от типа данных аргумента x
    function getTypeOf(x) {
        return Object.prototype.toString.call(x).slice(8, -1);
    }

    // Проверка на примитивный тип
    function isPrimitiveType(x) {
        return ['Null', 'Undefined', 'Number', 'String', 'Boolean', 'BigInt', 'Symbol'].includes(x);
    }
}

// isEqual(human1, human2) // => true
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const human1 = new Person('Кирилл', 25);
const human2 = new Person('Кирилл', 25);
