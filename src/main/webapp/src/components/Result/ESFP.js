import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Loader from './Loader';
import styled from 'styled-components';
import ResultBackImg from '../../image/result_bg_gradiant.png';
import MobileBackImg from '../../image/m_result_bg_gradiant.png';
import MobileBackh538 from '../../image/result_bg_w538.png';
import FixImg from '../../image/result_bg_fix.png';
import FixImgw384 from '../../image/result_bg_fix_w384.png'
import GlobalFonts from "../fonts";
import ESFP from '../../image/MBTI_ESFP.png';
import INTJ from '../../image/MBTI_INTJ.png';
import INTP from '../../image/MBTI_INTP.png';
import kakao from '../../image/kakaotalk_2x.png'
import url from '../../image/url_2x.png'

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
        /* background-image: url(${MobileBackImg}); */
    }

    @media only screen and (max-width: 384px) {
        position: fixed;
        background-image: url(${FixImgw384});
    }
`;

const ResultContainer = styled.div`
    width: 500px;
    height: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;

    @media (device-width: 360px) { //S10, S8
        width: 320px;
    }

    @media (device-width: 384px) and (device-height: 538px) { //Fold
        width: 320px;
    }

    @media (device-width: 428px) { //iPhone 12 Pro MAX
        width: 400px;
    }

    @media (device-width: 390px) { //iPhone 12, 12Pro
        width: 370px;
    }

    @media (device-width: 414px) { //iPhone 6,7,8 Plus
        width: 400px;
    }

    @media (device-width: 375px) { //iPhone 6,7,8 SE
        width: 360px;
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
    box-shadow: 1px 1px 1px 1px gray;

    @media (device-width: 360px) { //S10, S8
        height: 55%;
    }

    @media (device-width: 384px) and (device-height: 538px) { //Fold
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
`;

const ResultName = styled.div`
    font-family: 'Recipekorea';
    font-size: 50px;
    color: #3369CF;
`;

const ResultImg = styled.div`
    background-image: url(${ESFP});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 300px;
    height: 300px;
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;

    @media (device-width: 360px) { //S10, S8
        width: 250px;
    }

    @media (device-width: 384px) and (device-height: 538px) { //Fold
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
    font-weight: bold;
`;

const SimiAndDiff = styled.div`
    width: 100%;
    height: 300%;
    background-color: white;
    border-radius: 35px;
    margin: 0px 0px 20px auto;
    padding: 50px;
    box-shadow: 1px 1px 1px 1px gray;
    text-align: center;

    @media (device-width: 360px) { //S10, S8
        height: 350px;
        padding: 30px 10px 0px 10px;
    }

    @media (device-width: 384px) and (device-height: 538px) { //Fold
        height: 300px;
        padding: 15px 5px 0px 5px;
    }

    @media (device-width: 390px) { //iPhone 12, 12Pro
        height: 350px;
        padding: 20px 5px 0px 5px;
    }

    @media (device-width: 414px) { //iPhone 6,7,8 Plus
        height: 350px;
        padding: 20px 5px 0px 5px;
    }

    @media (device-width: 375px) and (min-height: 812px) { //iPhone X, XS, 11Pro
        height: 350px;
        padding: 20px 5px 0px 5px;
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

    @media (device-width: 360px) { //S10, S8
        font-size: 20px;
    }

    @media (device-width: 384px) and (device-height: 538px) { //Fold
        font-size: 15px;
    }

    @media (device-width: 428px) { //iPhone 12 Pro MAX
        font-size: 20px;
    }

    @media (device-width: 390px) { //iPhone 12, 12Pro
        font-size: 20px;
    }

    @media (device-width: 414px) { //iPhone 6,7,8 Plus
        font-size: 20px;
    }

    @media (device-width: 375px) { //iPhone 6,7,8 SE
        font-size: 20px;
    }

`;

const SimiAndDiffName = styled.div`
    width: 50%;
    font-family: 'BMeU';
    font-size: 20px;
    color: #343434;

    @media (device-width: 384px) and (device-height: 538px) { //Fold
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
    background-image: url(${INTJ});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;
    border-right: 1px solid #e5e5e5;

`;

const Different = styled.div`
    background-image: url(${INTP});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;

`;

const Share = styled.div`
    width: 100%;
    height: 10%;
    background-color: white;
    border-radius: 35px;
    margin: 0px 0px 20px auto;
    padding: 20px;
    box-shadow: 1px 1px 1px 1px gray;

    @media (device-width: 360px) { //S10, S8
        height: 7%;
    }

    @media (device-width: 360px) and (device-height: 640px) { //16:9
        height: 5%;
        padding: 10px 0px 10px 0px;
    }

    @media (device-width: 428px) { //iPhone 12 Pro MAX
        height: 5%;
        padding: 10px 0px 10px 0px;
    }
`;

const ShareText = styled.div`
    width: 100%;
    font-family: 'BMeU';
    font-size: 25px;
    color: #343434;
    word-wrap: break-word;
    word-break: keep-all;
    margin-bottom: 10px;

    @media (device-width: 360px) { //S10, S8
        font-size: 20px;
    }

    @media (device-width: 384px) and (device-height: 538px) { //Fold
        font-size: 20px;
    }
`;

const Kakao = styled.div`
    background-image: url(${kakao});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 50%;
    height: 10vh;

    @media (device-width: 360px) { //S10, S8
        width: 20%;
        height: 5vh;
    }

    @media (device-width: 360px) and (device-height: 640px) { //16:9
        width: 25%;
        height: 50px;
    }

    @media (device-width: 428px) { //iPhone 12 Pro MAX
        width: 30%;
        height: 70px;
    }

`;

const Url = styled.div`
    background-image: url(${url});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 50%;
    height: 10vh;

    @media (device-width: 360px) { //S10, S8
        width: 20%;
        height: 5vh;
    }

    @media (device-width: 360px) and (device-height: 640px) { //16:9
        width: 25%;
        height: 50px;
    }

    @media (device-width: 428px) { //iPhone 12 Pro MAX
        width: 30%;
        height: 70px;
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
    box-shadow: 1px 1px 1px 1px gray;
    
    &:hover {
        background-color: rgb(81,138,247);
    }
    &:active {
        background-color: rgb(81,138,247);
    }
    &:focus {
        outline:none;
    }

    @media (device-width: 360px) { //S10, S8
        height: 70px;
    }

    @media (device-width: 384px) and (device-height: 538px) { //Fold
        height: 70px;
    }
`;

const ContactUS = styled.button`
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
    box-shadow: 1px 1px 1px 1px gray;
`;



function Result() {
    const [url, setUrl] = useState(null);
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

    useEffect(() => {
        fetchUsers();
    }, [])

    if (loading) return <Loader type="bubbles" color="white" ></Loader>
    if (error) return <div>에러가 발생했습니다.</div>

    return(
      <ResultImage>
          <GlobalFonts/>
          <Footer/>
          <ResultContainer>
              <Header>슬기로운 대학생활</Header>
              <MBTIResult>
                  <ResultHeader>내가 즐기게 될 캠퍼스 라이프는?</ResultHeader>
                  <ResultBlack>쟤가 걔야?</ResultBlack>
                  <ResultName>교내 유명인사</ResultName>
                  <ResultImg>
                  </ResultImg>
                  <ResultText>- 통제 불가능한 끼의 소유자인 학우분께는 이미 서있는 그 곳이 무대!
                      <br></br><br></br>- 동에 번쩍 서에 번쩍하며 온갖 끼를 펼치는 당신은 잊을만 하면 대나무숲에 올라와 범접할 수 없는 존재감을 드러내곤 하죠.
                      <br></br><br></br>- 온갖 짤이란 짤은 다 수집하고 다니는 당신은 짤부자로 불리며, 카톡 채팅방에서도 역시 핵인싸!
                      <br></br><br></br>- 입 다물기는 죽어도 못하는 당신을 친구로 두는 한 오디오가 빌 일은 평생 없을거에요.
                      <br></br><br></br>- 그치만 친구들의 귀 건강을 위해 볼륨을 조금 낮출 필요는 있겠어요.
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
                      <SimiAndDiffName>학생회 제갈공명</SimiAndDiffName>
                      <SimiAndDiffName>나혼자 랩실</SimiAndDiffName>
                  </FlexContainer>
              </SimiAndDiff>
              <Share>
                  <SimiAndDiffText>나의 캠퍼스 라이프 공유하기</SimiAndDiffText>
                  <FlexContainer>
                      <Kakao></Kakao>
                      <Url></Url>
                  </FlexContainer>
              </Share>
              <Link to = "/" >
                  <GoToStartbtn>테스트 다시하기</GoToStartbtn>
              </Link>
          </ResultContainer>
      </ResultImage>
    )
}

export default Result;
