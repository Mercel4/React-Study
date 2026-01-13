// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
    let b = 2; // 지역 스코프
    console.log(a); 

    function funcB() {} // 조건문에는 지역 스코프가 적용되지 않음
}

funcA(); // 1

if (true) {
    let c = 1; // 지역 스코프
    
}

for (let i = 0; i < 3; i++) { // 지역 스코프
    let d = 1;
}

funcB(); // ReferenceError: funcB is not defined