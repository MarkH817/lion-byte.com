import React from 'react'
import { ThemeProvider } from 'styled-components'
import 'typeface-nunito'
import 'typeface-open-sans'

import Layout from './src/components/Layout'
import './src/styles/main.less'

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

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Layout>{element}</Layout>
  </ThemeProvider>
)
