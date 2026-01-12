// 1. if 조건문 (if문)
let num = 9;

if (num >= 10) {
    // console.log("num은 10 이상입니다.");
    // console.log("조건이 참 입니다!");
} 
else if(num >= 5) {
    // console.log("num은 5 이상 10 미만입니다.");
    // console.log("두 번째 조건이 참 입니다!");
}
else if(num >= 3) {
//     console.log("num은 3 이상 5 미만입니다.");
//     console.log("세 번째 조건이 참 입니다!");
}
else {
    // console.log("num은 10 미만입니다.");
    // console.log("조건이 거짓 입니다!");
}

// 2. switch 조건문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할대 if문 보다 더 직관적이다.

let animal = "owl";

switch (animal) {
    case "cat" : console.log("고양이"); break;
    case "dog" : console.log("강아지"); break;
    case "bear" : console.log("곰"); break;
    case "lion" : console.log("사자"); break;
    default : console.log("해당하는 동물이 없습니다."); break;
}