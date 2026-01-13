// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
// console.log(date1);
let date2 = new Date('2024-06-15T12:00:00');

// 2. 타임 스탬프
// 특정 시간이 '1970년 1월 1일 00:00:00 UTC'로부터 몇 밀리초가 지났는지를 나타내는 숫자
let ts1 = date1.getTime();
let date4 = new Date(ts1);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;

// 4. 시간 수정하기
date1.setFullYear(2025);
date1.setMonth(11); // 0~11
date1.setDate(25);
date1.setHours(15);
date1.setMinutes(30);
date1.setSeconds(45);

// 5. 시간을 여러 포멧으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString());