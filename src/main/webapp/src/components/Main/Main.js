import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import MainBack from '../../image/main_bg.png';
import MainMBack from '../../image/m_main_bg.png';
import MainFold from '../../image/m_main_galaxy_fold.png';
import MainS8 from '../../image/m_main_galaxy_S8.png';
import MainS10 from '../../image/m_main_galaxy_S10.png';
import Main169 from '../../image/m_main_galaxy169.png';
import MainTap from '../../image/m_main_galaxytab10.png';
import MainiPad from '../../image/m_main_iPad.png';
import MainiPadPro10 from '../../image/m_main_iPadPro10.png';
import MainiPadPro11 from '../../image/m_main_iPadPro11.png';
import MainiPadPro12 from '../../image/m_main_iPadPro12.png';
import MainiPhone11Pro from '../../image/m_main_iPhone11Pro.png';
import MainiPhone12ProMax from '../../image/m_main_iPhone12Pro_Max.png';
import MainiPhone12Pro from '../../image/m_main_iPhone12Pro.png';
import MainiPhone678Plus from '../../image/m_main_iPhone678Plus.png';
import MainiPhone678SE from '../../image/m_main_iPhone678SE.png';
import MainiPhoneXR from '../../image/m_main_iPhoneXR.png';
import GalaxyTapPortrait from '../../image/m_main_GalaxyTapPortrait.png';
import iPadPortrait from '../../image/m_main_iPadPortrait.png';
import iPadPro10Portrait from '../../image/m_main_iPadPro10Portrait.png';
import iPadPro11Portrait from '../../image/m_main_iPadPro11Portrait.png';
import iPadPro12Portrait from '../../image/m_main_iPadPro12Portrait.png';
import MainWeb1366 from '../../image/m_main_web1366.png';
import GlobalFonts from "../fonts";


const MainImage = styled.div`
    background-image: url(${MainBack});
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    position: fixed;

    @media only screen and (max-width: 500px) {
        background-image: url(${MainMBack});
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

const TextContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-self: center;
    flex-direction: column;
    left: 50%;
    top: 48%;
    transform: translate(-50%, -50%);
`;

const HeaderText = styled.div`
    font-family: 'DAONE';
    font-size: 20px;
    color: white;
    text-align: center; 

    @media (min-width: 1900px) {
        font-size: 30px;
    }   

    @media (min-width: 280px) and (max-width: 320px) {
        font-size: 15px;
    } 
  
`;

const WhiteText = styled.div`
    font-family: 'SANDOLL';
    font-size: 80px;
    color: white;
    text-shadow: 4px 4px #29879599;
    letter-spacing: -0.4px;
    text-align: center;
    padding-left: 20px;

    @media (min-width: 1900px) {
        font-size: 110px;
        padding-left: 50px;
    }

    @media (min-width: 280px) and (max-width: 320px) {
        font-size: 50px;
        padding-left: 10px;
    } 

    @media (min-width: 325px) and (max-width: 414px) {
        font-size: 70px;
    } 
`;

const YellowText = styled.div`
    font-family: 'SANDOLL';
    font-size: 100px;
    color: #FFFF00;
    text-shadow: 4px 4px #29879599;
    letter-spacing: -0.51px;
    margin-bottom: 15px;

    @media (min-width: 1900px) {
        font-size: 130px;
    }

    @media (max-width: 320px) {
        font-size: 70px;
    } 

    @media (min-width: 325px) and (max-width: 414px) {
        font-size: 85px;
    } 
`;

const NewbieCount = styled.p`
    text-decoration: none;
    width: 100%;
    text-align: center;
    color: white;
    font-family: 'KoPub Dotum';
    font-size: 18px;
    margin-bottom: 10px;

    @media (min-width: 1900px) {
        font-size: 25px;
    }

    @media (min-width: 280px) and (max-width: 320px) {
        font-size: 12px;
    } 

    @media (min-width: 325px) and (max-width: 414px) {
        font-size: 15px;
    }
`;

const MainButton = styled.button`
    font-size: 35px;
    font-family: "ELAND";
    text-align: center;
    text-decoration: none;
    border: none;
    width: 370px;
    height: 70px;
    border-radius: 35px;
    cursor: pointer;
    color: #01333D;
    background-color: white;
    
    &:hover {
        border: 5px solid white;
        background-color: rgb(81,138,247);
        color: white;
    }

    &:active {
        outline: none;
    }

    &:visited {
        outline: none;
    }

    &:focus {
        outline:none;
    }

    @media (min-width: 1900px) {
        width: 470px;
        height: 80px;
        font-size: 45px;
        border-radius: 45px;
    }

    @media (min-width: 280px) and (max-width: 320px) {
        width: 270px;
        height: 50px;
        font-size: 25px;
    } 

    @media (min-width: 325px) and (max-width: 414px) {
        font-size: 25px;
        width: 340px;
        height: 65px;
    }
`;

const Contribute = styled.div`
    font-family: 'ELAND';
    font-size: 15px;
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50%);    
    text-align: center;
    color: #1C515A;
    margin-top: 15px; 

    &:link{
        color: #1C515A;
    }
    
    &:visited{
        color: #1C515A;
        outline: none;
    }

    &:active {
        outline: none;
    }

    @media (min-width: 1900px) {
        font-size: 17px;
    }

    @media (max-width: 414px) {
        margin-top: 25px;
    } 
`;


function Main(props) {
    const [counts, setCounts] = useState(null);
    const [error, setError] = useState(false);

    const fetchCounts = async () => {
        try{
            setError(null);
            setCounts(null);
            const getCounts = await axios.get('http://localhost:8080/index')
            setCounts(getCounts.data);
        } catch(e) {
            setError(e)
        }
    }

    useEffect(() => {
        fetchCounts();
    }, [])

    return (
    <MainImage>
        <GlobalFonts/>
        <TextContainer>
            <HeaderText>내가 즐기게 될 캠퍼스 라이프는?</HeaderText>
            <WhiteText>슬기로운</WhiteText>
            <YellowText>대학생활</YellowText>
            <NewbieCount>현재 <b>{counts}명의 새내기</b>가 입학했어요</NewbieCount>
            <Link to = "/college" >
                <MainButton>대학교 입학하기</MainButton>
            </Link>
            <Link to = "/contribute" >
                <Contribute>@Contributors</Contribute>
            </Link>
        </TextContainer>
    </MainImage>
    )
}

export default Main;
