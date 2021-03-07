import React, { useState, createContext } from "react";
import Downshift from "downshift";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import MainBack from '../../image/main_bg.png';
import MainMBack from '../../image/m_main_bg.png';
import MainFold from '../../image/m_main_galaxy_fold.png';
import MainS8 from '../../image/m_main_galaxy_S8.png';
import MainS10 from '../../image/m_main_galaxy_S10.png';
import Main169 from '../../image/m_main_galaxy169.png';
import MainTap from '../../image/m_main_galaxytab10.png';
import MainiPad from '../../image/m_main_iPad.png';
import MainiPadPro10 from '../../image/m_main_iPadPro10.png';
import MainiPadPro11 from '../../image/m_main_iPadPro11.png';
import MainiPadPro12 from '../../image/m_main_iPadPro12.png';
import MainiPhone11Pro from '../../image/m_main_iPhone11Pro.png';
//import MainiPhoneXR from '../../image/m_main_iPhoneXR.png';
import MainiPhone12ProMax from '../../image/m_main_iPhone12Pro_Max.png';
import MainiPhone12Pro from '../../image/m_main_iPhone12Pro.png';
import MainiPhone678Plus from '../../image/m_main_iPhone678Plus.png';
import MainiPhone678SE from '../../image/m_main_iPhone678SE.png';
import MainWeb1366 from '../../image/m_main_web1366.png';
import triangle from '../../image/mbti_tri.png'
import GlobalFonts from "../fonts"
import { FaSortDown } from 'react-icons/fa';
const Main = styled.div`
   background-image: url(${MainBack});
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    position: fixed;

    @media only screen and (max-width: 500px) {
        background-image: url(${MainMBack});
    }

    @media (device-width: 360px) and (device-height: 740px){ 
        background-image: url(${MainS8});
    }       

    @media (device-width: 360px) and (device-height: 760px){ 
        background-image: url(${MainS10});
    }  

    @media (device-width: 384px) and (device-height: 538px) { 
        background-image: url(${MainFold});
    }

    @media (device-width: 360px) and (device-height: 640px) { 
        background-image: url(${Main169});
    }

    @media (device-width: 414px) { 
        background-image: url(${MainiPhone678Plus});
    }

    @media (device-width: 375px) and (device-height: 812px) { 
        background-image: url(${MainiPhone11Pro});
    }

    @media (device-width: 375px) and (device-height: 667px) { 
        background-image: url(${MainiPhone678SE});
    }

    @media (device-width: 390px) { 
        background-image: url(${MainiPhone12Pro});
    }

    @media (device-width: 428px) { 
        background-image: url(${MainiPhone12ProMax});
    }

        
    

    @media (device-width: 1280px) and (device-height: 800px)  { 
        background-image: url(${MainTap});
    }

    @media (device-width: 1024px) { 
        background-image: url(${MainiPad});
    }

    @media (device-width: 1112px) { 
        background-image: url(${MainiPadPro10});
    }

    @media (device-width: 1194px) { 
        background-image: url(${MainiPadPro11});
    }

    @media (device-width: 1366px) and (device-height:1024px) { 
        background-image: url(${MainiPadPro12});
    }

    @media (device-width: 1366px) and (device-height:768px) { 
        background-image: url(${MainWeb1366});
    }
`;

const Container = styled.div`
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%);
    display: flex;
    justify-content: center;
    align-self: center;
    flex-direction: column;
`;

const FlexContainer = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
`;

const WhiteText = styled.div`
    font-family: 'SANDOLL';
    font-size: 70px;
    color: white;
    text-shadow: 4px 4px #29879599;
    text-align: center;

    @media (min-width: 1900px) {
      font-size: 100px;
    }

    @media (min-width: 280px) and (max-width: 320px) {
      font-size: 40px;
    }

    @media (min-width: 325px) and (max-width: 414px) {
      font-size: 50px;
    } 
`;

const YellowText = styled.div`
    font-family: 'SANDOLL';
    font-size: 70px;
    color: #FFFF00;
    text-shadow: 4px 4px #29879599;

    @media (min-width: 1900px) {
      font-size: 100px;
    }

    @media (min-width: 280px) and (max-width: 320px) {
      font-size: 40px;
    }

    @media (min-width: 325px) and (max-width: 414px) {
      font-size: 50px;
    } 
