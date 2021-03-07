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
import GalaxyTapPortrait from '../../image/m_questions_GalaxyTapPortrait.png';
import iPadPortrait from '../../image/m_questions_iPadPortrait.png';
import iPadPro10Portrait from '../../image/m_questions_iPadPro10Portrait.png';
import iPadPro11Portrait from '../../image/m_questions_iPadPro11Portrait.png';
import iPadPro12Portrait from '../../image/m_questions_iPadPro12Portrait.png';
import BEAN from '../../image/JongBean.jpeg';
import HYUNA from '../../image/HYUNA.jpeg';
import DONGHYUN from '../../image/DONGHYUN.jpeg';
import JISOO from '../../image/JISOO.jpeg';
import HEAIN from '../../image/HEAIN.jpeg';
import GlobalFonts from "../fonts";

const ContributeImg = styled.div`
    background-image: url(${MainBack});
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;

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

    @media (device-width: 800px) and (device-height: 1280px) { 
        background-image: url(${GalaxyTapPortrait});
    }

    @media (device-width: 768px) and (device-height: 1024px) { 
        background-image: url(${iPadPortrait});
    }

    @media (device-width: 834px) and (device-height: 1112px) { 
        background-image: url(${iPadPro10Portrait});
    }

    @media (device-width: 834px) and (device-height: 1112px) { 
        background-image: url(${iPadPro10Portrait});
    }

    @media (device-width: 834px) and (device-height: 1194px) { 
        background-image: url(${iPadPro11Portrait});
    }

    @media (device-width: 1024px) and (device-height: 1366px) { 
        background-image: url(${iPadPro12Portrait});
    }
`;

const Container = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-self: center;
    flex-direction: row;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    flex-wrap : wrap;

    @media (min-width: 280px) and (max-width: 320px) {
        width: 270px;
    }

    @media (min-width: 325px) and (max-width: 414px) {
        width: 320px;
        height: 630px;
    } 

    @media (min-width: 428px) and (max-width: 500px) {
        width: 420px;
    }

    @media (min-width: 501px) and (max-width: 767px) {
        width: 600px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 760px;
    }
`;

const ContributeCard = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
    flex-direction: column;
    background-color: white;
    width: 220px;
    margin: 0px 10px 10px 0px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 4px 6px 0px -1px rgba(0,0,0,0.14);

    @media (min-width: 1900px) {
        width: 250px;
    }

    @media (min-width: 1280px) and (max-width: 1366px) {
        width: 200px;
    }

    @media (min-width: 280px) and (max-width: 320px) {
        width: 130px;
        height: 170px;
        padding: 0px;
        margin: 0px 5px 5px 0px;
    }

    @media (min-width: 325px) and (max-width: 414px) {
        width: 155px;
        height: 200px;
        padding: 0px;
        margin: 0px 5px 10px 0px;
    } 

    @media (min-width: 428px) and (max-width: 500px) {
        width: 185px;
        height: 280px;
        padding: 0px;
    }
`;

const Picture = styled.div`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    align-self: center;
    width: 120px;
    height: 120px;
    border-radius: 100px;
    box-shadow: 4px 6px 0px -1px rgba(0,0,0,0.14);

    @media (min-width: 1280px) and (max-width: 1366px) {
        width: 100px;
        height: 100px;
    }

    @media (min-width: 1024px) and (max-width: 1200px) {
        width: 90px;
        height: 90px;
    }

    @media (min-width: 280px) and (max-width: 320px) {
        width: 55px;
        height: 55px;
    }

    @media (min-width: 325px) and (max-width: 414px) {
        width: 75px;
        height: 75px;
    } 
`;

const ContributeName = styled.div`
    font-family: 'Recipekorea';
    font-size: 20px;
    text-align: center;
    color: #00222a;
    margin-top: 25px;

    @media (min-width: 280px) and (max-width: 320px) {
       font-size: 15px;
       margin-top: 10px;
    }

    @media (min-width: 1024px) and (max-width: 1200px) {
        font-size: 17px;
    }

    @media (min-width: 325px) and (max-width: 414px) {
        font-size: 15px;
        margin-top: 15px;
    } 
`;

