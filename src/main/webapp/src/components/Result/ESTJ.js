import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Loader from './Loader';
import styled from 'styled-components';
import ResultBackImg from '../../image/result_bg_gradiant.png';
import MobileBackImg from '../../image/m_result_bg_gradiant.png';
import FixImg from '../../image/result_bg_fix.png';
import GlobalFonts from "../fonts";
import ESTJ from '../../image/MBTI_ESTJ.png';
import INFP from '../../image/MBTI_INFP.png';
import INFJ from '../../image/MBTI_INFJ.png';


const ResultImage = styled.div`
    display: flex;
    background-image: url(${ResultBackImg});
    width: 100%;
    min-height: 200vh;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 500px) {
        /* background-image: url(${MobileBackImg}); */
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
`;

const ResultContainer = styled.div`
    width: 450px;
    height: 235vh;
    text-align: center;
    justify-content: center;
    align-items: center;
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
    height: 853px;
    background-color: white;
    margin-bottom: 100px;
    border-radius: 35px;
    margin: 0px 10px 20px auto;
    padding: 53px 29px 53px 29px;
    box-shadow: 1px 1px 1px 1px gray;
`;

const ResultHeader = styled.div`
    font-family: 'DAONE';
    font-size: 20px;
    color: black;
    margin-bottom: 28px;
`;

const ResultName = styled.div`
    font-family: 'BMeU';
    font-size: 35px;
    color: #3369CF;
`;

const ResultImg = styled.div`
    background-image: url(${ESTJ});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 300px;
    height: 300px;
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;
`;

const ResultText = styled.div`
    font-family: 'KoPub Dotum';
    font-size: 15px;
    color: #343434;
`;

const SimiAndDiff = styled.div`
    width: 100%;
    height: 400px;
    background-color: white;
    margin-bottom: 100px;
    border-radius: 35px;
    margin: 0px 10px 20px auto;
    padding: 50px 29px 0px 29px;
    box-shadow: 1px 1px 1px 1px gray;
`;

const SimiAndDiffText = styled.div`
    width: 100%;
    font-family: 'BMeU';
    font-size: 25px;
    color: #343434;
`;

const SimiAndDiffName = styled.div`
    width: 100%;
    font-family: 'BMeU';
    font-size: 20px;
    color: #343434;
`;

const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 20px;
`;
const Similar = styled.div`
    background-image: url(${INFP});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;
    border-right: 1px solid #e5e5e5;
`;

const Different = styled.div`
    background-image: url(${INFJ});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;
`;

const Share = styled.div`
    width: 100%;
    height: 150px;
    background-color: white;
    margin-bottom: 100px;
    border-radius: 35px;
    margin: 0px 10px 20px auto;
    padding: 30px 29px 0px 29px;
    box-shadow: 1px 1px 1px 1px gray;
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

    //components가 처음 렌더링 될 때 요청 
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
                    <ResultName>이번 정거장은 A+,A+입니다.<br></br>A+행 버스기사</ResultName>
                    <ResultImg>
                    </ResultImg>
                    <ResultText>- 성실하고 부지런해서 어느 것 하나 빠짐없이 열심히 하는 당신!
                        <br></br><br></br>- 그러나 이런 완벽한 모습 뒤에는 매일 나를 채찍질하는 나 자신이 있습니다.(지금도 채찍질 말자하고 채찍질 중...)
                        <br></br><br></br>- 협동하는 것을 매우 싫어하는 학우분께도 조별과제라는 시련이 종종 찾아오는데요. 팀원과의 프로젝트 회의 중 이야기가 딴 데로 새기 시작하면 그 때부터 머리가 지끈지끈거려 옵니다.
                        <br></br><br></br>- 결국 어느 순간 모든 것을 혼자 하고 있는 자신을 발견하게 되죠.
                        <br></br><br></br>- 남에게 부탁하는 것보다는 혼자 하는게 제일 편하고 빠르다고 생각하는 조별과제 헌터의 모습입니다.
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
                        <SimiAndDiffName>에타 네임드</SimiAndDiffName>
                        <SimiAndDiffName>고학번 같은 새내기</SimiAndDiffName>
                    </FlexContainer>
                </SimiAndDiff>
                <Share>
                    <SimiAndDiffText>나의 캠퍼스 라이프 공유하기</SimiAndDiffText>
                    <FlexContainer>
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
