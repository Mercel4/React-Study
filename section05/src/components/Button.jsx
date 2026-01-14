const Button = ({children, text, color = 'black'}) => {
    // 이벤트 객체
    const onCllickButton = (e) => {
        console.log(e);
        console.log(text);
    }

    return (
        <button
            onClick={onCllickButton}
            // onMouseEnter={onCllickButton}
        style={{color: color}}>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};

export default Button;