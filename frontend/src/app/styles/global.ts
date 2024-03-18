import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    input:focus {
      outline: 0;
      box-shadow: 0 0 0 2px #151515;
    }

    input:hover {
      border-color: #333333;
    }
 }
 `
