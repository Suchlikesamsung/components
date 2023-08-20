import "./header.css"

const HeaderComponent = (props) => {
    return (
        <header>
            <img src={props.data.image} alt="일반페페" />
            <h1>블로그를 구성하는 컴포넌트</h1>
            <p>리액트 컴포넌트를 만들고 활용해봅시다.</p>
        </header>
    );
}

export default HeaderComponent;