// Аналог метода Promise.all()
function all(iterable) {
    // Проверяет аргумент, является ли он итерируемым (массив, объект, строка и тд)
    if (typeof iterable[Symbol.iterator] !== 'function') {
        console.log('Нужен итерируемый объект');
    } else {
        // Создаётся промис
        const resultPromise = new Promise((resolve, reject) => {
            // Создаётся результирующий массив
            const result = [];
            // Если объект пустой, то в резульат промиса отправляется пустой массив
            if (iterable.length == 0) {
                resolve(result);
            }

            iterable.forEach((promise, i) => {
                // Если текущий элемент является промисом
                if (Object.getPrototypeOf(promise) === Promise.prototype) {
                    // Успех промиса отправляется в результирующий массив с таким же индексом
                    // В случае ошибки обрабатывается ошибка
                    promise
                        .then((res) => {
                            result[i] = res;
                        })
                        .catch((err) => {
                            reject(err);
                        });
                } else {
                    // Если элемент не промис, просто записывается в результирующий массив
                    result[i] = promise;
                }
            });

            // Таймаут гарантирует, что сначала выполнится код выше
            setTimeout(() => {
                resolve(result);
            }, 0);
        });

        // Возвращается промис
        return resultPromise;
    }
}

const promises = [
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve, reject) => reject(new Error('error'))),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000)),
    4,
    'aasd',
];

const res = all(promises);
console.log(res); // Uncaught (in promise) Error: error
