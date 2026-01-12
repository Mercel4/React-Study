// 1. 변수
let age;

age = 30;

// 2. 상수
const birth = "2009-04-04";

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1 변수는 $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2 숫자로 시작할 수 없다.
let name1;
let $1name;

// 3-3 예약어는 사용할 수 없다.
// let let; // SyntaxError: Unexpected token 'let'

// 4. 변수 명명 가이드
let salesCount = 1000;
let refundCount = 50;
let totalCount = salesCount - refundCount;