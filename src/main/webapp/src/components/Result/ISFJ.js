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
import ISFJ from '../../image/MBTI_ISFJ.png';
import ENTP from '../../image/MBTI_ENTP.png';
import ENTJ from '../../image/MBTI_ENTJ.png';
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
    background-image: url(${ISFJ});
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
    background-image: url(${ENTP});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;
    border-right: 1px solid #e5e5e5;

`;

const Different = styled.div`
    background-image: url(${ENTJ});
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
                  <ResultBlack>간이고 쓸개고 다 줄게!</ResultBlack>
                  <ResultName>족보 기부천사</ResultName>
                  <ResultImg>
                  </ResultImg>
                  <ResultText>- 사람들의 감정을 잘 캐치하고 공감을 잘하는 당신은 원래 내향적이지만 사람들과 함께 있을 때 만큼은 외향적으로 행동하는, 배려 가득한 사람이에요!
                      <br></br><br></br>- 다른사람의 부탁을 거절하는 일은 당신의 마음을 불편하게 만드는 세상에서 가장 어려운 일이에요. 그래서 그런지 주위 사람들로부터 착하고 친절한 사람이라는 이야기를 많이 들어왔어요.
                      <br></br><br></br>- 그래서 누군가 시험이나 과제의 족보를 당신에게 부탁한다면 거절하지 않고 흔쾌히 넘겨주지요. 심지어 모든 공부를 책임감을 가지고 꼼꼼히 하는 덕분에 족보의 퀄리티는 A+일 경우가 많아요
                      <br></br><br></br>- 당신은 다른 사람의 일도 마치 나의 일인 것처럼 열심으로 도와주지요. 물론 가끔씩 도와주기 싫을 때도 있지만..! 부탁을 거절하는 것이 미안해서라도 결국 웃으면서 도움을 제공하는 학교 대표 천사랍니다👼
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
                      <SimiAndDiffName>대학가 퉁퉁이</SimiAndDiffName>
                      <SimiAndDiffName>과대표 답정너</SimiAndDiffName>
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
