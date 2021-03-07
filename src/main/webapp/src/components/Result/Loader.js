import React, {useState} from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';
import MainBack from '../../image/question_1920x1080.png';
import MobileBack from '../../image/m_question_bg.png';
import MainFold from '../../image/m_questions_galaxy_fold.png';
import MainS8 from '../../image/m_questions_galaxy_S8.png';
import MainS10 from '../../image/m_questions_galaxy_S10.png';
import Main169 from '../../image/m_questions_galaxy169.png';
import MainTap from '../../image/m_questions_galaxyTab.png';
import MainiPad from '../../image/m_questions_iPad.png';
import MainiPadPro10 from '../../image/m_questions_iPadPro10.png';
import MainiPadPro11 from '../../image/m_questions_iPadPro11.png';
import MainiPadPro12 from '../../image/m_questions_iPadPro12.png';
import MainiPhone11Pro from '../../image/m_questions_iPhone11Pro.png';
import MainiPhone12ProMax from '../../image/m_questions_iPhone12ProMax.png';
import MainiPhone12Pro from '../../image/m_questions_iPhone12Pro.png';
import MainiPhone678Plus from '../../image/m_questions_iPhone678Plus.png';
import MainiPhone678SE from '../../image/m_questions_iPhone678SE.png';
import MainiPhoneXR from '../../image/m_questions_iPhoneXR.png';
import MainWeb1366 from '../../image/m_questions_web1366.png';
import GalaxyTapPortrait from '../../image/m_questions_GalaxyTapPortrait.png';
import iPadPortrait from '../../image/m_questions_iPadPortrait.png';
import iPadPro10Portrait from '../../image/m_questions_iPadPro10Portrait.png';
import iPadPro11Portrait from '../../image/m_questions_iPadPro11Portrait.png';
import iPadPro12Portrait from '../../image/m_questions_iPadPro12Portrait.png';
import GlobalFonts from "../fonts"


const LoadImg = styled.div`
    display: flex;
    background-image: url(${MainBack});
    width: 100%;
    min-height: 100vh;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 500px) {
        background-image: url(${MobileBack});
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

    @media (device-width: 414px) and (device-height: 896px) {
        background-image: url(${MainiPhoneXR});
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

    @media (device-width: 800px) and (device-height: 1280px) { 
        background-image: url(${GalaxyTapPortrait});
    }

    @media (device-width: 768px) and (device-height: 1024px) { 
        background-image: url(${iPadPortrait});
    }

    @media (device-width: 834px) and (device-height: 1112px) { 
        background-image: url(${iPadPro10Portrait});
    }

    @media (device-width: 834px) and (device-height: 1112px) { 
        background-image: url(${iPadPro10Portrait});
    }

    @media (device-width: 834px) and (device-height: 1194px) { 
        background-image: url(${iPadPro11Portrait});
    }

    @media (device-width: 1024px) and (device-height: 1366px) { 
        background-image: url(${iPadPro12Portrait});
    }
`;

const LoadContainer = styled.div`
    position: flex;
    justify-content:center;
    align-items:center;
    margin-bottom: 200px;
`;

const LoadText = styled.h1`
    font-size: 30px;
    font-family: 'BMeU';
    text-align: center;
    color: white;
    text-shadow: 1px 1px gray;
`;

const message = ['성적 공고<br>기다리는중...', '여행 계획<br>세우는중...', '아르바이트<br>찾는중...'];

function Loader({type, color}) {
  const [id, setId] = useState(0);
  const msgToHtml = () => {
    setInterval(() => {
      setId(id +1);
    }, 1000)
    return {__html: message[id]};
  }
  return(
    <LoadImg >
      <GlobalFonts/>
      <LoadContainer>
        <ReactLoading type={type} color={color} height={150} width={150} />
        <LoadText dangerouslySetInnerHTML={msgToHtml()}></LoadText>
      </LoadContainer>
    </LoadImg>
  )
};

export default Loader;
