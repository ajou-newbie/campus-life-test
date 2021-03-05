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
import MainiPhone12ProMax from '../../image/m_main_iPhone12Pro_Max.png';
import MainiPhone12Pro from '../../image/m_main_iPhone12Pro.png';
import MainiPhone678Plus from '../../image/m_main_iPhone678Plus.png';
import MainiPhone678SE from '../../image/m_main_iPhone678SE.png';
import MainWeb1366 from '../../image/m_main_web1366.png';
import triangle from '../../image/mbti_tri.png'
import GlobalFonts from "../fonts"

const Main = styled.div`
  background-image: url(${MainBack});
  width: 100%;
  height: 100vh;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  display: flex;
  justify-content: center;

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

        
    @media (device-width: 414px) and (device-height: 896px) {  //변경
        background-image: url(${MainiPhone678Plus});
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
      margin-top: 7px;
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
    width: 290px;
  }

  @media (device-width: 375px) { 
    width: 320px;
  }

  input {
    border: none;
    width: 100%;
    font-size: 30px;
    font-family: 'Eland';
    text-align: center;
    color: #1C515A;
    padding-left: 50px;
    border-radius: 0px;

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
    width: 290px;
    height: 100px;
  }

  @media (device-width: 375px) { 
    width: 320px;
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

const items = ['예체능계열', '인문계열', '교육계열', '공학계열', '사회계열', '자연계열', '의약계열', '선택안함']

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
              <FooterText>* 관심있는 전공을 고르셔도 됩니다 :)</FooterText>
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