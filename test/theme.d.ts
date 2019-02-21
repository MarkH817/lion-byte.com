import * as STYLED from 'styled-components'

declare module 'styled-components' {
  interface DefaultTheme {
    headerFont: string
    textFont: string
    primaryColor: string
    accentColor: string
    black: string
    gray: string
  }
}
