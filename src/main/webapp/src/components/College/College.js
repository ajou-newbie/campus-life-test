import React, { useState, createContext } from "react";
import Downshift from "downshift";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import collegeBackImg from '../../image/college_bg.png';
import collegeMobileBackImg from '../../image/m_college_bg.png';
import triangle from '../../image/mbti_tri.png'
import GlobalFonts from "../fonts"

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

  @media screen and (max-width: 500px) {
        background-image: url(${collegeMobileBackImg});
    }
`;

const Input = styled.div`
  margin-top: 60vh;
  display: flex;
  width: 350px;
  height: 50px;

  input {
    border: none;
    width: 100%;
    font-size: 30px;
    font-family: 'Eland';
    text-align: center;
    color: #1C515A;
    padding-left: 50px;

    &::placeholder {
      font-family: 'Eland';
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
    border: none;
    color: white;
    font-size: 25px;
    width: 40px;
    padding: 24px;
    margin: 0 auto;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }
`;

const Menu = styled.ul`
  width: 350px;
  height: 200px;
  border: none;
  background-color: white;
  white-space: nowrap;
  overflow: auto;
  margin: 0px;
  padding: 0px;

  /* &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #1C515A;
    border-radius: 200px;
    height: 1px;
  }
  &::-webkit-scrollbar-track{
    width: 1px;
    height: 1px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    background-color: #1C515A;
    background-clip: content-box;
  } */
`;

const Items = styled.li`
  ${({ highlighted, selected }) => {
  if (highlighted) {
    return css`
          background: #64939B;
        `;
  }
  if (selected) {
    return css`
        background: white;
      `;
  }
}};

  &::after{
    content: "";
    display: block;
    justify-content: center;
    width: 250px;
    /* border-bottom: 0.25px solid #929292; */ // 밑줄
    margin: 3px auto;
  }

    padding: 5px;
    list-style: none;
    text-decoration: none;
    font-family: 'Eland';
    font-size: 30px;
    color: #1C515A;
    margin-bottom: 5px;
`;

const DecisionBtn = styled.button`
  margin: 15px;
  padding: 6px 6px;
  text-decoration: none;
  width: 80px;
  height: 40px;
  border-radius: 18px;
  background-color: white;
  font-size: 20px;
  text-align: center;
  border: 4px solid #1C515A;
  font-family: 'Eland';
  cursor: pointer;
  color: #1C515A;

  &:hover {
    background-color: rgb(81,138,247);
  }
`;

const items = ['선택안함', '인문계열', '교육계열', '공학계열', '사회계열', '자연계열', '의약계열', '예체능계열']

function College() {
  const [selectedOption, setSelectedOption] = useState({
    college: ''
  });

  const onSelect = (selection) => {
    const selectCollege = selection
    return setSelectedOption(selectCollege)
  };

  return (
    <Main>
      <GlobalFonts/>
      <Downshift onChange={selection => onSelect(selection)
      } onClick={console.log(selectedOption)}>
        {({
          getInputProps,
          getItemProps,
          getMenuProps,
          getToggleButtonProps,
          isOpen,
          highlightedIndex,
          selectedItem,
        }) => (
          <div>
            <Input>
              <input
                readOnly={true}
                placeholder="전공계열 선택"
                {...getInputProps()}
              />
              <button {...getToggleButtonProps()}></button>
            </Input>
            {isOpen ? (
              <Menu {...getMenuProps()}>
                {items.map((item, index) => (
                  <Items
                    highlighted={highlightedIndex === index}
                    selected={selectedItem === item}
                    {...getItemProps({
                      key: item,
                      index,
                      item
                    })}
                  >
                    {item}
                  </Items>
                ))}
              </Menu>
            ) : null}
            <Link to ={{pathname: "./questions", state:{selectedOption}}}>
              <DecisionBtn {...isOpen ? {style : {display:"none"}} : {style : {visibility:"visible"}} }>결정!</DecisionBtn>
            </Link>
          </div>
        )}
      </Downshift>
    </Main>
  );
}

export default College;