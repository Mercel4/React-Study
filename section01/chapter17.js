// 1. 배열 생성
let arrA = new Array() // 배열 생성자
let arrB = [] // 배열 리터럴 (권장)

let arrC = [1, 2, 3, true, 'Hello', null, undefined, { name: 'John' }, [10, 20]]

// 2. 배열 요소 접근
console.log(arrC[0]) // 1
console.log(arrC[4]) // 'Hello'
console.log(arrC[7].name) // 'John'
console.log(arrC[8][1]) // 20

arrC[0] = 100 // 요소 수정