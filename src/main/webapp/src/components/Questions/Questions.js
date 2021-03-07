import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";
import ProgressBar from './ProgressBar';
import MobileBack from '../../image/m_question_bg.png';
import MobileBackw384 from '../../image/m_question_bg_w384.png';
import MobileBackh740 from '../../image/m_question_bg_h740.png';
import MobileBackw1280 from '../../image/question_bg_w1280.png';
import MobileBackw1024 from '../../image/m_question_bg_w1024.png';
import GlobalFonts from "../fonts";
import { useMutex } from 'react-context-mutex';

const QuestionsImg = styled.div`
    display: flex;
    background-image: url(${MobileBackw1280});
    width: 100%;
    min-height: 100vh;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 500px) {
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

const QuestionsContainer = styled.div`
    width: 400px;
    object-fit: cover;
    text-align: center;
    justify-content: center;
    align-items: center;

    @media (device-width: 360px) { 
        width: 300px;
    }

    @media (device-width: 384px) and (device-height: 538px) { 
        width: 300px;
    }    

    @media (device-width: 390px) {
        width: 350px;
    }

    @media (device-width: 414px) {
        width: 360px;
    }

    @media (device-width: 375px) { 
        width: 330px;
    }


`;

const QuestionWrapper = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    margin: 60px 0px 57px 0px;
    color: white;
    font-size: 30px;
    font-family: 'BMeU';
    text-align: center;
    text-shadow: 1px 1px gray;
    word-break: keep-all;
    word-wrap: break-word;

    @media (device-width: 384px) and (device-height: 538px) { 
        margin: 10px 0px 15px 0px;
        font-size: 25px;
    }  
    @media (device-width: 360px) { 
        margin: 15px 0px 25px 0px;
    }
`;

const Text1Container = styled.div`
    text-align: left;
    font-family: 'BMeU';
    font-size: 20px;
    margin: 5px;
    color: #001981;

    @media (device-width: 384px) and (device-height: 538px) { 
        font-size: 15px;
    }  
`;

const Text2Container = styled.div`
    font-family: 'BMeU';
    text-align: right;
    font-size: 20px;
    margin-top: -25px;
    color: #001981;

    @media (device-width: 384px) and (device-height: 538px) { 
        font-size: 15px;
    }  
`;

const ButtonOptions = styled.button`
    text-align: left;
    color: #343434;
    width: 100%;
    height: 10vh;
    border-radius: 30px;
    background-color: white;
    padding: 0px 20px 0px 20px;
    border: 2px solid white;
    font-size: 17px;
    font-family: 'BMeU';
    margin: 0px 0px 20px 0px;
    word-wrap: break-word;
    word-break: keep-all;
    box-shadow: 4px 6px 0px -1px rgba(0,0,0,0.14);

    cursor: pointer;

    &:focus {
        outline:none;
    }

    @media (device-width: 384px) and (device-height: 538px) { 
        padding: 0px 20px 0px 20px;
        height: 12vh;
    }  
`;

function blueBackground(e) {
    e.target.style.background = "rgb(81,138,247)";
    e.target.style.color = "white";
}

function whiteBackground(e) {
    e.target.style.background = "white";
    e.target.style.color = "rgb(17, 47, 56)";
}

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
                console.log(questChoice);
                console.log(props.location.state.selectedOption);
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
              <ButtonOptions onMouseEnter={blueBackground} onMouseLeave={whiteBackground} onClick={() => onQuestions(0)} >{questions[id].choices[0].choiceContent}</ButtonOptions>
              <ButtonOptions onMouseEnter={blueBackground} onMouseLeave={whiteBackground} onClick={() => onQuestions(1)} >{questions[id].choices[1].choiceContent}</ButtonOptions>
              <ButtonOptions onMouseEnter={blueBackground} onMouseLeave={whiteBackground} onClick={() => onQuestions(2)} >{questions[id].choices[2].choiceContent}</ButtonOptions>
              <ButtonOptions onMouseEnter={blueBackground} onMouseLeave={whiteBackground} onClick={() => onQuestions(3)} >{questions[id].choices[3].choiceContent}</ButtonOptions>
          </QuestionsContainer>
      </QuestionsImg>
    )

    return null;
}
export default Questions;