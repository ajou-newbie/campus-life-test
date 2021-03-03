import React from "react";
import styled from 'styled-components';
import MobileBack from '../../image/m_question_bg.png';
import MobileBackw384 from '../../image/m_question_bg_w384.png';
import MobileBackh740 from '../../image/m_question_bg_h740.png';
import MobileBackw1280 from '../../image/question_bg_w1280.png';
import MobileBackw1024 from '../../image/m_question_bg_w1024.png';
import BEAN from '../../image/JongBean.jpeg';
import HYUNA from '../../image/HYUNA.jpeg';
import DONGHYUN from '../../image/DONGHYUN.jpeg';
import JISOO from '../../image/JISOO.jpeg';
import HEAIN from '../../image/HEAIN.jpeg';
import GlobalFonts from "../fonts";

const ContributeImg = styled.div`
    display: flex;
    background-image: url(${MobileBackw1280});
    width: 100%;
    min-height: 100vh;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 500px) {
        background-image: url(${MobileBack});
    }

    @media only screen and (max-width: 384px) {
        background-image: url(${MobileBackw384});
  }

    @media only screen and (min-height: 740px) {
        background-image: url(${MobileBackh740});
  }

    @media only screen and (min-width: 1024px) {
        background-image: url(${MobileBackw1024});
  }

    @media only screen and (min-width: 1280px) {
        background-image: url(${MobileBackw1280});
  }
`;

const Container = styled.div`
    display: flex;
    width: 70%;
    height: 85vh;
    flex-wrap : wrap;
    justify-content: center;

    @media (device-width: 360px) {
        width: 90%;
    }

    @media (device-width: 384px) and (device-height: 538px) {
        width: 100%;
    }

    @media (device-width: 1024px) { 
        width: 100%;
    }

    @media (device-width: 1112px) {
        width: 100%;
    }

    @media (device-width: 1194px) {
        width: 100%;
    }

    @media (device-width: 1366px) {
        width: 100%;
    }

    @media (device-width: 428px) {
        width: 100%;
    }

    @media (device-width: 390px) {
        width: 100%;
    }

    @media (device-width: 414px) { 
        width: 100%;
    }

    @media (device-width: 375px) {
        width: 100%;
    }

`;

const ContributeCard = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    width: 25%;
    height: 47%;
    background-color: white;
    margin: 0px 5px 0px 5px;
    border-radius: 10px;
    box-shadow: 4px 6px 0px -1px rgba(0,0,0,0.14);

    @media (device-width: 360px) {
        width: 46%;
        height: 30%;
    }

    @media (device-width: 384px) and (device-height: 538px) {
        width: 46%;
        height: 35%;
        margin-bottom: 5px;
    }

    @media (device-width: 428px) {
        width: 46%;
        height: 33%;
        margin-bottom: 15px;
    }

    @media (device-width: 390px) {
        width: 46%;
        height: 33%;
        margin-bottom: 15px;
    }

    @media (device-width: 414px) { 
        width: 46%;
        height: 33%;
        margin-bottom: 10px;
    }

    @media (device-width: 375px) {
        width: 46%;
        height: 33%;
        margin-bottom: 5px;
    }

    @media (device-width: 375px) and (device-height: 812px) { 
        width: 46%;
        height: 32%; 
    }

    @media (device-width: 414px) and (min-height: 896px) {
        height: 33%;
    }


`;

const Picture = styled.div`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    align-self: center;
    width: 45%;
    height: 40%;
    border-radius: 150px;
    box-shadow: 4px 6px 0px -1px rgba(0,0,0,0.14);
    margin-top: 15px;

    @media (device-width: 360px) {
        width: 45%;
        height: 35%;
    }

    @media (device-width: 384px) and (device-height: 538px) {
        width: 40%;
        height: 45%;
        margin-top: 8px;
    }

    @media (device-width: 428px) {
        width: 45%;
        height: 35%;
    }

    @media (device-width: 390px) {
        width: 45%;
        height: 35%;
    }

    @media (device-width: 414px) { 
        width: 40%;
        height: 35%;
    }

    @media (device-width: 375px) {
        width: 35%;
        height: 30%;
    }

    @media (device-width: 375px) and (device-height: 812px) { 
        width: 40%;
        height: 30%;
    }

    @media (device-width: 414px) and (min-height: 896px) {
        width: 45%;
        height: 35%;
    }

    @media (device-width: 1366px) and (min-height: 768px) {
        width: 37%;
        height: 40%;
    }

    @media (device-width: 1280px) { 
        width: 40%;
        height: 30%;
        margin-bottom: 10px;
    }

    @media (device-width: 360px) and (device-height: 640px) {
        width: 40%;
        height: 35%;
    }

    @media (device-width: 1366px) and (device-height:1024px) {
        width: 45%;
        height: 40%;
    }

    
