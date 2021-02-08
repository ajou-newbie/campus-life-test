import {useEffect, useState} from "react";
import axios from "axios";
import styled from 'styled-components';
import backImg from './image/Newbie_qu_background.png';
import headerImg from './image/Newbie_req_titletext.png';

const ResultImg = styled.div`
    background-image: url(${backImg});
    width: 100%;
    height: 100vh;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
`;

const Header = styled.div`
    background-image: url(${headerImg});
    margin: 0 auto;
    width: 20vw;
    height: 20vh;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

const ResultContainer = styled.div`
    margin: 0 auto;
    width: 60%;
    height: 75%;
    border: none;
    outline: none;
    background: #ffffff;
    border-radius: 20px;
`;

function Result() {
    const [users, setUsers] = useState(null);
    const [point, setPoint] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [idx, setIdx] = useState(0);

    const fetchUsers = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setUsers(null);
            setPoint(0);
            // loading 상태를 true 로 바꾼다.
            setLoading(true);
            const getResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(getResponse.data); // 데이터는 getResponse.data
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };

    //components가 처음 렌더링 될 때 요청 
    useEffect(() => {
        fetchUsers();
    }, [])

    if (loading) return
<
    div > 로딩중
...<
    /div>
    if (error) return
<
    div > 에러가
    발생했습니다. < /div>
    if (!users) return null;

    return (
        < ResultImg >
        < Header > < /Header>
        < ResultContainer >
        {users[idx].name}
        < /ResultContainer>
        < /ResultImg>
)
}

export default Result;
