import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import MobileBack from '../../image/m_main_bg.png';
import MobileBackw384 from '../../image/m_main_bg_w384.png';
import MobileBackh740 from '../../image/m_main_bg_h740.png';
import MobileBackw1280 from '../../image/main_bg_w1280.png';
import MobileBackw1024 from '../../image/main_bg_w1024.png';
import IndexButton from '../../image/IndexButton.png';
import IndexButtonOnClick from '../../image/IndexButtonOnClick.png';
import GlobalFonts from "../fonts";


const MainImage = styled.div`
    background-image: url(${MobileBackw1280});
    margin: 0;
    width: 100vw;
    height: 100vh;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;

    @media only screen and (max-width: 500px) {
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

const TextContainer = styled.div`
    width: 100vw;
    height: auto;
    padding: 175px 0px 0px 0px;

    
    @media (device-width: 360px) { 
        padding: 210px 0px 0px 0px;
    }

    @media (device-width: 384px) and (device-height: 538px) { 
        padding: 135px 0px 0px 0px;
    }

    @media (device-width: 360px) and (device-height: 640px) { 
        padding: 150px 0px 0px 0px;
    }

    @media (device-width: 414px) { 
        padding: 200px 0px 0px 0px;
    }

    @media (device-width: 375px) { 
        padding: 150px 0px 0px 0px;
    }

    @media (device-width: 390px) { 
        padding: 250px 0px 0px 0px;
    }

    @media (device-width: 428px) { 
        padding: 270px 0px 0px 0px;
    }

    @media (device-width: 375px) and (min-height: 812px) { 
        padding: 235px 0px 0px 0px;
    }

    @media (device-width: 414px) and (min-height: 896px) {
        padding: 255px 10px 0px 0px;
    }

    @media (device-width: 1280px) { 
        padding: 200px 10px 0px 0px;
    }

    @media (device-width: 1024px) { 
        padding: 190px 10px 0px 0px;
    }

    @media (device-width: 1112px) { 
        padding: 215px 0px 0px 0px;
    }

    @media (device-width: 1194px) { 
        padding: 215px 0px 0px 0px;
    }

    @media (device-width: 1366px) { 
        padding: 270px 0px 0px 0px;
    }

    @media (device-width: 1366px) and (device-height: 768px) { 
        padding: 200px 0px 0px 0px;
    }

`;

const HeaderText = styled.div`
    font-family: 'DAONE';
    font-size: 20px;
    color: white;
    padding: 0px 0px 5px 0px;
    text-align: center;

  
    @media (device-width: 360px) {
        font-size: 15px;
    }

    @media (device-width: 384px) and (device-height: 538px) { 
        font-size: 15px;
    }

    @media (device-width: 414px) { 
        font-size: 20px;
    }

    @media (device-width: 375px) { 
        font-size: 20px;
    }

    @media (device-width: 390px) { 
        font-size: 20px;
    }

    @media (device-width: 428px) { 
        font-size: 20px;
    }

    @media (device-width: 1366px) { 
        font-size: 25px;
    }

    @media (device-width: 1366px) and (device-height: 768px) { 
        font-size: 20px;
    }
`;

const WhiteText = styled.div`
    font-family: 'SANDOLL';
    font-size: 79px;
    color: white;
    padding: 0px 0px 0px 30px;
    text-shadow: 4px 4px #29879599;
    letter-spacing: -0.4px;
    text-align: center;

  
    @media (device-width: 360px) {
        font-size: 55px;
        padding: 0px 0px 0px 0px;
    }

    @media (device-width: 384px) and (device-height: 538px) { 
        font-size: 50px;
        padding: 0px 0px 0px 20px;
    }

    @media (device-width: 414px) { 
        font-size: 55px;
        padding: 0px 0px 0px 20px;
    }

    @media (device-width: 375px) { 
       font-size: 55px;
       padding: 0px 0px 0px 20px;
    }

    @media (device-width: 390px) { 
        font-size: 55px;
        padding: 0px 0px 0px 20px;
    }

    @media (device-width: 428px) { 
        font-size: 65px;
        padding: 0px 0px 0px 20px;
    }

    @media (device-width: 414px) and (min-height: 896px) { 
        font-size: 65px;
        padding: 0px 0px 0px 20px;
    }

    @media (device-width: 1366px) {
        font-size: 95px;
    }

    @media (device-width: 1366px) and (device-height: 768px) { 
        font-size: 80px;
    }
   
