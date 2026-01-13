// 1. Falsy 한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 2. Truthy 한 값
// -> 7가지 Falsy 한 값을 제외한 모든 값
let t1 = "hello";
let t2 = 42;
let t3 = -42;
let t4 = {};
let t5 = [];

// 3. 활용 사례
function printName(person) {
    if (!person) {
        console.log("이름이 없습니다.");
        return;
    }
    console.log(person.name);
}

let person = {name : "Alice"};
printName(person); // TypeError: Cannot read properties of undefined (reading 'name')