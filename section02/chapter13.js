function add10(num) {
    const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

        setTimeout(() => {

            if (typeof num === 'number') {
                resolve(num + 10);
            } else {
                reject('실패');
            }
        }, 2000);
    });

    return promise;
}

const p = add10(0);
p.then((result) => {
    console.log(result);
     return add10(result);
}).then((result) => {
    console.log(result);
    return add10(result);
}).then((result) => {
    console.log(result);
});