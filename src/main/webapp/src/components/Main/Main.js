import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import MainBack from '../../image/main_bg.png';
import MobileBack from '../../image/m_main_bg.png';
import IndexButton from '../../image/IndexButton.png';
import IndexButtonOnClick from '../../image/IndexButtonOnClick.png';
import GlobalFonts from "../fonts";


const MainImage = styled.div`
    background-image: url(${MainBack});
    margin: 0;
    width: 100vw;
    height: 100vh;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;

    @media screen and (max-width: 500px) {
        background-image: url(${MobileBack});
    }
`;

const MainButton = styled.button`
    background-image: url(${IndexButton});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
    border: none;
    width: 100vw;
    height: 11vh;
    position: absolute;
    margin: 0;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    
    &:hover {
        background-image: url(${IndexButtonOnClick});
    }
    &:active {
        background-image: url(${IndexButtonOnClick});
    }
    &:focus {
        outline:none;
    }
`;

const NewbieCount = styled.p`
    text-decoration: none;
    position: absolute;
    margin: 0;
    top: 57%;
    left: 50%;
    width: 100%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    font-family: 'BMeU';
    font-size: 3vh;
`;

function Main() {
    const [counts, setCounts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchCounts = async () => {
        try{
            setError(null);
            setCounts(null);
            setLoading(true);
            const getCounts = await axios.get('https://jsonplaceholder.typicode.com/users') //http://localhost:8080/result
            setCounts(getCounts.data);
        } catch(e) {
            setError(e)
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchCounts();
    }, [])

    if (loading) return <div>로딩중...</div>
    if (error) return <div>에러가 발생했습니다.</div>

    return (
        <MainImage>
            <GlobalFonts/>
            <NewbieCount>현재 <b>123,456명의 새내기</b>가 입학했어요</NewbieCount>
            <Link to = "/college" >
                <MainButton></MainButton>
            </Link>
        </MainImage>
    )
}

export default Main;