`;

const ContributeName = styled.div`
    font-family: 'Recipekorea';
    font-size: 20px;
    align-self: center;
    margin-top: 20px;
    margin-bottom: 10px;
    color: #00222a;

    @media (device-width: 360px) {
        font-size: 15px;
        margin-top: 20px;
    }

    @media (device-width: 384px) and (device-height: 538px) {
        font-size: 10px;
        margin-top: 10px;
    }

    @media (device-width: 1024px) { 
        margin-top: 30px;
    }

    @media (device-width: 1112px) {
        margin-top: 30px;
    }

    @media (device-width: 1194px) {
        margin-top: 30px;
    }

    @media (device-width: 1366px) and (device-height:1024px){
        font-size: 25px;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    @media (device-width: 414px) { 
        font-size: 15px;
    }

    @media (device-width: 375px) {
        font-size: 15px;
    }

    @media (device-width: 375px) and (device-height: 812px) { 
       margin-bottom: 10px;
    }

    @media (device-width: 390px) {
        margin-bottom: 10px;
    }

    @media (device-width: 414px) and (min-height: 896px) {
        margin-bottom: 15px;
    }

    @media (device-width: 1280px) { 
        margin-bottom: 20px;
    }

    @media (device-width: 360px) and (device-height: 640px) {
       margin-top: 15px;
       margin-bottom: 5px;
    }
    
`;

const ContributeProfile = styled.div`
    font-family: 'Recipekorea';
    font-size: 15px;
    align-self: center;
    margin-top: 10px;
    color: #1C515A;

    @media (device-width: 360px) {
        font-size: 10px;
        margin-top: 5px;
    }

    @media (device-width: 384px) and (device-height: 538px) {
        font-size: 5px;
        margin-top: 4px;
    }

    @media (device-width: 1112px) {
        margin-top: 15px;
    }

    @media (device-width: 1194px) {
        margin-top: 15px;
    }

    @media (device-width: 1366px) and (device-height:1024px) {
        font-size: 20px;
        margin-top: 20px;
    }

    @media (device-width: 428px) {
        margin-top: 15px;
        font-size: 10px;
    }

    @media (device-width: 390px) {
        font-size: 12px;
    }

    @media (device-width: 414px) { 
        font-size: 10px;
    }

    @media (device-width: 375px) {
        font-size: 10px;
    }

    @media (device-width: 1366px) and (min-height: 768px) {
        font-size: 15px;
        margin-top: 9px;
    }

    @media (device-width: 1280px) { 
        font-size: 15px;
        margin-top: 15px;
    }
`;

function Contribute() {
    return (
        <ContributeImg>
            <GlobalFonts/>
            <Container>
                <ContributeCard>
                    <Picture style={{backgroundImage: `url(${JISOO})`}}/>
                    <ContributeName>안지수</ContributeName>
                    <ContributeProfile>Back-End</ContributeProfile>
                    <ContributeProfile>eyerun95@ajou.ac.kr</ContributeProfile>
                    <ContributeProfile>github.com/JayAnCode</ContributeProfile>
                </ContributeCard>
                <ContributeCard>
                    <Picture style={{backgroundImage: `url(${DONGHYUN})`}}/>
                    <ContributeName>이동헌</ContributeName>
                    <ContributeProfile>Back-End</ContributeProfile>
                    <ContributeProfile>opdshe@gmail.com</ContributeProfile>
                    <ContributeProfile>github.com/opdshe</ContributeProfile>
                </ContributeCard>
                <ContributeCard>
                    <Picture style={{backgroundImage: `url(${HEAIN})`}}/>
                    <ContributeName>이해인</ContributeName>
                    <ContributeProfile>Back-End</ContributeProfile>
                    <ContributeProfile>odong2@ajou.ac.kr</ContributeProfile>
                    <ContributeProfile>github.com/maetdori</ContributeProfile>
                </ContributeCard>
                <ContributeCard>
                    <Picture style={{backgroundImage: `url(${BEAN})`}}/>
                    <ContributeName>김종빈</ContributeName>
                    <ContributeProfile>Front-End</ContributeProfile>
                    <ContributeProfile>whddkrak@gmail.com</ContributeProfile>
                    <ContributeProfile>github.com/Beaneee</ContributeProfile>
                </ContributeCard>
                <ContributeCard>
                    <Picture style={{backgroundImage: `url(${HYUNA})`}}/>
                    <ContributeName>백현아</ContributeName>
                    <ContributeProfile>Designer</ContributeProfile>
                    <ContributeProfile>line100@ajou.ac.kr</ContributeProfile>
                </ContributeCard>
            </Container>
        </ContributeImg>
    )
}

export default Contribute;