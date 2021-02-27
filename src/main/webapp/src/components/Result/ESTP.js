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
import ESTP from '../../image/MBTI_ESTP.png';
import INFJ from '../../image/MBTI_INFJ.png';
import INFP from '../../image/MBTI_INFP.png';
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
    background-image: url(${ESTP});
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
    background-image: url(${INFJ});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;
    border-right: 1px solid #e5e5e5;

`;

const Different = styled.div`
    background-image: url(${INFP});
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
                  <ResultBlack>술도 마셨는데~ 좋아게임할까!?</ResultBlack>
                  <ResultName>미팅 하드 캐리</ResultName>
                  <ResultImg>
                  </ResultImg>
                  <ResultText>- 여러 사람이 모인 행사에서 이 자리 저 자리 휙휙 옮겨 다니는 당신은 인싸 중의 핵인싸!!
                      <br></br><br></br>- 직설적이면서 친근한 농담으로 주변 사람을 웃게 만드는 당신은 미팅에서도 분위기 메이커를 담당할 것…!!?
                      <br></br><br></br>- 추진력이 강하며 이성적으로 판단하는 당신은 팀플에서 조장이 될 확률이 높아요.
                      <br></br><br></br>- 당신은 타인의 작은 변화조차도 쉽게 알아차릴 수 있으며, 그 뒤에 숨은 의미나 생각을 포착해낼 수 있는 능력이 있어요.
                      <br></br><br></br>- 이러한 능력으로 주변 사람들을 배려하는 따뜻한 리더가 되어보세요.
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
                      <SimiAndDiffName>고학번 같은 새내기</SimiAndDiffName>
                      <SimiAndDiffName>에타 네임드</SimiAndDiffName>
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
