import * as STYLED from 'styled-components'

declare module 'styled-components' {
  interface DefaultTheme {
    headerFont: string
    textFont: string
    blue: string
    red: string
    black: string
    grey: string
    lightGrey: string
    offWhite: string
    maxWidth: string
    bs: string
  }
}
