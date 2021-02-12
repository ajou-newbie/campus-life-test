import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";
import {BrowserRouter as Router,Link } from 'react-router-dom';
import ProgressBar from './components/ProgressBar';
import backImg from './image/Newbie_qu_background.png';
import GlobalFonts from "./fonts"

const QuestionsImg = styled.div`
    display: flex;
    background-image: url(${backImg});
    width: 100%;
    min-height: 100vh;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    justify-content: center;
    align-items: center;
`;

const QuestionsContainer = styled.div`
    width: 60%;
    object-fit: cover;
    text-align: center;
    justify-content: center;
    align-items: center;
    
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
    margin: 0px 0px 80px 0px;
    color: white;
    font-size: 20px;
    font-family: 'BMeU';
    text-align: center;
    margin-top: 30px;
`;

const Text1Container = styled.div`
    text-align: left;
    font-family: 'BMeU';
    font-size: 20px;
    margin: 5px;
`;

const Text2Container = styled.div`
    font-family: 'BMeU';
    text-align: right;
    font-size: 20px;
    margin-top: -20px;
`;

const ButtonOptions = styled.button`
    text-align: center;
    color: #1C515A;
    width: 50%;
    border-radius: 20px;
    background-color: white;
    padding: 20px 20px 20px 20px;
    border: 2px solid white;
    font-size: 20px;
    font-family: 'BMeU';
    margin: 5px;
    padding: 20px;
`;

const UlOptions = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    list-style: none;
    height: 25%;
    padding: 0px 0px 20px 0px;
    margin: 0px 0px 80px 0px;
`;

const LiOptions = styled.li`
    margin-bottom: '5%';
`;

function blueBackground(e) {
    e.target.style.background = "rgb(81,138,247)";
    e.target.style.color = "white";
}

function whiteBackground(e) {
    e.target.style.background = "white";
    e.target.style.color = "rgb(17, 47, 56)";
}

function Questions({selection}) {
    const [questions, setQuestions] = useState(null); // test data
    const [text, setTexts] = useState(null);
    const [id, setId] = useState(0); // id
    const [questChoice, setQuestChoice] = useState({ // 문항 선택 정보 저장 test
        choice: '' //바꿔줘야함
    })

    const [college, setCollege] = useState({ // college state
        college: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    // questions 선택 항목 저장
    const onQuetions = () => {
        // const choiceQuestion = {
        //     choiceId: quetions[id].choices.choiceId
        // }
        const choiceQuestion = {
            name: questions[id].questionContent,
        };
        setQuestChoice([...questChoice,choiceQuestion]);
        setId(id + 1);
    };

    // college 선택 항목 저장
    const onCollege = () => {
        const choiceCollege = {
            college: selection
        }
        setCollege(choiceCollege);
    }

    // get questions
    const fetchQuestions = async () => {
        try {
            // 요청이 시작 할 때에는 초기화
            setError(null);
            setQuestions(null);
            setQuestChoice([0]);
            setLoading(true);
            const getResponse = await axios.get('http://localhost:8080/questions');
            setQuestions(getResponse.data); // 데이터는 getResponse.data, setQuestions();
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };

    // post users (questions, college)
    const postUsers = async () => {
        try {
            setError(null);
            setLoading(true);
            const postResponse = await axios.post('http://localhost:8080/result', {
                choiceId: questChoice,
                college : "사회과학대학"
            });
            setQuestChoice(postResponse.questChoice);
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    }

    //components가 처음 렌더링 될 때 요청
    useEffect(() => {
        onCollege();
        fetchQuestions();
        return () => {
            postUsers();
        };
    }, [])

    if (loading) return <div>로딩중...</div>
    if (!questions) return null;
    if(id === 10) {
        return <Link to = './result'>
            <LiOptions>
                <ButtonOptions onMouseEnter={blueBackground} onMouseLeave={whiteBackground}>
                    결과보기
                </ButtonOptions>
            </LiOptions>
        </Link>
    }

    return (
        <QuestionsImg>
            <GlobalFonts />
            <QuestionsContainer >
                <ProgressBar bgcolor="#14276b" completed={id} />
                <Text1Container>개강</Text1Container>
                <Text2Container>종강</Text2Container>
                <QuestionWrapper>{questions[id].questionContent}{console.log(questChoice)}</QuestionWrapper>
                <UlOptions>
                    <LiOptions>
                        <ButtonOptions onMouseEnter={blueBackground} onMouseLeave={whiteBackground} onClick={onQuetions}>{questions[id].choices[0].choiceContent}</ButtonOptions>
                    </LiOptions>
                    <LiOptions>
                        <ButtonOptions onMouseEnter={blueBackground} onMouseLeave={whiteBackground} onClick={onQuetions}>{questions[id].choices[1].choiceContent}</ButtonOptions>
                    </LiOptions>
                    <LiOptions>
                        <ButtonOptions onMouseEnter={blueBackground} onMouseLeave={whiteBackground} onClick={onQuetions}>{questions[id].choices[2].choiceContent}</ButtonOptions>
                    </LiOptions>
                    <LiOptions>
                        <ButtonOptions onMouseEnter={blueBackground} onMouseLeave={whiteBackground} onClick={onQuetions}>{questions[id].choices[3].choiceContent}</ButtonOptions>
                    </LiOptions>
                </UlOptions>
            </QuestionsContainer>
        </QuestionsImg>
    )
}
export default Questions;
