import React, { useState, useEffect, useContext } from "react";
import styled from 'styled-components';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import backImg from '../../image/Newbie_qu_background.png';
import QuestionsMobile from '../../image/m_question_bg.png';
import GlobalFonts from "../fonts"

const QuestionsImg = styled.div`
    display: flex;
    background-image: url(${backImg});
    width: 100%;
    min-height: 100%;
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
    font-size: 20px;
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
    height: 13vh;
    border-radius: 35px;
    background-color: white;
    padding: 20px;
    border: 2px solid white;
    font-size: 20px;
    font-family: 'BMeU';
    margin: 0px 0px 30px 0px;
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
    const [questChoice, setQuestChoice] = useState({ // 문항 선택 정보 저장 test
        choice: ''
    })
    const [error, setError] = useState(false);
    const [url, setUrl] = useState(null); //post data
    const [local, setLocal] = useState(null);
    const history = useHistory();

    // questions 선택 항목 저장
    const onQuetions = (index) => {
        const choiceQuestion = index + 1;
        setQuestChoice([...questChoice,choiceQuestion]);
        setId(id + 1);
        goResult();
    };

    // get questions
    const fetchQuestions = async () => {
        try {
            // 요청이 시작 할 때에는 초기화
            setError(null);
            setQuestions(null);
            setQuestChoice([0]);
            setLocal('/result/0010');
            const getResponse = await axios.get('http://localhost:8080/questions');
            setQuestions(getResponse.data); // 데이터는 getResponse.data, setQuestions();
        } catch (e) {
            setError(e);
        }
    };

    // post users (questions, college)
    const postUsers = async () => {
        try {
            setError(null);
            const postResponse = await axios.post('http://localhost:8080/result', {
                choiceId: questChoice,
                college : props.location.state.selectedOption
            });
            setUrl(postResponse.data); //url 저장
        } catch (e) {
            setError(e);
        }
    }

    //components가 처음 렌더링 될 때 요청 
    useEffect(() => {
        fetchQuestions();
        return () => {
            postUsers();
        };
    }, [])
    console.log(local);

    const goResult = () => {
        if (id >= 11) {
            history.push({
                pathname: url,
                state: {local: local}
            });
        }
    };

    if (!questions) return null;

    return (
        <QuestionsImg>
            <GlobalFonts />
            <QuestionsContainer >
                <ProgressBar bgcolor="#14276b" completed={id+1} />
                <Text1Container>개강</Text1Container>
                <Text2Container>종강❤︎</Text2Container>
                <QuestionWrapper >{questions[id].questionContent}</QuestionWrapper>
                <ButtonOptions onMouseEnter={blueBackground} onMouseLeave={whiteBackground} onClick={() => onQuetions(0)} >{questions[id].choices[0].choiceContent}</ButtonOptions>
                <ButtonOptions onMouseEnter={blueBackground} onMouseLeave={whiteBackground} onClick={() =>onQuetions(1)} >{questions[id].choices[1].choiceContent}</ButtonOptions>
                <ButtonOptions onMouseEnter={blueBackground} onMouseLeave={whiteBackground} onClick={() =>onQuetions(2)} >{questions[id].choices[2].choiceContent}</ButtonOptions>
                <ButtonOptions onMouseEnter={blueBackground} onMouseLeave={whiteBackground} onClick={() =>onQuetions(3)} >{questions[id].choices[3].choiceContent}</ButtonOptions>
            </QuestionsContainer>
        </QuestionsImg>
    )
}
export default Questions;
