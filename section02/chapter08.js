// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 특정 동작을 수행하는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
    // console.log(idx, item * 2);
});

let doubleArr = [];
arr1.forEach((item) => {
    doubleArr.push(item * 2);
});

// console.log(doubleArr); // [2, 4, 6]

// 2. includes
// 배열의 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];
arr2.includes(3); // true

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2); // 1

// 4. findIndex
// 모든 요소를 순회하면서, 클릭함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findIndex = arr4.findIndex(function (item) {
    if (item % 2 !== 0) return true;
});

console.log(findIndex); // 0

// 5. find
// 모든 요소를 순회하면서 콜백 함수를 만족하는 요소를 찾는데, 요소를 그대로 벼환

let arr5 = [
    {name : 'Kataoka Rin'},
    {name : 'Miyamura Izumi'},
]

const finded = arr5.find((item) => item.name === 'Kataoka Rin'); // {name : 'Kataoka Rin'}
console.log(finded);