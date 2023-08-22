import styled from "styled-components";

const Blogheader = styled.header`
padding: 2rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 3rem;
text-align: center;
`
const Img = styled.img`
width: 7rem;
`
const H1 = styled.h1`
margin: 0;
font-size: 1.5rem;    
`
const P = styled.p`
margin: 0;
`


const HeaderComponent = (props) => {
    return (
        <Blogheader>
            <Img src={props.data.image} alt="일반페페" />
            <H1>블로그를 구성하는 컴포넌트</H1>
            <P>리액트 컴포넌트를 만들고 활용해봅시다.</P>
        </Blogheader>
    );
}

export default HeaderComponent;