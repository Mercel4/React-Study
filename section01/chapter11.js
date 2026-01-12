// 함수

let area1 = getArea(5, 10);
console.log(area1); // 50

let area2 = getArea(7, 3);
console.log(area2); // 21

// 호이스팅
// -> 끌어올림

// 함수선언
function getArea(width, height) {
    function another() { // 중첩 함수
        console.log('This is an inner function.');
    }

    another();
    let area = width * height;

    return area;
}