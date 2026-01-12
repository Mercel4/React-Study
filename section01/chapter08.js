// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // 10
let var5 = var1 ?? var3; // 20
let var6 = var2 ?? var3; // 10

let userName  = "An JaeMin";
let userNickName = "Winterlood";

let displayName = userName ?? userNickName;

// 2. typeof 연산자
// -> 값의 타입을 문자열로 변환하는 기능

let var7 = 1;
var7 = "Hello";

let t1 = typeof var7; // "string"

// 3. 삼향 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식 ? 참일 때 값 : 거짓일 때 값
let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀" 저장
let res = var8 % 2 === 0 ? "짝" : "홀";