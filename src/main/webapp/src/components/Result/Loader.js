import React, {useState} from 'react'; 
import ReactLoading from 'react-loading';
import styled from 'styled-components';
import backImg from '../../image/Newbie_qu_background.png';
import GlobalFonts from "../fonts"


const LoadImg = styled.div`
    display: flex;
    background-image: url(${backImg});
    width: 100%;
    min-height: 100vh;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    justify-content: center;
    align-items: center;
`;

const LoadContainer = styled.div`
    position: flex;
    justify-content:center;
    align-items:center;
    margin-bottom: 200px;
`;

const LoadText = styled.h1`
    font-size: 30px;
    font-family: 'BMeU';
    text-align: center;
    color: white;
    text-shadow: 1px 1px gray;
`;

const message = ['성적 공고<br>기다리는중...', '여행 계획<br>세우는중...', '아르바이트<br>찾는중...'];

function Loader({type, color}) {
    const [id, setId] = useState(0);
    const msgToHtml = () => {
        setInterval(() => {
            setId(id +1);
        }, 1000)
        return {__html: message[id]};
    }
    return(
        <LoadImg >
            <GlobalFonts/>
            <LoadContainer>
                <ReactLoading type={type} color={color} height={150} width={150} />
                <LoadText dangerouslySetInnerHTML={msgToHtml()}></LoadText>
            </LoadContainer>
        </LoadImg>
    )
};

export default Loader;
