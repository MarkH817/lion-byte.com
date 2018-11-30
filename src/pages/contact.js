import React from 'react'

import Page from '../templates/Page'

export const Contact = props => (
  <Page title='Contact'>
    <h1>Contact</h1>

    <p>
      Hi there! Feel free to contact me through the email listed below.
      I&apos;ll try to reply within 1-2 days.
    </p>

    <p>
      <a href='mailto:mark@lion-byte.com'>mark@lion-byte.com</a>
    </p>

    <p>
      <a
        href='https://github.com/MarkH817/'
        target='_blank'
        rel='noopener noreferrer'
      >
        GitHub
      </a>
      {' | '}
      <a
        href='https://www.twitter.com/lion_byte'
        target='_blank'
        rel='noopener noreferrer'
      >
        Twitter
      </a>
      {' | '}
      <a
        href='https://www.linkedin.com/in/markhernandez1'
        target='_blank'
        rel='noopener noreferrer'
      >
        Linkedin
      </a>
    </p>
  </Page>
)

export default Contact
