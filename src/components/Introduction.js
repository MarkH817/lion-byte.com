import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import styled from 'styled-components'

import Profile from './Profile'

const IntroductionStyles = styled.section`
  &,
  .icon,
  .social,
  .social a {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
  }

  .icon {
    flex: 1 0 auto;
    justify-content: center;
  }

  .description {
    flex: 5 1 20em;
    margin: 0 1em;

    p {
      max-width: 40em;
      margin: 1em auto;
    }
  }

  .social {
    justify-content: center;

    a {
      margin-right: 1em;
      text-decoration: none;

      span {
        padding-left: 0.25ch;
      }
    }
  }
`

export const Introduction = () => (
  <IntroductionStyles>
    <div className='icon'>
      <Profile />
    </div>

    <div className='description'>
      <p>
        Personal site &amp; blog of <strong>Mark Hernandez</strong>. I'm a web
        developer and a recent graduate from the University of Nebraska -
        Lincoln with a major in computer science.
      </p>

      <div className='social'>
        <a
          href='https://github.com/MarkH817/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub />
          <span>@markh817</span>
        </a>

        <a
          href='https://www.twitter.com/lion_byte'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaTwitter />
          <span>@lion_byte</span>
        </a>

        <a
          href='https://www.linkedin.com/in/markhernandez1'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin />
          <span>Mark Hernandez</span>
        </a>

        <a
          href='mailto:mark@lion-byte.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <MdEmail />
          <span>mark@lion-byte.com</span>
        </a>
      </div>
    </div>
  </IntroductionStyles>
)

export default Introduction
