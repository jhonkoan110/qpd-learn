// Аналог метода Promise.all()
async function all(iterable) {
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
            let count = 0;
            iterable.forEach(async (promise, i) => {
                // Если текущий элемент является промисом
                if (Object.getPrototypeOf(promise) === Promise.prototype) {
                    // Успех промиса отправляется в результирующий массив с таким же индексом
                    // В случае ошибки обрабатывается ошибка
                    try {
                        const response = await promise;
                        result[i] = response;
                    } catch (error) {
                        count = count + 1;
                        reject(error);
                    }
                } else {
                    result[i] = promise;
                }
            });

            setTimeout(() => {
                resolve(result);
            }, 0);
        });

        return resultPromise;
    }
}

const promises = [
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve, reject) => reject(new Error('Моя ошибка'))),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000)),
];

const res = all(promises);
console.log(res);
