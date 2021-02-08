// Give QuestionText component with "dataParentToChild" prop like below
// <AnswerOptions dataParentToChild = {1} />
// Reference: https://medium.com/@jasminegump/passing-data-between-a-parent-and-child-in-react-deea2ec8e654 (Parent to Child using Function Components)

import {useEffect, useState} from "react";
import styled from 'styled-components';
import axios from "axios";
import {Link} from 'react-router-dom';

const ButtonOptions = styled.button`
    text-align: center;
    color: rgb(17, 47, 56);
    border-radius: 20px;
    background-color: white;
    width: 100%;
    height: 10%;
    padding: 20px 20px 20px 20px;
    border: 2px solid white;
  `;

const UlOptions = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    list-style: none;
    padding: 0px 0px 0px 0px;
    margin: 0 auto;
  `;

const LiOptions = styled.li`
    margin-bottom: 10px;
  `;

function blueBackground(e) {
  e.target.style.background = "rgb(81,138,247)";
  e.target.style.color = "white";
}

function whiteBackground(e) {
  e.target.style.background = "white";
  e.target.style.color = "rgb(17, 47, 56)";
}

function AnswerOptions() {
  const [users, setUsers] = useState(null);
  const [point, setPoint] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchUsers = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setUsers(null);
      setPoint(0);
      // loading 상태를 true 로 바꾼다.
      setLoading(true);
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
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
      < div >
      < UlOptions >
      < LiOptions >
      < ButtonOptions
  onMouseEnter = {blueBackground}
  onMouseLeave = {whiteBackground} > {} < /ButtonOptions>
      < /LiOptions>
      < LiOptions >
      < ButtonOptions
  onMouseEnter = {blueBackground}
  onMouseLeave = {whiteBackground} > {} < /ButtonOptions>
      < /LiOptions>
      < LiOptions >
      < ButtonOptions
  onMouseEnter = {blueBackground}
  onMouseLeave = {whiteBackground} > {} < /ButtonOptions>
      < /LiOptions>
      < LiOptions >
      < ButtonOptions
  onMouseEnter = {blueBackground}
  onMouseLeave = {whiteBackground} > {} < /ButtonOptions>
      < /LiOptions>
      < Link
  to = '/result' >
      < LiOptions >
      < ButtonOptions
  onMouseEnter = {blueBackground}
  onMouseLeave = {whiteBackground} > 결과
  보기 < /ButtonOptions>
  < /LiOptions>
  < /Link>
  < /UlOptions>
  < /div>
)
}

export default AnswerOptions;
