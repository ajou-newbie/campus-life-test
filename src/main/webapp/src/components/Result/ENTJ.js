import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
import Loader from './Loader';
import styled from 'styled-components';
import ResultBackImg from '../../image/result_bg_gradiant.png';
import MobileBackh538 from '../../image/result_bg_w538.png';
import FixImg from '../../image/result_bg_fix.png';
import FixImgw384 from '../../image/result_bg_fix_w384.png';
import FixImgw500 from '../../image/result_bg_fix_w500.png';
import FixImgw1024 from '../../image/result_bg_fix_w1024.png';
import GlobalFonts from "../fonts";
import ENTJ from '../../image/MBTI_ENTJ.png';
import ISFJ from '../../image/MBTI_ISFJ.png';
import ISFP from '../../image/MBTI_ISFP.png';
import url from '../../image/url_2x.png';

const ResultImage = styled.div`
    display: flex;
    background-image: url(${ResultBackImg});
    width: 100%;
    min-height: 250%;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    justify-content: center;
    align-items: center;

    @media screen and (max-height: 538px) {
        background-image: url(${MobileBackh538});
    }

`;

const Footer = styled.div`
    position: fixed;
    background-image: url(${FixImg});
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    width:100%;
    height: 100vh;
    left: 0px;
    bottom: 0px;
    opacity: 0.8;

    @media screen and (max-width: 500px) {
        position: fixed;
        background-image: url(${FixImgw500});
    }

    @media only screen and (max-width: 384px) {
        position: fixed;
        background-image: url(${FixImgw384});
    }

    @media only screen and (min-width: 1024px) {
        position: fixed;
        background-image: url(${FixImgw1024});
    }
`;

const ResultContainer = styled.div`
    width: 500px;
    height: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;

    @media (device-width: 360px) {
        width: 320px;
    }

    @media (device-width: 384px) and (device-height: 538px) {
        width: 320px;
    }

    @media (device-width: 428px) {
        width: 400px;
    }

    @media (device-width: 390px) { 
        width: 370px;
    }

    @media (device-width: 414px) { 
        width: 390px;
    }

    @media (device-width: 375px) { 
        width: 350px;
    }

`;

const Header = styled.div`
    font-family: 'BMeU';
    font-size: 35px;
    text-shadow: 1px 1px gray;
    color: white;
    margin: 30px 0px 30px 0px;
`;

const MBTIResult = styled.div`
    width: 100%;
    height: 50%;
    background-color: white;
    margin-bottom: 100px;
    border-radius: 35px;
    margin: 0px 10px 20px auto;
    padding: 53px 29px 53px 29px;
    box-shadow: 4px 6px 0px -1px rgba(0,0,0,0.14);
    @media (device-width: 360px) { 
        height: 55%;
    }

    @media (device-width: 384px) and (device-height: 538px) { 
        height: 80%;
    }
`;

const ResultHeader = styled.div`
    font-family: 'DAONE';
    font-size: 20px;
    color: black;
    margin-bottom: 28px;
`;

const ResultBlack = styled.div`
    font-family: 'Recipekorea';
    font-size: 35px;
    color: #343434;
    @media (device-width: 360px) { 
        font-size: 25px;
    }
    @media (device-width: 384px) and (device-height: 538px) { 
        font-size: 25px;
    }

    @media (device-width: 375px) {
        font-size: 25px;
    }

    @media (device-width: 414px) and (min-height: 896px) { //iPhone XR, XS MAX, 11
        font-size: 30px;
    }
`;

const ResultName = styled.div`
    font-family: 'Recipekorea';
    font-size: 50px;
    color: #3369CF;

    @media (device-width: 360px) { 
        font-size: 40px;
    }
    @media (device-width: 384px) and (device-height: 538px) { 
        font-size: 35px;
    }

    @media (device-width: 375px) {
        font-size: 40px;
    }

`;

const ResultImg = styled.div`
    background-image: url(${ENTJ});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 300px;
    height: 300px;
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;

    @media (device-width: 360px) { 
        width: 250px;
    }

    @media (device-width: 384px) and (device-height: 538px) { 
        width: 280px;
    }
`;

const ResultText = styled.div`
    font-family: 'KoPub Dotum';
    font-size: 15px;
    color: #343434;
    word-wrap: break-word;
    word-break: keep-all;
    text-align: justify;
    word-spacing: -1px;
    font-weight: bold;
`;

