import "./Main.css";

// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다
// -> 중괄호 안에 중괄호 불가능
// 2. 숫자, 문자열, 배열 값만 랜더링 가능
// -> true, false, null, undefined는 랜더링 불가능
// 3. 모든 태그는 닫혀있어야 한다
// 4. 최상위 태그는 하나여야 한다

const Main = () => {
    const user = {
        name : '홍길동',
        isLogined : true
    };

    if (user.isLogined) {
        return <div className="logout">로그아웃</div>;
    } else {
        return <div>로그인</div>;
    }

    // return ( <>
    //         {user.isLogined ? <div>로그아웃</div> : <div>로그인</div>}
    //     </>
    // );
};

export default Main;