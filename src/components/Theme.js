import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const baseFonts = 'Arial,Helvetica,sans-serif'

const theme = {
  headerFont: `'Nunito',${baseFonts}`,
  textFont: `'Open Sans',${baseFonts}`,
  primaryColor: '#28579d',
  accentColor: '#e73212',
  black: '#2e2e31',
  gray: '#3a3a3a'
}

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'PopJoy';
    src: url('/fonts/FOT-PopJoyStd-B.otf');
  }

  :root {
    font-size: 1rem;
  }

  * {
    &:focus {
      outline-color: ${props => props.theme.accentColor};
    }

    &::selection {
      background-color: ${props => props.theme.accentColor};
      color: #ffffff;
    }
  }

  html {
    background-color: #ffffff;
  }

  body {
    font-family: ${props => props.theme.textFont};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${props => props.theme.headerFont};
  }

  a {
    color: ${props => props.theme.primaryColor};

    &:active {
      color: ${props => props.theme.accentColor};
    }
  }
`

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 */
function Theme (props) {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyles />
        {props.children}
      </React.Fragment>
    </ThemeProvider>
  )
}

export default Theme