`;

const YellowText = styled.div`
    font-family: 'SANDOLL';
    font-size: 102px;
    color: #FFFF00;
    text-shadow: 4px 4px #29879599;
    letter-spacing: -0.51px;

    @media (device-width: 360px) {
        font-size: 80px;
    }

    @media (device-width: 384px) and (device-height: 538px) { 
        font-size: 68px;
    }

    @media (device-width: 414px) { 
        font-size: 80px;
    }

    @media (device-width: 375px) { 
       font-size: 80px;
    }

    @media (device-width: 390px) { 
        font-size: 85px;
    }

    @media (device-width: 428px) { 
        font-size: 95px;
    }

    @media (device-width: 414px) and (min-height: 896px) { 
        font-size: 90px;
    }

    @media (device-width: 1366px) { 
        font-size: 125px;
    }

    @media (device-width: 1366px) and (device-height: 768px) { 
        font-size: 100px;
    }

`;

const NewbieCount = styled.p`
    text-decoration: none;
    position: absolute;
    margin: 0;
    top: 58%;
    left: 50%;
    width: 100%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    font-family: 'KoPub Dotum';
    font-size: 3vh;

    @media (device-width: 360px) {
        font-size: 15px;
        top: 55%;
    }

    @media (device-width: 384px) and (device-height: 538px) { 
        font-size: 15px;
        top: 57%;
    }

    @media (device-width: 414px) { 
        font-size: 15px;
        top: 57%;
    }

    @media (device-width: 375px) { 
       font-size: 15px;
       top: 55%;
    }

    @media (device-width: 390px) { 
        font-size: 15px;
        top: 55%;
    }

    @media (device-width: 428px) { 
        font-size: 15px;
        top: 55%;
    }

    @media (device-width: 414px) and (min-height: 896px) { 
        font-size: 17px;
    }

    @media only screen and (max-height: 1280px) { 
        font-size: 19px;
    }

    @media (device-width: 1366px) { 
        font-size: 23px;
    }

    @media (device-width: 1366px) and (device-height: 768px) { 
        font-size: 17px;
    }

`;

const MainButton = styled.button`
    background-image: url(${IndexButton});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
    border: none;
    width: 100vw;
    height: 11vh;
    position: absolute;
    margin: 0;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    
    &:hover {
        background-image: url(${IndexButtonOnClick});
    }
    &:active {
        background-image: url(${IndexButtonOnClick});
    }
    &:focus {
        outline:none;
    }

    @media (min-width: 360px) and (max-width: 428px) {
        width: 90%;
        top: 62%;
    }
    
    @media (device-width: 384px) and (device-height: 538px) { 
        width: 90%;
        top: 65%;
    }

    @media (device-width: 414px) { 
        width: 90%;
        top: 63%;
    }

    @media (device-width: 428px) { 
        width: 90%;
        top: 61%;
    }

    @media (device-width: 375px) and (min-height: 812px) { 
        width: 90%;
        top: 61%;
    }
`;

const Contribute = styled.a`
    font-family: 'ELAND';
    font-size: 15px;
    position: absolute;
    top: 72%;
    left: 46.5%;
    text-align: center;
    text-decoration:none;
    color: #1C515A;

    &:link{
        color: #1C515A;
    }
    &:visited{
        color: #1C515A;
    }

    @media (device-width: 360px) {
        top: 68%;
        left: 36%;
    }

    @media (device-width: 384px) and (device-height: 538px) {
        top: 73%;
        left: 41%;
        font-size: 10px;
    }

    @media (device-width: 1024px) { 
        left: 45%;
    }

    @media (device-width: 1112px) {
        left: 45.5%;
    }

    @media (device-width: 1194px) {
        left: 45.5%;
    }

    @media (device-width: 428px){
        left: 38%;
    }

    @media (device-width: 390px) { 
        left: 37%;
    }   

    @media (device-width: 414px) { 
        left: 37%;
    }

    @media (device-width: 375px) { 
        top: 70%;
        left: 36%;
    }
`;


function Main() {
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
          </TextContainer>
          <NewbieCount>현재 <b>{counts}명의 새내기</b>가 입학했어요</NewbieCount>
          <Link to = "/college" >
              <MainButton></MainButton>
          </Link>
          <Link to = "/contribute" >
              <Contribute>@ContactUs</Contribute>
          </Link>
      </MainImage>
    )
}

export default Main;
