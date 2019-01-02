import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import '@reach/skip-nav/styles.css'
import 'prismjs/themes/prism-okaidia.css'
import 'typeface-nunito'
import 'typeface-open-sans'

const theme = {
  headerFont: `'Nunito', Arial, Helvetica, sans-serif`,
  textFont: `'Open Sans', Arial, Helvetica, sans-serif`,
  blue: '#28579d',
  red: '#e73212',
  black: '#2e2e31',
  grey: '#3a3a3a',
  lightGrey: '#e1e1e1',
  offWhite: '#ededed',
  maxWidth: '750px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
}

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;

    &:focus {
      outline: 0.1rem solid ${props => props.theme.red};
    }

    &::selection {
      background-color: ${props => props.theme.red};
      color: #ffffff;
    }
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
    color: ${props => props.theme.blue};

    &:active {
      color: ${props => props.theme.red};
    }
  }

  p {
    margin-bottom: 2em;
  }

  [data-reach-skip-link] {
    color: cornflowerblue;
    text-decoration: none;

    &:focus {
      outline-color: currentColor;
    }
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
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
