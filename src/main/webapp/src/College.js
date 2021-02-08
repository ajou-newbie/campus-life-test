import {useState} from "react";
import Downshift from "downshift";
import styled, {css} from "styled-components";
import {Link} from "react-router-dom";
import collegeBackImg from './image/back.jpg';
import triangle from './image/mbti_tri.png'
import GlobalFonts from "./fonts"

const Main = styled.div`
  background-image: url(${collegeBackImg});
  width: 100%;
  height: 100vh;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const Input = styled.div`
  margin-top: 50vh;
  display: flex;
  width: 350px;
  height: 50px;

  input {
    border: 1px solid mistyrose;
    width: 100%;
    margin: 0 auto;
    font-size: 30px;
    font-family: 'BMeU';
    text-align: center;
    color: #1C515A;
    &::placeholder {
      font-family: 'BMeU';
      text-align: center;
      padding: 5px;
      font-size: 30px;
      color: #64939B;
    }
  }

  button {
    background-image: url(${triangle});
    background-repeat: no-repeat;
    background-position: center;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    color: white;
    font-size: 25px;
    width: 40px;
    padding: 24px;
    margin-left: 6px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`;

const Menu = styled.ul`
  width: 350px;
  height: 230px;
  border: 1px solid;
  background-color: white;
  border-radius: 4px;
  white-space: nowrap;
  overflow: auto;
  margin: 0px;
  margin-top: 10px;
  padding: 0px;
`;

const Items = styled.li`
  ${({highlighted, selected}) => {
    if (highlighted) {
        return css`
          background: mistyrose;
        `;
    }
    if (selected) {
        return css`
        background: linen;
      `;
    }
}};

  &::after{
    content: "";
    display: block;
    justify-content: center;
    width: 250px;
    border-bottom: 0.5px solid #929292;
    margin: 3px auto;
  }
    padding: 5px;
    list-style: none;
    text-decoration: none;
    font-family: 'BMeU';
    font-size: 30px;
    color: #1C515A;
`;

const DecisionBtn = styled.button`
  margin: 35px;
  text-decoration: none;
  width: 80px;
  height: 40px;
  border-radius: 18px;
  background-color: white;
  font-size: 20px;
  text-align: center;
  border: 4px solid #1C515A;
  font-family: 'BMeU';
  cursor: pointer;
  color: #1C515A;

  &:hover {
    background-color: rgb(81,138,247);
  }
`;


const items = ["선택안함", "경영대학", "공과대학", "사회과학대학", "예체능대학", "의학/간호대학", "인문대학", "자연과학대학"];

function College() {
    const [selectedOption, setSelectedOption] = useState({
        college: ''
    });

    const onSelect = (selection) => {
        const selectCollege = {
            college: selection
        };
        return setSelectedOption(selectCollege);
    };

    return (
        < Main >
        < GlobalFonts / >
        < Downshift
    onChange = {selection
=>
    onSelect(selection)
}
    onClick = {console.log(selectedOption)} >
        {({
            getInputProps,
            getItemProps,
            getMenuProps,
            getToggleButtonProps,
            isOpen,
            highlightedIndex,
            selectedItem,
        })
=>
    (
    < div >
    < Input >
    < input
    readOnly = {true}
    placeholder = "단과대학 선택"
    {...
        getInputProps()
    }
    />
    < button
    {...
        getToggleButtonProps()
    }
><
    /button>
    < /Input>
    {
        isOpen ? (
            < Menu {...getMenuProps()} >
            {
                items.map((item, index) => (
                    < Items
                highlighted = {highlightedIndex === index
            }
        selected = {selectedItem === item
    }
        {...
            getItemProps({
                key: item,
                index,
                item
            })
        }
    >
        {
            item
        }
    <
        /Items>
    ))
    }
    <
        /Menu>
    ) :
        null
    }
<
    Link
    to = './questions' >
        < DecisionBtn
    {...
        isOpen ? {style: {display: "none"}} : {style: {visibility: "visible"}}
    }
>
    결정
    ! < /DecisionBtn>
    < /Link>
    < /div>
)
}
<
    /Downshift>
    < /Main>
)
    ;
}

export default College;