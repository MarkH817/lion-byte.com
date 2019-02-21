import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import '@reach/skip-nav/styles.css'
import 'prismjs/themes/prism-solarizedlight.css'
import 'typeface-nunito'
import 'typeface-open-sans'

const theme = {
  headerFont: `'Nunito', Arial, Helvetica, sans-serif`,
  textFont: `'Open Sans', Arial, Helvetica, sans-serif`,
  primaryColor: '#28579d',
  accentColor: '#e73212',
  black: '#2e2e31',
  gray: '#3a3a3a'
}

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;

    &:focus {
      outline: 0.1rem solid ${props => props.theme.accentColor};
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
    line-height: 1.3;
    margin: 0;
    padding: 0;
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

  p {
    margin-bottom: 2em;
  }

  [data-reach-skip-link] {
    color: ${props => props.theme.primaryColor};
    text-decoration: none;

    &:focus {
      outline-color: currentColor;
    }
  }
`

export const Theme = props => {
  const { children } = props

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyles />

        {children}
      </React.Fragment>
    </ThemeProvider>
  )
}

export default Theme
