// Аналог метода Promise.race()
function race(iterable) {
    // Проверяет аргумент, является ли он итерируемым (массив, объект, строка и тд)
    if (typeof iterable[Symbol.iterator] !== 'function') {
        console.log('Нужен итерируемый объект');
    } else {
        // Возаращается промис
        return new Promise((resolve, reject) => {
            // Если объект пустой, то он отправляется в результат промиса
            if (iterable.length == 0) {
                resolve(iterable);
            }

            iterable.forEach((promise) => {
                // Если текущий элемент является промисом
                if (Object.getPrototypeOf(promise) === Promise.prototype) {
                    // Елси успешен, то резолвится его результат
                    // Если с ошибкой, то реджектится ошибка
                    promise
                        .then((res) => {
                            resolve(res);
                        })
                        .catch((err) => {
                            reject(err);
                        });
                } else {
                    // Если элемент не промис, резолвится этот элемент
                    resolve(promise);
                }
            });
        });
    }
}

const promises2 = [
    new Promise((resolve, reject) => setTimeout(() => resolve(4), 1000)),
    new Promise((resolve, reject) => reject(new Error('error'))),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 2000)),
    4,
    'aasd',
];

const res2 = race(promises2);
// console.log(res2);