const ContributeProfileOne = styled.div`
    font-family: 'Recipekorea';
    font-size: 15px;
    text-align: center;
    color: #1C515A;
    margin-top: 15px;
    margin-bottom: 10px;

    @media (min-width: 1280px) and (max-width: 1366px) {
        font-size: 11px;
    }

    @media (min-width: 1024px) and (max-width: 1200px) {
        font-size: 12px;
    }

    @media (min-width: 280px) and (max-width: 320px) {
        font-size: 10px;
        margin-top: 5px;
        margin-bottom: 10px;
    }

    @media (min-width: 325px) and (max-width: 414px) {
        font-size: 10px;
        margin-top: 10px;
    } 

    @media (min-width: 428px) and (max-width: 500px) {
        font-size: 12px;
        margin-top: 10px;
    }
`;

const ContributeProfileTwo = styled.div`
    font-family: 'Recipekorea';
    font-size: 15px;
    text-align: center;
    color: #64939B;
    margin-top: 10px;

    @media (min-width: 1280px) and (max-width: 1366px) {
        font-size: 11px;
    }

    @media (min-width: 1024px) and (max-width: 1200px) {
        font-size: 12px;
    }

    @media (min-width: 280px) and (max-width: 320px) {
        font-size: 10px;
        margin-top: 6px;
    }

    @media (min-width: 325px) and (max-width: 414px) {
        font-size: 10px;
        margin-top: 10px;
    } 

    @media (min-width: 428px) and (max-width: 500px) {
        font-size: 12px;
        margin-top: 10px;
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
                    <ContributeProfileOne>Back-End</ContributeProfileOne>
                    <ContributeProfileTwo>eyerun95@ajou.ac.kr</ContributeProfileTwo>
                    <ContributeProfileTwo>github.com/JayAnCode</ContributeProfileTwo>
                </ContributeCard>
                <ContributeCard>
                    <Picture style={{backgroundImage: `url(${DONGHYUN})`}}/>
                    <ContributeName>이동헌</ContributeName>
                    <ContributeProfileOne>Back-End</ContributeProfileOne>
                    <ContributeProfileTwo>opdshe@gmail.com</ContributeProfileTwo>
                    <ContributeProfileTwo>github.com/opdshe</ContributeProfileTwo>
                </ContributeCard>
                <ContributeCard>
                    <Picture style={{backgroundImage: `url(${HEAIN})`}}/>
                    <ContributeName>이해인</ContributeName>
                    <ContributeProfileOne>Back-End</ContributeProfileOne>
                    <ContributeProfileTwo>odong2@ajou.ac.kr</ContributeProfileTwo>
                    <ContributeProfileTwo>github.com/maetdori</ContributeProfileTwo>
                </ContributeCard>
                <ContributeCard>
                    <Picture style={{backgroundImage: `url(${BEAN})`}}/>
                    <ContributeName>김종빈</ContributeName>
                    <ContributeProfileOne>Front-End</ContributeProfileOne>
                    <ContributeProfileTwo>whddkrak@gmail.com</ContributeProfileTwo>
                    <ContributeProfileTwo>github.com/Beaneee</ContributeProfileTwo>
                </ContributeCard>
                <ContributeCard>
                    <Picture style={{backgroundImage: `url(${HYUNA})`}}/>
                    <ContributeName>백현아</ContributeName>
                    <ContributeProfileOne>Designer</ContributeProfileOne>
                    <ContributeProfileTwo>line100@ajou.ac.kr</ContributeProfileTwo>
                    <ContributeProfileTwo>blog.naver.com/100_line</ContributeProfileTwo>
                </ContributeCard>
            </Container>
        </ContributeImg>
    )
}

export default Contribute;