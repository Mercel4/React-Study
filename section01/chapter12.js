// 1. 함수 표현식

function funcA() {
    // console.log("funcA");
}

let varA = funcA;
varA();

// 선언식이 아님. -> 함수이름으로 호출 불가. 이름 생략 가능 -> 익명함수
let varB = function () {
    // console.log("funcB");
};

varB();

// 2. 화살표 함수
let varC = (value) => {
    console.log(value)
    return value + 1
};

console.log(varC(10));