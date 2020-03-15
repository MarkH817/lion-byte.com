import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import styled from 'styled-components'

import Profile from './images/Profile'
import ProfileCard from './styles/ProfileCard'

const Social = styled.div`
  &,
  a {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
  }

  & {
    justify-content: center;
  }

  a {
    margin-right: 1em;
    text-decoration: none;

    span {
      padding-left: 0.25ch;
    }
  }
`

export function Introduction () {
  return (
    <ProfileCard>
      <div className='image'>
        <Profile />
      </div>

      <div className='text'>
        <p>
          Personal site &amp; blog of <strong>Mark Hernandez</strong>. I'm a
          Software Engineer at gWorks with a specialization in UI/UX,
          JavaScript, and modern web technologies.
        </p>

        <Social>
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
        </Social>
      </div>
    </ProfileCard>
  )
}

export default Introduction
