import React from "react";
import styled from 'styled-components';
import MainBack from '../../image/m_question_bg_w1024.png';
import MobileBack from '../../image/m_question_bg.png';
import MainFold from '../../image/m_questions_galaxy_fold.png';
import MainS8 from '../../image/m_questions_galaxy_S8.png';
import MainS10 from '../../image/m_questions_galaxy_S10.png';
import Main169 from '../../image/m_questions_galaxy169.png';
import MainTap from '../../image/m_questions_galaxyTab.png';
import MainiPad from '../../image/m_questions_iPad.png';
import MainiPadPro10 from '../../image/m_questions_iPadPro10.png';
import MainiPadPro11 from '../../image/m_questions_iPadPro11.png';
import MainiPadPro12 from '../../image/m_questions_iPadPro12.png';
import MainiPhone11Pro from '../../image/m_questions_iPhone11Pro.png';
import MainiPhone12ProMax from '../../image/m_questions_iPhone12ProMax.png';
import MainiPhone12Pro from '../../image/m_questions_iPhone12Pro.png';
import MainiPhone678Plus from '../../image/m_questions_iPhone678Plus.png';
import MainiPhone678SE from '../../image/m_questions_iPhone678SE.png';
import MainiPhoneXR from '../../image/m_questions_iPhoneXR.png';
import MainWeb1366 from '../../image/m_questions_web1366.png';
import BEAN from '../../image/JongBean.jpeg';
import HYUNA from '../../image/HYUNA.jpeg';
import DONGHYUN from '../../image/DONGHYUN.jpeg';
import JISOO from '../../image/JISOO.jpeg';
import HEAIN from '../../image/HEAIN.jpeg';
import GlobalFonts from "../fonts";

const ContributeImg = styled.div`
    display: flex;
    background-image: url(${MainBack});
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 500px) {
        background-image: url(${MobileBack});
    }

    @media (device-width: 360px) and (device-height: 740px){ 
        background-image: url(${MainS8});
    }       

    @media (device-width: 360px) and (device-height: 760px){ 
        background-image: url(${MainS10});
    }  

    @media (device-width: 384px) and (device-height: 538px) { 
        background-image: url(${MainFold});
    }

    @media (device-width: 360px) and (device-height: 640px) { 
        background-image: url(${Main169});
    }

    @media (device-width: 414px) { 
        background-image: url(${MainiPhone678Plus});
    }

    @media (device-width: 375px) and (device-height: 812px) { 
        background-image: url(${MainiPhone11Pro});
    }

    @media (device-width: 375px) and (device-height: 667px) { 
        background-image: url(${MainiPhone678SE});
    }

    @media (device-width: 390px) { 
        background-image: url(${MainiPhone12Pro});
    }

    @media (device-width: 428px) { 
        background-image: url(${MainiPhone12ProMax});
    }

    @media (device-width: 414px) and (device-height: 896px) {
        background-image: url(${MainiPhoneXR});
    }

    @media (device-width: 1280px) and (device-height: 800px)  { 
        background-image: url(${MainTap});
    }

    @media (device-width: 1024px) { 
        background-image: url(${MainiPad});
    }

    @media (device-width: 1112px) { 
        background-image: url(${MainiPadPro10});
    }

    @media (device-width: 1194px) { 
        background-image: url(${MainiPadPro11});
    }

    @media (device-width: 1366px) and (device-height:1024px) { 
        background-image: url(${MainiPadPro12});
    }

    @media (device-width: 1366px) and (device-height:768px) { 
        background-image: url(${MainWeb1366});
    }
`;

const Container = styled.div`
    display: flex;
    width: 850px;
    height: 700px;
    flex-wrap : wrap;
    justify-content: center;
    margin-top: 10px;

    @media (device-width: 384px) and (device-height: 538px) {
        width: 380px;
        height: 530px;
    }

    @media (device-width: 360px) and (device-height: 640px) {
        width: 355px;
        height: 630px;
    }

    @media (device-width: 414px) and (device-height: 736px) {
        width: 410px;
        height: 720px;
    }

    @media (device-width: 375px) and (device-height: 667px) {
        width: 365px;
        height: 655px;
    }

    @media (device-width: 428px) {
        width: 420px;
        height: 900px;
    }

    @media (device-width: 390px) {
        width: 380px;
        height: 820px;
    }

    @media (device-width: 375px) and (device-height: 812px) { 
        width: 365px;
        height: 800px;
    }

    @media (device-width: 414px) and (device-height: 896px) { 
        width: 400px;
        height: 880px;
    }
`;

