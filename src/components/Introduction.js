import React from 'react'
import styled from 'styled-components'

import Profile from './Profile'

const IntroductionStyles = styled.section`
  display: flex;
  align-items: center;
`

const Description = styled.section`
  flex: 1 1 auto;
  margin: 0 1em;
`

export const Introduction = () => (
  <IntroductionStyles>
    <section>
      <Profile />
    </section>

    <Description>
      <p>
        Personal site &amp; blog of <strong>Mark Hernandez</strong>. I'm a web
        developer and a recent graduate from the University of Nebraska -
        Lincoln with a major in computer science.
      </p>
    </Description>
  </IntroductionStyles>
)

export default Introduction
