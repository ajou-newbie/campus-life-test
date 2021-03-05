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

        
    @media (device-width: 414px) and (device-height: 896px) {  //변경
        background-image: url(${MainiPhone678Plus});
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

const TextContainer = styled.div`
    width: 100%;
    height: auto;
    padding: 165px 0px 0px 0px;

    @media (device-width: 360px) {
        padding: 160px 0px 0px 0px;
    }

    @media (device-width: 384px) and (device-height: 538px) { 
        padding: 110px 0px 0px 0px;
    }

    @media (device-width: 360px) and (device-height: 740px){ 
        padding: 230px 0px 0px 0px;
    } 

    @media (device-width: 360px) and (device-height: 760px){ 
        padding: 238px 0px 0px 0px;
    } 

    @media (device-width: 414px) { 
        padding: 200px 0px 0px 0px;
    }

    @media (device-width: 375px) and (device-height: 667px) { 
        padding: 185px 0px 0px 0px;
    }

    @media (device-width: 428px) { 
        padding: 290px 0px 0px 0px;
    }

    @media (device-width: 390px) { 
        padding: 270px 0px 0px 0px;
    }

    @media (device-width: 375px) and (device-height: 812px) { 
        padding: 260px 0px 0px 0px;
    }

    @media (device-width: 414px) and (device-height: 896px) {  //변경
        padding: 260px 0px 0px 0px;
    }

    @media (device-width: 1280px) and (device-height: 800px)  { 
        padding: 205px 0px 0px 0px;
    }

    @media (device-width: 1024px) and (device-height: 768px)  { 
        padding: 190px 0px 0px 0px;
    }

    @media (device-width: 1112px) { 
        padding: 215px 0px 0px 0px;
    }

    @media (device-width: 1194px) { 
        padding: 215px 0px 0px 0px;
    }

    @media (device-width: 1366px) and (device-height:1024px) { 
        padding: 270px 0px 0px 0px;
    }

    @media (device-width: 1366px) and (device-height:768px) { 
        padding: 195px 0px 0px 0px;
    }

`;

const HeaderText = styled.div`
    font-family: 'DAONE';
    font-size: 23px;
    color: white;
    text-align: center;
    padding: 0px 0px 5px 0px;

    @media (device-width: 360px) {
        font-size: 15px;
    }

    @media (device-width: 384px) and (device-height: 538px) { 
        font-size: 17px;
    }

    @media (device-width: 414px) { 
        font-size: 18px;
    }

    @media (device-width: 375px) and (device-height: 667px) { 
        font-size: 16px;
    }

    @media (device-width: 428px) { 
        font-size: 19px;
    }

    @media (device-width: 390px) { 
        font-size: 16px;
    }

    @media (device-width: 375px) and (device-height: 812px) { 
        font-size: 15px;
    }

`;

const WhiteText = styled.div`
    font-family: 'SANDOLL';
    font-size: 86px;
    color: white;
    padding: 0px 0px 0px 30px;
    text-shadow: 4px 4px #29879599;
    letter-spacing: -0.4px;
    text-align: center;

    @media (device-width: 360px) {
        font-size: 55px;
    }

    @media (device-width: 384px) and (device-height: 538px) { 
        font-size: 58px;
    }

    @media (device-width: 414px) { 
        font-size: 61px;
    }

    @media (device-width: 375px) and (device-height: 667px) { 
        font-size: 55px;
    }

    @media (device-width: 428px) { 
        font-size: 65px;
    }

    @media (device-width: 390px) { 
        font-size: 59px;
    }

    @media (device-width: 375px) and (device-height: 812px) { 
        font-size: 55px;
    }

    @media (device-width: 1366px) and (device-height:1024px) { 
        font-size: 105px;
    }


`;

const YellowText = styled.div`
    font-family: 'SANDOLL';
    font-size: 102px;
    color: #FFFF00;
    text-shadow: 4px 4px #29879599;
    letter-spacing: -0.51px;

    @media (device-width: 360px) {
        font-size: 70px;
    }

    @media (device-width: 384px) and (device-height: 538px) { 
        font-size: 74px;
    }

    @media (device-width: 414px) { 
        font-size: 77px;
    }

    @media (device-width: 375px) and (device-height: 667px) { 
        font-size: 71px;
    }

    @media (device-width: 428px) { 
        font-size: 83px;
    }

    @media (device-width: 390px) { 
        font-size: 75px;
    }

    @media (device-width: 375px) and (device-height: 812px) { 
        font-size: 71px;
    }

    @media (device-width: 1366px) and (device-height:1024px) { 
        font-size: 135px;
    }

`;

const NewbieCount = styled.p`
    text-decoration: none;
    width: 100%;
    text-align: center;
    color: white;
    font-family: 'KoPub Dotum';
    margin-top: 10px;
    font-size: 20px;

    @media (device-width: 360px) {
        font-size: 15px;
    }

    @media (device-width: 384px) and (device-height: 538px) { 
        font-size: 17px;
    }

    @media (device-width: 414px) { 
        font-size: 16.5px;
    }

    @media (device-width: 375px) and (device-height: 667px) { 
        font-size: 15px;
    }

    @media (device-width: 428px) { 
        font-size: 19px;
    }

    @media (device-width: 390px) { 
        font-size: 17px;
    }

    @media (device-width: 375px) and (device-height: 812px) { 
        font-size: 15px;
    }

    @media (device-width: 1366px) and (device-height:1024px) { 
        font-size: 28px;
    }
`;

const MainButton = styled.button`
    font-size: 37px;
    font-family: "ELAND";
    text-align: center;
    text-decoration: none;
    border: none;
    width: 390px;
    height: 70px;
    margin: 10px 0px 10px 0px;
    border-radius: 35px;
    cursor: pointer;
    color: #01333D;
    background-color: white;
    
    &:hover {
        border: 5px solid white;
        background-color: rgb(81,138,247);
    }
    &:active {

    }
    &:focus {
        outline:none;
    }

    @media (device-width: 360px) {
        font-size: 28px;
        width: 276px;
        height: 51px;
    }

    @media (device-width: 384px) and (device-height: 538px) { 
        font-size: 30px;
        width: 296px;
        height: 55px;
    }

    @media (device-width: 414px) { 
        font-size: 30px;
        width: 300px;
        height: 55px;
    }

    @media (device-width: 375px) and (device-height: 667px) { 
        font-size: 27px;
        width: 271px;
        height: 50px;
    }

    @media (device-width: 428px) { 
        font-size: 33px;
        width: 328px;
        height: 60px;
    }

    @media (device-width: 390px) { 
        font-size: 30px;
        width: 300px;
        height: 55px;
    }

    @media (device-width: 375px) and (device-height: 812px) { 
        font-size: 27px;
        width: 271px;
        height: 50px;
    }

    @media (device-width: 1366px) and (device-height:1024px) { 
        font-size: 45.5px;
        width: 483px;
        height: 90px;
        border-radius: 45px;
    }
`;

const Contribute = styled.a`
    font-family: 'ELAND';
    font-size: 15px;
    text-align: center;
    color: #1C515A;


    &:link{
        color: #1C515A;
    }
    &:visited{
        color: #1C515A;
    }
`;


function Main() {
    const [counts, setCounts] = useState(null);
    const [error, setError] = useState(false);

    const fetchCounts = async () => {
        try{
            setError(null);
            setCounts(null);
            const getCounts = await axios.get('http://3.36.32.204:8080/index')
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
        </TextContainer>
        <Link to = "/contribute" >
            <Contribute>@Contributors</Contribute>
        </Link>
    </MainImage>
    )
}

export default Main;