`;

const FooterText = styled.div`
    font-family: 'KoPub Dotum';
    font-size: 20px;
    color: white;
    text-align: center;
    margin-top: 15px;

    @media (min-width: 1900px) {
      font-size: 30px;
    }

    @media (min-width: 280px) and (max-width: 320px) {
      font-size: 15px;
    }

    @media (min-width: 325px) and (max-width: 414px) {
      font-size: 16px;
    }
`;

const Input = styled.div`
  display: flex;
  justify-content: center;
  width: 407px;
  margin-top: 15px;
  
  @media (min-width: 1900px) {
    width: 590px;
  }

  @media (min-width: 280px) and (max-width: 320px) {
    width: 250px;
  }

  @media (min-width: 325px) and (max-width: 414px) {
    width: 300px;
  }

  input {
    border: none;
    width: 100%;
    font-family: 'Eland';
    text-align: center;
    color: #1C515A;
    padding-left: 34px;
    border-radius: 0px;
    font-size: 30px;

    @media (min-width: 1900px) {
      height: 70px;
      font-size: 40px;
    }

    @media (min-width: 280px) and (max-width: 320px) {
      height: 40px;
      font-size: 20px;
    }

    &::placeholder {
      font-family: 'Eland';
      text-align: center;
      padding: 5px;
      font-size: 30px;
      color: #1C515A; 
    }

    &:focus {
      outline: none;
    }
  }

  button {
    background-image: url(${triangle});
    background-repeat: no-repeat;
    background-size: 12px;
    background-position: center;
    background-color: white;
    border: none;
    color: white;
    padding: 25px 25px 25px 25px;
    margin: 0 auto;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    @media (min-width: 1900px) {
      padding: 35px 35px 35px 35px;
    }

    @media (min-width: 280px) and (max-width: 320px) {
      padding: 20px 20px 20px 20px;
    }
  }
`;

const Menu = styled.ul`
  width: 407px;
  height: 200px;
  border: none;
  background-color: white;
  white-space: nowrap;
  overflow: auto;
  margin: 0px;
  padding: 0px;

  @media (min-width: 1900px) {
    width: 590px;
    height: 250px;
  }

  @media (min-width: 280px) and (max-width: 320px) {
    width: 250px;
    height: 150px;
  }

  @media (min-width: 325px) and (max-width: 414px) {
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

    @media (min-width: 1900px) {
      font-size: 40px;
    }

    @media (min-width: 280px) and (max-width: 320px) {
      font-size: 20px;
    }
`;

const DecisionBtn = styled.button`
  margin: 15px;
  padding: 0;
  text-decoration: none;
  width: 80px;
  height: 40px;
  border-radius: 18px;
  background-color: white;
  font-size: 20px;
  border: 4px solid #1C515A;
  font-family: 'Eland';
  cursor: pointer;
  color: #1C515A;

  &:hover {
    background-color: rgb(81,138,247);
  }

  @media (min-width: 1900px) {
    width: 90px;
    height: 50px;
    border-radius: 24px;
    margin-top: 30px;
  }

  @media (min-width: 280px) and (max-width: 320px) {
    width: 65px;
    height: 35px;
    font-size: 15px;
  }

  @media (min-width: 325px) and (max-width: 414px) {
    margin-top: 40px;
  }

`;

const items = ['예체능계열', '인문계열', '교육계열', '공학계열', '사회계열', '자연계열', '의약계열', '선택안함']

function College() {
  const [selectedOption, setSelectedOption] = useState('선택안함');

  const onSelect = (selection) => {
    const selectCollege = selection
    return setSelectedOption(selectCollege)
  };

  return (
    <Main>
      <Container>
        <GlobalFonts/>
        <Downshift onChange={selection => onSelect(selection)}>
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
              <FlexContainer>
                <WhiteText>당신의&nbsp;</WhiteText><YellowText>전공</YellowText><WhiteText>을</WhiteText>
              </FlexContainer>
              <WhiteText>알려주세요!</WhiteText>
              <FooterText>* 관심있는 전공을 고르셔도 됩니다 :)</FooterText>
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
      </Container>
    </Main>
  );
}

export default College;