// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다
// => 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주느 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2); // [4, 1, 2, 3, 5, 6]

let obj1 = {
    a: 1,
    b: 2
};

let obj2 = {
    c: 3,
    ...obj1,
    d: 4
};

function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
}

funcA(...arr1); // 1 2 3

// 2. Rest 매개변수
// -> Rest : 나머지, 남은

function funcB(one, two, ...rest) { // ...rest 뒤에 다른 매개변수는 올 수 없음
    console.log(rest); // [1, 2, 3]
}

funcB(...arr1);