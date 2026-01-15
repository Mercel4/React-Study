import {useState, useRef} from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });

    const countRef = useRef(0);
    const inputRef = useRef();

    console.log(input);

    const onChange = (e) => {
        countRef.current++;
        console.log("렌더링 수:", countRef.current);

        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
    }

    const onsubmit = () => {
        if(input.name === "") {
            // 이름을 입력하는 DOM 요소 포커스
            inputRef.current.focus();
        }
    };

    return (
        <div>

            <div>
            <input ref={inputRef} name="name" value={input.name} onChange={onChange} type="text" placeholder={"이름"} />
            </div>
            <div>
                <input name="birth" value={input.birth} onChange={onChange} type="date" />
                {input.birth && <span>생년월일 : {input.birth}</span>}
            </div>
            <div>
                <select name="country" value={input.country} onChange={onChange}>
                    <option value="">선택하세요</option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="jp">일본</option>
                    <option value="cn">중국</option>
                </select>
                {input.country && <div>선택한 국가: {input.country}</div>}
            </div>

            <div>
                <textarea name="bio" value={input.bio} onChange={onChange} id=""></textarea>
                {input.bio && <div>자기소개: {input.bio}</div>}
            </div>

            <button onClick={onsubmit}>제출</button>
        </div>
    );
};

export default Register;