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

    /* sensible default box-sizing and touch-friendly settings */
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body, h1, h2, h3, h4, h5, h6, p, span {
        font-family: 'Nunito', sans-serif !important;
    }

    body {
        font-size: clamp(0.95rem, 1.5vw, 1.15rem);
        /* allow natural scrolling on small screens */
        overflow: auto;
        -webkit-font-smoothing:antialiased;
        -moz-osx-font-smoothing:grayscale;
        color: rgba(34, 34, 96, .6);
    }

    /* Make images and media responsive by default */
    img, picture, video, svg {
        max-width: 100%;
        height: auto;
        display: block;
    }

    h1, h2, h3, h4, h5, h6 {
        color: var(--primary-color);
    }
`
