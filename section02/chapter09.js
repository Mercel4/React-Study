// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링 하여 새로운 배열로 변환

let arr1 = [
    {name : "apple", type : "fruit"},
    {name : "carrot", type : "vegetable"},
    {name : "banana", type : "fruit"},
    {name : "broccoli", type : "vegetable"}
]

const tennisPeople = arr1.filter((itme) => {
    if (itme.type === "fruit") return true;
});

console.log(tennisPeople); // [ { name: 'apple', type: 'fruit' }, { name: 'banana', type: 'fruit' } ]

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 변환
let arr2 = [1, 2, 3];
const mapResult = arr2.map((item, idx, arr) => {
    return item * 2;
});

let names = arr1.map((item) => item.name);
// console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "c", "a"];
arr3.sort((a, b) => {
    if (a > b) return +1;
    else if (a < b) return -1;
    else return 0;
});
// console.log(arr3); // [ 'a', 'b', 'c' ]


// 4. toSorted
// 정렬됨 새로운 배열을 반환하는 메서드
let arr5 = ["b", "c", "a"];
const sorted = arr5.toSorted();

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 변환하는 그런 메서드
let arr6 = ['hi', 'my', 'name', 'is', 'jaemin'];
const joined = arr6.join(' ');
console.log(joined); // hi my name is jaemin