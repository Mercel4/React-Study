// 6가지 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에서 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
arr1.push(4, 5, 6, 7);

// 2. pop
// 배열의 맨 뒤에서 요소를 제거 및 반환
let arr2 = [1, 2, 3];
arr2.pop(); // 3

// 3. shift
// 배열의 맨 앞에서 요소를 제거 및 반환
let arr3 = [1, 2, 3];
arr3.shift(); // 1

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
arr4.unshift(0); // [0, 1, 2, 3]

// 5. slice
// 마치 가위처럼. 배열의 특정 범위를 잘라내서 새로운 배열로 변환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2); // [3, 4, 5..]
let sliced2 = arr5.slice(-3); // [3, 4, 5]

// 6. contact
// 두 개 이상의 배열을 하나로 합쳐서 새로운 배열로 반환
let arr6_1 = [1, 2, 3];
let arr6_2 = [4, 5, 6];
let combined = arr6_1.concat(arr6_2); // [1, 2, 3, 4, 5, 6]