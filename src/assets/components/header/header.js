import "./header.css"

const HeaderComponent = (props) => {
    return (
        <header>
            <img src={props.data.image} alt="메달이미지" />
            <h1>타이틀입니다.</h1>
            <p>리액트 컴포넌트를 만들고 활용해봅시다.</p>
        </header>
    );
}

export default HeaderComponent;