const SimiAndDiff = styled.div`
    width: 100%;
    height: 300%;
    background-color: white;
    border-radius: 35px;
    margin: 0px 0px 20px auto;
    padding: 50px;
    box-shadow: 4px 6px 0px -1px rgba(0,0,0,0.14);
    text-align: center;

    @media (device-width: 360px) { 
        height: 350px;
        padding: 30px 10px 0px 10px;
    }

    @media (device-width: 384px) and (device-height: 538px) { 
        height: 330px;
        padding: 25px 10px 20px 10px;
    }

    @media (device-width: 390px) { 
        height: 350px;
        padding: 30px 10px 0px 10px;
    }

    @media (device-width: 414px) { 
        height: 350px;
        padding: 30px 10px 0px 10px;
    }

    @media (device-width: 375px) and (min-height: 812px) { 
        height: 330px;
        padding: 20px 10px 0px 10px;
    }

    @media (device-width: 428px) and (min-height: 926px) { 
        height: 330px;
        padding: 20px 10px 0px 10px;
    }

    @media (device-width: 375px) and (min-height: 667px) { 
        height: 330px;
        padding: 20px 10px 0px 10px;
    }

    
`;

const SimiAndDiffText = styled.div`
    width: 50%;
    font-family: 'BMeU';
    font-size: 25px;
    color: #343434;
    word-wrap: break-word;
    word-break: keep-all;
    text-align: center;

    @media (device-width: 360px) { 
        font-size: 20px;
    }

    @media (device-width: 384px) and (device-height: 538px) { 
        font-size: 15px;
        margin: 0;
    }

    @media (device-width: 428px) { 
        font-size: 20px;
    }

    @media (device-width: 390px) { 
        font-size: 20px;
    }

    @media (device-width: 414px) { 
        font-size: 20px;
    }

    @media (device-width: 375px) { 
        font-size: 20px;
    }

`;

const SimiAndDiffName = styled.div`
    width: 50%;
    font-family: 'BMeU';
    font-size: 20px;
    color: #343434;

    @media (device-width: 384px) and (device-height: 538px) { 
        font-size: 15px;
    }
`;

const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
`;

const Similar = styled.div`
    background-image: url(${ISFP});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;
    border-right: 1px solid #e5e5e5;

`;

const Different = styled.div`
    background-image: url(${ISFJ});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;
`;

const Share = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: white;
    border-radius: 35px;
    margin: 0px 0px 20px auto;
    padding: 40px;
    box-shadow: 4px 6px 0px -1px rgba(0,0,0,0.14);
    transform: translate(0%, 0%);
    border: none;

    &:hover {
        background-color: rgb(81,138,247);
    }
    &:active {
        background-color: rgb(81,138,247);
    }
    &:focus {
        outline:none;
    }

    @media (device-width: 360px) { 
        padding: 20px;
        height: 7%;
    }

    @media (device-width: 360px) and (device-height: 640px) { 
        height: 5%;
        padding: 10px 0px 10px 0px;
    }

    @media (device-width: 428px) { 
        height: 7%;
        padding: 20px;
    }

    @media (device-width: 384px) and (device-height: 538px) { 
        padding: 25px;
        height: 7%;
    }

    @media (device-width: 360px) and (device-height: 640px) { 
        padding: 25px;
        height: 7%;
    }

    @media (device-width: 390px) { 
        padding: 25px;
        height: 7%;
    }

    @media (device-width: 414px) {
        padding: 30px;
        height: 7%;
    }

    @media (device-width: 375px) {
        padding: 30px;
        height: 7%;
    }
`;

const ShareText = styled.div`
    width: 100%;
    height: 100%;
    font-family: 'BMeU';
    font-size: 30px;
    color: #343434;
    word-wrap: break-word;
    word-break: keep-all;
    margin: 0 auto;
    text-align: center;


    @media (device-width: 360px) { 
        font-size: 20px;
    }

    @media (device-width: 384px) and (device-height: 538px) { 
        font-size: 20px;
    }

    @media (device-width: 360px) and (device-height: 640px) { 
        font-size: 19px;
    }

    @media (device-width: 428px) { 
        font-size: 25px;
    }

    @media (device-width: 390px) { 
        font-size: 23px;
    }

    @media (device-width: 414px) {
        font-size: 25px;
    }

    @media (device-width: 375px) {
        font-size: 23px;
    }
`;

