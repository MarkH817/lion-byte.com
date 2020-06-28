import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import Profile from './images/Profile'
import ProfileCard from './styles/ProfileCard'
import './Introduction.less'

function Introduction () {
  return (
    <ProfileCard>
      <div className='profile-card__image-container'>
        <Profile className='profile-card__image' />
      </div>

      <div className='profile-card__text-container'>
        <p className='profile-card__text'>
          Personal site &amp; blog of <strong>Mark Hernandez</strong>. I'm a
          Software Engineer at gWorks with a specialization in UI/UX,
          JavaScript, and modern web technologies.
        </p>

        <div className='social'>
          <a
            className='social__link'
            href='https://github.com/MarkH817/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
            <span className='social__link-text'>
              <span className='screen-reader'>GitHub</span>
              @markh817
            </span>
          </a>

          <a
            className='social__link'
            href='https://www.twitter.com/lion_byte'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter />
            <span className='social__link-text'>
              <span className='screen-reader'>Twitter</span>
              @lion_byte
            </span>
          </a>

          <a
            className='social__link'
            href='https://www.linkedin.com/in/markhernandez1'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin />
            <span className='social__link-text'>
              <span className='screen-reader'>LinkedIn</span>
              Mark Hernandez
            </span>
          </a>

          <a
            className='social__link'
            href='mailto:mark@lion-byte.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <MdEmail />
            <span className='social__link-text'>
              <span className='screen-reader'>Email</span>
              mark@lion-byte.com
            </span>
          </a>
        </div>
      </div>
    </ProfileCard>
  )
}

export default Introduction
