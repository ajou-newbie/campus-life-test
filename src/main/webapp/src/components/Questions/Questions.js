import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";
import ProgressBar from './ProgressBar';
import backImg from '../../image/Newbie_qu_background.png';
import QuestionsMobile from '../../image/m_question_bg.png';
import GlobalFonts from "../fonts"

const QuestionsImg = styled.div`
    display: flex;
    background-image: url(${backImg});
    width: 100%;
    min-height: 100vh;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 500px) {
        background-image: url(${QuestionsMobile});
    }
`;

const QuestionsContainer = styled.div`
    width: 400px;
    object-fit: cover;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    
    @media screen and (max-width: 30%) {
        height: 80%;
        object-fit: cover;    
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
`;

const Text1Container = styled.div`
    text-align: left;
    font-family: 'BMeU';
    font-size: 20px;
    margin: 5px;
    color: #001981;
`;

const Text2Container = styled.div`
    font-family: 'BMeU';
    text-align: right;
    font-size: 20px;
    margin-top: -25px;
    color: #001981;
`;

const ButtonOptions = styled.button`
    text-align: left;
    color: #343434;
    width: 400px;
    height: 10vh;
    border-radius: 15px;
    background-color: white;
    padding: 0px 20px 0px 20px;
    border: 2px solid white;
    font-size: 17px;
    font-family: 'BMeU';
    margin: 0px 0px 20px 0px;
    cursor: pointer;

    &:focus {
        outline:none;
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
    const [questions, setQuestions] = useState(null); // test data
    const [id, setId] = useState(0); // id
    const [questChoice, setQuestChoice] = useState([0]);
    const [error, setError] = useState(false);

    // questions 선택 항목 저장
    const onQuestions = (index) => {
        const choiceQuestion = index + 1;
        setQuestChoice([...questChoice,choiceQuestion]);
        setId(id + 1);
    };

    // get questions
    const fetchQuestions = async () => {
        try {
            // 요청이 시작 할 때에는 초기화
            setError(null);
            setQuestions(null);
            const getResponse = await axios.get('http://localhost:8080/questions');
            setQuestions(getResponse.data);
        } catch (e) {
            setError(e);
        }
    };

    // post users (questions, college)
    const postUsers = async () => {
        try {
            setError(null);
            const postResponse = await axios.post('http://localhost:8080/result', {
                answers: questChoice,
                college : props.location.state.selectedOption
            });

            window.location.href = postResponse.data.url;
        } catch (e) {
            setError(e);
        }
    }

    useEffect(() => {
        fetchQuestions();
        return () => {
            postUsers();
        };

    }, [questChoice, id])

    if (!questions) return null;

    if(id === 12) postUsers();

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
}
export default Questions;