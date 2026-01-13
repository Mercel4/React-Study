// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 프로퍼티 추가 (key: value)
let person = {
    name : 'John',
    age : 30,
    hobby : 'reading',
    job : "FE developer",
    extra : {},
    10 : 20,
    "like cat" : true
}

// 3. 객체 프로퍼티 다루는 방법
// 3-1. 프로퍼티 접근 (점 표기법, 괄호 표기법)
let name = person.name; // 점 표기법
console.log(name);

let age = person['age']; // 괄호 표기법

let property = 'hobby';
let hobby = person[property];

// 3-2. 프로퍼티 추가
person.job = 'fe developer';
person["favorite food"] = 'pizza';

// 3-3. 프로퍼티 수정
person.job = 'educator';
person['like cat'] = false;

// 3-4. 프로퍼티 삭제
delete person.extra;
delete person['favorite food'];

// 3-5. 존재 유무 확인
let result1 = 'name' in person; // true
let result2 = 'birth' in person; // false