import { createGlobalStyle } from 'styled-components';
import KoPubDotum from '../fonts/KOPUBWORLDDOTUMMEDIUM.TTF';
import BMEU from '../fonts/BMEULJIROTTF.TTF';
import DaonE from '../fonts/DAON_E_SAENGGAGDAELO100_V0.54.TTF';
import SanDoll from '../fonts/SDKUKDETOPOKKI-BBD.OTF';
import Ghana from '../fonts/GHANACHOCOLATE.TTF';
import Eland from '../fonts/ELANDM.TTF';

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
    @font-face {
        font-family: "DAONE";
        src: local("DAONE"),
        url(${DaonE}) format('truetype');
    }
    @font-face {
        font-family: "SANDOLL";
        src: local("SANDOLL"),
        url(${SanDoll}) format('opentype');
    }
    @font-face {
        font-family: "GHANA";
        src: local("GHANA"),
        url(${Ghana}) format('truetype');
    }
    @font-face {
        font-family: "ELAND";
        src: local("ELAND"),
        url(${Eland}) format('truetype');
    }

    @font-face {
        font-family: "Recipekorea";
        src: local("Recipekorea"),
        url(${Eland}) format('truetype');
    }

    @font-face {
        font-family: "TheFacaeShop";
        src: local("TheFacaeShop"),
        url(${Eland}) format('truetype');
    }
`;