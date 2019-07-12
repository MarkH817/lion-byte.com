import React from 'react'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import styled from 'styled-components'

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

const PROFILE_IMAGE_QUERY = graphql`
  query PROFILE_IMAGE_QUERY {
    profileImage: imageSharp(original: { src: { regex: "/profile/" } }) {
      fixed(width: 160, height: 160) {
        aspectRatio
        width
        height
        src
        srcSet
        srcWebp
        srcSetWebp
        base64
      }
    }
  }
`

export function Profile () {
  const data = useStaticQuery(PROFILE_IMAGE_QUERY)

  return <Image fixed={data.profileImage.fixed} alt='Mark Hernandez' />
}

export const Introduction = () => (
  <ProfileCard>
    <div className='image'>
      <Profile />
    </div>

    <div className='text'>
      <p>
        Personal site &amp; blog of <strong>Mark Hernandez</strong>. I'm a web
        developer and a recent graduate from the University of Nebraska -
        Lincoln with a major in computer science.
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

export default Introduction
