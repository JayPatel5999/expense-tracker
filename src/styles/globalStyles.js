import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root{
        --primary-color: #222260;
        --primary-color2: rgba(34, 34, 96, .6);
        --primary-color3: rgba(34, 34, 96, .4);
        --color-green: #42AD00;
        --color-grey: #aaa;
        --color-accent: #F56692;
        --color-delete: #FF0000;
    }

    body, h1, h2, h3, h4, h5, h6, p, span {
        font-family: 'Nunito', sans-serif !important;
    }

    body {
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        overflow: hidden;
        color: rgba(34, 34, 96, .6);
    }

    h1, h2, h3, h4, h5, h6 {
        color: var(--primary-color);
    }
`
