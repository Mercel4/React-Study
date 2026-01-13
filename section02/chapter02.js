// 단락 평가 활용 사례

function printNames(person) {
    const name = person && person.name;
    console.log(name || '이름 없음');
}

printNames();
printNames({ name: '홍길동' });