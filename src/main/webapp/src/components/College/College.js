import React, { useState, createContext } from "react";
import Downshift from "downshift";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import MobileBack from '../../image/m_main_bg.png';
import MobileBackw384 from '../../image/m_main_bg_w384.png';
import MobileBackh740 from '../../image/m_main_bg_h740.png';
import MobileBackw1280 from '../../image/main_bg_w1280.png';
import MobileBackw1024 from '../../image/main_bg_w1024.png';
import triangle from '../../image/mbti_tri.png'
import GlobalFonts from "../fonts"

const Main = styled.div`
  background-image: url(${MobileBackw1280});
  width: 100%;
  height: 100vh;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  display: flex;
  justify-content: center;

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

const TextContainer = styled.div`
    width: 100%;
    padding: 220px 0px 0px 0px;

    @media (device-width: 360px) { 
      margin-top: 50px;
    }

    @media (device-width: 384px) and (device-height: 538px) { 
      padding: 160px 0px 0px 0px;
    }

    @media (device-width: 360px) and (device-height: 640px) { 
      padding: 140px 0px 0px 0px;
    }

    @media (device-width: 428px) { 
      padding: 340px 0px 0px 0px;
    }

    @media (device-width: 390px) { 
      padding: 300px 0px 0px 0px;
    }

    @media (device-width: 414px) { 
      padding: 230px 0px 0px 0px;
    }

    @media (device-width: 375px) { 
      padding: 210px 0px 0px 0px;
    }

    @media (device-width: 375px) and (min-height: 812px) { 
      padding: 300px 0px 0px 0px;
    }

    @media (device-width: 414px) and (min-height: 896px) { 
      padding: 330px 0px 0px 0px;
    }

    @media (device-width: 1280px) { 
      padding: 250px 0px 0px 0px;
    }

    @media (device-width: 1024px) { 
      padding: 250px 0px 0px 0px;
    }

    @media (device-width: 1112px) { 
      padding: 265px 0px 0px 0px;
    }

    @media (device-width: 1194px) { 
      padding: 255px 0px 0px 0px;
    }

    @media (device-width: 1366px) { 
      padding: 355px 0px 0px 0px;
    }

    @media (device-width: 1366px) and (device-height: 768px) { 
        padding: 240px 0px 0px 0px;
    }

`;

const FlexContainer = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
`;

const WhiteText = styled.div`
    font-family: 'SANDOLL';
    font-size: 60px;
    color: white;
    text-shadow: 4px 4px #29879599;
    text-align: center;

    @media (device-width: 360px) { 
      font-size: 50px;
    }

    @media (device-width: 384px) and (device-height: 538px) { 
      font-size: 50px;
    }

    @media (device-width: 375px) { 
      font-size: 55px;
    }

`;

const YellowText = styled.div`
    font-family: 'SANDOLL';
    font-size: 60px;
    color: #FFFF00;
    text-shadow: 4px 4px #29879599;

    @media (device-width: 360px) { 
      font-size: 50px;
    }

    @media (device-width: 384px) and (device-height: 538px) { 
      font-size: 50px;
    }

    @media (device-width: 375px) { 
      font-size: 55px;
    }
`;

const FooterText = styled.div`
    font-family: 'KoPub Dotum';
    font-size: 15px;
    color: white;
    padding: 30px 0px 0px 0px;
    text-align: center;

    @media (device-width: 360px) { 
      font-size: 15px;
    }

    @media (device-width: 384px) and (device-height: 538px) { 
      font-size: 13px;
    }

    @media (device-width: 360px) and (device-height: 640px) { 
      font-size: 13px;
    }
`;


const Input = styled.div`
  margin-top: 3vh;
  display: flex;
  justify-content: center;
  width: 350px;
  height: 50px;

  @media (device-width: 360px) { 
    width: 290px;
  }

  @media (device-width: 384px) and (device-height: 538px) { 
    width: 250px;
  }

  @media (device-width: 375px) { 
    width: 300px;
  }

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
      color: #1C515A;
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

  @media (device-width: 360px) { 
    width: 290px;
  }

  @media (device-width: 384px) and (device-height: 538px) { 
    width: 250px;
    height: 100px;
  }

  @media (device-width: 375px) { 
    width: 300px;
  }

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
  const [selectedOption, setSelectedOption] = useState('선택안함');

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
            <TextContainer>
              <FlexContainer>
                <WhiteText>당신의&nbsp;</WhiteText><YellowText>전공</YellowText><WhiteText>을</WhiteText>
              </FlexContainer>
              <WhiteText>알려주세요!</WhiteText>
              <FooterText>* 가고 싶거나 관심있는 전공을 고르셔도 됩니다:)</FooterText>
            </TextContainer>
            <Input>
              <input
                readOnly={true}
                placeholder="선택안함"
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