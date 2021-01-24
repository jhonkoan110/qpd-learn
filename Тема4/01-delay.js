// Создаёт задержку перед выполнением
function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

// Задержка 3 сек
// delay(3000).then(() => console.log('delay = 3'));
