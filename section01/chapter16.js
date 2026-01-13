// 1. 상수 객체
const animal = {
    type : 'Dog',
    name : '뽀삐',
    color : 'white'
};

animal.age = 2; // 가능
animal.name = '초코'; // 가능
delete animal.color; // 가능

// 2. 메서드
// -> 값이 함수인 프로퍼티를 할당

const person = {
    name : '뽀삐',
    // 메서드 선언
    sayHi() {
        console.log("hi");
    }
}

person.sayHi(); // hi
person["sayHi"](); // hi