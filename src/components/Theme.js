import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import 'turretcss/dist/turretcss.min.css'
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
  @font-face {
    font-family: 'PopJoy';
    src: url('/fonts/FOT-PopJoyStd-B.otf');
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

  [data-reach-skip-link] {
    color: ${props => props.theme.primaryColor};
    text-decoration: none;

    &:focus {
      outline-color: currentColor;
    }
  }
`

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 */
export function Theme (props) {
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
