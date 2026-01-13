// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [a, b, c] = arr;

// 2. 객체의 구조 분해 할당

let person = {
    name: 'Alice',
    age: 30,
    hobby: 'reading'
}

let {
    age = myAge,
    hobby,
    extra = 'default value'
} = person;

// 3. 함수 매개변수의 구조 분해 할당

const func = ({name, age, hobby, extra}) => {
    console.log(name, age, hobby, extra);
};