const ContributeCard = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    width: 260px;
    height: 330px;
    background-color: white;
    margin: 0px 5px 10px 5px;
    border-radius: 10px;
    box-shadow: 4px 6px 0px -1px rgba(0,0,0,0.14);

    @media (device-width: 360px) {
        width: 165px;
        height: 220px;
    }

    @media (device-width: 384px) and (device-height: 538px) {
        width: 170px;
        height: 165px;
    }

    @media (device-width: 360px) and (device-height: 640px) {
        width: 165px;
        height: 200px;
    }

    @media (device-width: 414px) and (device-height: 736px) {
        width: 190px;
        height: 225px;
    }

    @media (device-width: 375px) and (device-height: 667px) {
        width: 170px;
        height: 205px;
    }

    @media (device-width: 428px) {
        width: 195px;
        height: 275px;
    }

    @media (device-width: 390px) {
        width: 180px;
        height: 260px;
    }

    @media (device-width: 375px) and (device-height: 812px) { 
        width: 170px;
        height: 250px;
    }

    @media (device-width: 414px) and (device-height: 896px) { 
        width: 190px;
        height: 270px;
    }
`;

const Picture = styled.div`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    align-self: center;
    width: 110px;
    height: 750px;
    border-radius: 100px;
    box-shadow: 4px 6px 0px -1px rgba(0,0,0,0.14);
    margin-top: 15px;

    @media (device-width: 360px) {
        width: 80px;
        height: 750px;
    }

    @media (device-width: 384px) and (device-height: 538px) {
        width: 70px;
        height: 760px;
        margin-top: 10px;
    }

    @media (device-width: 360px) and (device-height: 640px) {
        width: 80px;
        height: 900px;
        margin-top: 10px;
    }

    @media (device-width: 414px) and (device-height: 736px) {
        width: 90px;
        height: 910px;
    }

    @media (device-width: 375px) and (device-height: 667px) {
        width: 80px;
        height: 850px;
        margin-top: 10px;
    }

    @media (device-width: 428px) {
        width: 110px;
        height: 950px;
    }

    @media (device-width: 390px) {
        width: 100px;
        height: 900px;
    }

    @media (device-width: 375px) and (device-height: 812px) { 
        width: 100px;
        height: 900px;
    }

    @media (device-width: 414px) and (device-height: 896px) { 
        width: 100px;
        height: 900px;
    }
`;

const ContributeName = styled.div`
    font-family: 'Recipekorea';
    font-size: 20px;
    text-align: center;
    color: #00222a;
    margin-top: 25px;

    @media (device-width: 360px) {
        font-size: 15px;
        margin-top: 20px;
    }

    @media (device-width: 384px) and (device-height: 538px) {
        font-size: 10px;
        margin-top: 10px;
    }

    @media (device-width: 414px) {
        font-size: 17px;
    }

    @media (device-width: 375px) and (device-height: 667px) {
        font-size: 16px;
    }

    @media (device-width: 390px) {
        font-size: 16px;
    }
`;

const ContributeProfile = styled.div`
    font-family: 'Recipekorea';
    font-size: 15px;
    text-align: center;
    color: #1C515A;

    @media (device-width: 360px) {
        font-size: 10px;
        margin-top: 5px;
    }

    @media (device-width: 384px) and (device-height: 538px) {
        font-size: 5px;
        margin-top: 4px;
    }

    @media (device-width: 414px) {
        font-size: 10px;
        margin-top: 4px;
    }

    @media (device-width: 375px) and (device-height: 667px) {
        font-size: 10px;
        margin-top: 5px;
    }

    @media (device-width: 428px) {
        font-size: 12px;
    }

    @media (device-width: 390px) {
        font-size: 12px;
    }

    @media (device-width: 375px) and (device-height: 812px) { 
       font-size: 12px;
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
                    <ContributeProfile>blog.naver.com/100_line</ContributeProfile>
                </ContributeCard>
            </Container>
        </ContributeImg>
    )
}

export default Contribute;