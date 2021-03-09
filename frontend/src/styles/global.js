// Third party
import { createGlobalStyle } from 'styled-components'

// Local
import { COLORS } from './variables'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscal
  }

  html, body, #root {
    height: 100%;

    .span-no-contacts {
      margin-left: calc(100% - 75%);
      margin-top: 10%;
      font-size: 20px;
      color: ${COLORS.Gray};
    }
  }
`