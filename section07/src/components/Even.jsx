import { useEffect } from "react";

const Even = () => {
    useEffect(() => {
        // 클린업, 정리함수
        return () => {
            console.log('Even Component Unmounted');
        };
    }, []);
    return <div>짝수입니다.</div>;
};

export default Even;