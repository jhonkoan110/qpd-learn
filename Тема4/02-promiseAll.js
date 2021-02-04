// Аналог метода Promise.all()
function all(iterable) {
    // Проверяет аргумент, является ли он итерируемым (массив, объект, строка и тд)
    if (typeof iterable[Symbol.iterator] !== 'function') {
        console.log('Нужен итерируемый объект');
    } else {
        // Создаётся промис
        const resultPromise = new Promise((resolve, reject) => {
            // Создаётся результирующий массив
            const result = new Array(iterable.length);

            // Если объект пустой, то в резульат промиса отправляется пустой массив
            if (iterable.length == 0) {
                resolve(result);
            }

            // Кол-во промисов, ожидающих проверку
            let pending = promises.length;

            promises.forEach((promise, i) => {
                // Если текущий элемент является промисом
                if (Object.getPrototypeOf(promise) === Promise.prototype) {
                    // Успех промиса отправляется в результирующий массив с таким же индексом
                    promise.then(
                        (res) => {
                            result[i] = res;
                            // Кол-во непроверенных промисов уменьшается на 1
                            pending -= 1;
                            // Если все сущности прошли проверку, резолвится результат
                            if (pending == 0) {
                                resolve(result);
                            }
                        },
                        // В случае ошибки реджектится ошибка
                        (error) => {
                            reject(error);
                        },
                    );
                } else {
                    // Не промис сразу записывается в результат
                    result[i] = promise;
                    // Кол-во непроверенных промисов уменьшается на 1
                    pending -= 1;
                    // Елси все сущности прошли проверку, резолвится результат
                    if (pending == 0) {
                        resolve(result);
                    }
                }
            });
        });

        return resultPromise;
    }
}

const promises = [
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error('error')), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000)),
    4,
    ';asdasd',
];

const res = all(promises);
console.log(res);