const Url = styled.div`
    background-image: url(${url});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 20%;
    height: 5vh;

    @media (device-width: 360px) { 
        width: 10%;
        height: 5vh;
    }

    @media (device-width: 360px) and (device-height: 640px) { 
        width: 13%;
    }

    @media (device-width: 390px) { 
        width: 10%;
    }

    @media (device-width: 375px) {
        width: 10%;
    }

    @media (device-width: 414px) {
        width: 10%;
    }

    @media (device-width: 414px) and (min-height: 896px) {
        width: 10%;
    }
`;

const GoToStartbtn = styled.button`
    border: none;
    border-radius: 35px;
    width: 100%;
    height: 100px;
    margin: 0;
    transform: translate(0%, 0%);
    margin: 0px 10px 10px auto;
    font-family: 'BMeU';
    font-size: 35px;
    color: #3369CF;
    cursor: pointer;
    box-shadow: 4px 6px 0px -1px rgba(0,0,0,0.14);

    &:hover {
        background-color: rgb(81,138,247);
    }
    &:active {
        background-color: rgb(81,138,247);
    }
    &:focus {
        outline:none;
    }

    @media (device-width: 360px) { 
        height: 70px;
    }

    @media (device-width: 384px) and (device-height: 538px) { 
        height: 70px;
    }

    @media (device-width: 428px) { 
        height: 70px;
    }

    @media (device-width: 390px) { 
        height: 80px;
    }

    @media (device-width: 414px) {
        height: 85px;
    }

    @media (device-width: 375px) {
        height: 85px;
    }
`;

function Result() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const location = useLocation();
    console.log(location.state);

    const fetchUsers = async () => {
        try {
            setError(null);
            setLoading(true);
        } catch (e) {
            setError(e);
        }
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    const Toast = () => {
        ToastsStore.success("복사에 성공했습니다!");
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    if (loading) return <Loader type="bubbles" color="white" ></Loader>
    if (error) return <div>에러가 발생했습니다.</div>

    const url = window.location.href;

    return(
      <ResultImage>
          <GlobalFonts/>
          <Footer/>
          <ResultContainer>
              <Header>슬기로운 대학생활</Header>
              <MBTIResult>
                  <ResultHeader>내가 즐기게 될 캠퍼스 라이프는?</ResultHeader>
                  <ResultBlack>과대표는 내가 할게<br></br>투표는 누가 할래?</ResultBlack>
                  <ResultName>과대표 답정너</ResultName>
                  <ResultImg>
                  </ResultImg>
                  <ResultText>- 태어나는 순간부터 이미 리더상! 넘치는 자신감과 모두를 사로잡는 카리스마!
                      <br></br><br></br>- 빠른 결정력과 판단력 그리고 정확성을 바탕으로 완벽한 대학 생활을 계획할 수 있어요.
                      <br></br><br></br>- 학생회, 동아리, 조별과제 등 단체 활동에서 스스로 리더를 자청하면 누구보다 그 역할을 잘 수행해낼 수 있어요.
                      <br></br><br></br>- 만약 주위에 자신과 비슷한 동기들이 함께한다면 더 많은 일을 해낼 수 있을 거예요. 항상 성공한 리더 곁에는 좋은 동료들이 함께한다는 것을 잊지 마세요.
                      <br></br><br></br>- 타고난 리더로서의 능력을 발휘하여 주변 동기들과 함께 주체적으로 과를 이끌어 나간다면 보람찬 대학 생활을 보낼 수 있을 거예요.
                  </ResultText>
              </MBTIResult>
              <SimiAndDiff>
                  <FlexContainer>
                      <SimiAndDiffText>나랑 찰떡인 동기</SimiAndDiffText>
                      <SimiAndDiffText>잘 안맞는 동기</SimiAndDiffText>
                  </FlexContainer>
                  <FlexContainer>
                      <Similar/>
                      <Different/>
                  </FlexContainer>
                  <FlexContainer>
                      <SimiAndDiffName>공부는 내일 부터</SimiAndDiffName>
                      <SimiAndDiffName>족보 기부천사</SimiAndDiffName>
                  </FlexContainer>
              </SimiAndDiff>
              <CopyToClipboard text={url}>
                <Share>  
                    <Url></Url>
                    <ShareText onClick={() => Toast()}>나의 캠퍼스 라이프 공유하기</ShareText>
                    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_CENTER} />
                </Share>
              </CopyToClipboard>
              <Link to = "/" >
                  <GoToStartbtn>테스트 다시하기</GoToStartbtn>
              </Link>
          </ResultContainer>
      </ResultImage>
    )
}

export default Result;
