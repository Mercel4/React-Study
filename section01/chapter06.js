// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는거

let num = 10;
let str = "20";

const result1 = num + str; // "1020" (숫자 10이 문자열 "20"으로 변환되어 연결됨)

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열을 -> 숫자
let str1 = "10";
let str1ToNum1 = Number(str1); // 10

let str2 = "10개";
let str2ToNum2 = parseInt(str2); // 10

// -> 숫자를 -> 문자열
let num2 = 20;
let num2ToStr = String(num2); // "20"

console.log(num2ToStr + "입니다"); // "20"