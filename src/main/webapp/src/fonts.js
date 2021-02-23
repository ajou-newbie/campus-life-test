import { createGlobalStyle } from 'styled-components';

import KoPubDotum from './fonts/KOPUBWORLDDOTUMMEDIUM.TTF';
import BMEU from './fonts/BMEULJIROTTF.TTF';

export default createGlobalStyle`
    @font-face {
        font-family: "KoPub Dotum";
        src: local("KoPub Dotum"),
        url(${KoPubDotum}) format('truetype');
    }
    @font-face {
        font-family: "BMeU";
        src: local("BMeU"),
        url(${BMEU}) format('truetype');
    }
    
`;