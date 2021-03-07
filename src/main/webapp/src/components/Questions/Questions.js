import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";
import ProgressBar from './ProgressBar';
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
import GlobalFonts from "../fonts";
import { useMutex } from 'react-context-mutex';

const QuestionsImg = styled.div`
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

    @media (device-width: 834px) and (device-height: 1194px) { 
        background-image: url(${iPadPro11Portrait});
    }

    @media (device-width: 1024px) and (device-height: 1366px) { 
        background-image: url(${iPadPro12Portrait});
    }
`;

const QuestionsContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-self: center;
    flex-direction: column;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 645px;

    @media (min-width: 280px) and (max-width: 320px) {
        width: 250px;
        height: 500px;
    } 

    @media (min-width: 350px) and (max-width: 414px) {
        width: 340px;
        height: 640px;
    } 

    @media (min-width: 428px) and (max-width: 500px) {
        width: 400px;
        height: 900px;
    }
`;  

const QuestionWrapper = styled.div`
    color: white;
    font-size: 24px;
    height: 100px;
    font-family: 'BMeU';
    text-align: center;
    text-shadow: 1px 1px gray;
    word-break: keep-all;
    word-wrap: break-word;
    padding: 0px 20px 60px 20px;

    @media (min-width: 280px) and (max-width: 320px) {
        font-size: 20px;
    } 

    @media (min-width: 350px) and (max-width: 414px) {
        height: 130px;
    } 

    @media (min-width: 428px) and (max-width: 500px) {
        padding: 0px 20px 120px 20px;
    }
`;

const Text1Container = styled.div`
    text-align: left;
    font-family: 'BMeU';
    font-size: 20px;
    margin: 5px;
    color: #001981;

    @media (min-width: 280px) and (max-width: 320px) {
        font-size: 13px;
    } 

    @media (min-width: 350px) and (max-width: 414px) {
        font-size: 17px;
    } 
`;

const Text2Container = styled.div`
    font-family: 'BMeU';
    text-align: right;
    font-size: 20px;
    margin-top: -25px;
    margin-bottom: 40px;
    color: #001981;

    @media (min-width: 280px) and (max-width: 320px) {
        font-size: 13px;
        margin-top: -20px;
    } 

    @media (min-width: 350px) and (max-width: 414px) {
        font-size: 17px;
    } 
`;

const ButtonOptions = styled.button`
    text-align: left;
    color: #343434;
    width: 450px;
    height: 82px;
    border-radius: 30px;
    background-color: white;
    padding: 10px 10px 10px 20px;
    border: 1px solid white;
    font-size: 20px;
    font-family: 'BMeU';
    margin: 0px 0px 20px 0px;
    word-wrap: break-word;
    word-break: keep-all;
    box-shadow: 4px 6px 0px -1px rgba(0,0,0,0.14);
    cursor: pointer;

    &:hover {
        border: 5px solid white;
        background-color: rgb(81,138,247);
        color: white;
        outline: none;
    }

    &:focus {
        outline: none;
    }
    
    @media (hover: none) and (pointer: coarse) {
        &:focus{
            background-color: white;
            color: #343434;
            outline: none;
        }

        &:active {
            border: 5px solid white;
            background-color: rgb(81,138,247);
            color: white;
            outline: none;
        }
    }

    @media (min-width: 280px) and (max-width: 320px) {
        font-size: 13px;
        width: 250px;
        height: 60px;
        padding: 10px 0px 10px 15px;
        border-radius: 20px;
    }

    @media (min-width: 350px) and (max-width: 414px) {
        width: 340px;
        font-size: 16px;
    } 

    @media (min-width: 428px) and (max-width: 500px) {
        width: 400px;
    }

    @media not all and (hover: none) {
    .hoverspecificstyles:hover {
    display: block;
    }
}
`;

function Questions(props) {
    const [questions, setQuestions] = useState(null);
    const [id, setId] = useState(0);
    const [questChoice, setQuestChoice] = useState([0]);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchQuestions();
    }, [])

    const onQuestions = (index) => {
        const choiceQuestion = index + 1;
        setQuestChoice([...questChoice,choiceQuestion]);
        setId(id + 1);
    };

    const fetchQuestions = async () => {
        try {
            setError(null);
            setQuestions(null);
            const getResponse = await axios.get('http://localhost:8080/questions');
            setQuestions(getResponse.data);
        } catch (e) {
            setError(e);
        }
    };


    const PostUsers = async () => {
        const MutexRunner = useMutex();
        const mutex = new MutexRunner("mutexLock");

        mutex.run(async () => {
            mutex.lock();
            try {
                const postResponse = await axios.post('http://localhost:8080/result', {
                    answers: questChoice,
                    college: props.location.state.selectedOption
                });
                window.location.href = postResponse.data.url;
                mutex.unlock();
            } catch (e) {
                mutex.unlock();
            }
        })
    };

    if (!questions) return null;

    if(id === 12) {
        PostUsers();
    }

    else if(id < 12) return (
      <QuestionsImg>
          <GlobalFonts />
          <QuestionsContainer >
              <ProgressBar bgcolor="#14276b" completed={id+1} />
              <Text1Container>개강</Text1Container>
              <Text2Container>종강♥︎</Text2Container>
              <QuestionWrapper >{questions[id].questionContent}</QuestionWrapper>
              <ButtonOptions  onClick={() => onQuestions(0)} >{questions[id].choices[0].choiceContent}</ButtonOptions>
              <ButtonOptions  onClick={() => onQuestions(1)} >{questions[id].choices[1].choiceContent}</ButtonOptions>
              <ButtonOptions  onClick={() => onQuestions(2)} >{questions[id].choices[2].choiceContent}</ButtonOptions>
              <ButtonOptions  onClick={() => onQuestions(3)} >{questions[id].choices[3].choiceContent}</ButtonOptions>
          </QuestionsContainer>
      </QuestionsImg>
    )

    return null;
}
export default Questions;