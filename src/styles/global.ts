import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root{
    --color-background: #0D1117;
    --color-background-light: #21262D;
    --color-gray-line: #DCDDE0;
    --color-text: #C9D1D9;
    --color-text-highlight: #B2B9FF;
    --color-title: #CCD6F6;
    --color-red: #C53030;
    --color-green: #4CD62B;
    --color-purple: #6E40C9;
    --color-purple-dark: #5931A9;
    --color-twitter: #2AA9E0;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    color: var(--color-text);
    background: var(--color-background);
  }

  body,
  input,
  textarea,
  button {
    font: 400 1rem 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  #root {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 2.5rem 2rem;
    height: 100vh;
    max-width: 992px;
  }
`;