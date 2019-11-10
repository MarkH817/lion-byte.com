import React from 'react'

import Page from '../templates/Page'
import MyPhoto from '../components/images/MyPhoto'
import ProfileCard from '../components/styles/ProfileCard'

export function About () {
  return (
    <Page title='About'>
      <h1>About</h1>

      <ProfileCard className='reverse'>
        <div className='text'>
          <p>Hello, my name is Mark Hernandez.</p>

          <p>
            I recently graduated from the University of Nebraska - Lincoln with
            a major in computer science. I started doing web development when I
            wanted to change the design of my Tumblr page back in 2011. Now, I
            use React, GraphQL, TypeScript, and other tools to get my side
            projects developed quickly. My overall goal is just to keep learning
            new technologies and maintaining a healthy work-life balance.
          </p>
        </div>

        <div className='image'>
          <MyPhoto />
        </div>
      </ProfileCard>

      <div>
        <h2>More Information</h2>
        <h3>Education</h3>
        <h4>University of Nebraska - Lincoln</h4>
        <p>
          Graduated: December 2018
          <br />
          Major: Computer Science
          <br />
          Minor: Mathematics
          <br />
          GPA: 3.651 / 4.000
        </p>
        <h3>Experience</h3>
        <h4>Software Engineer</h4>
        <h5>November 2019 - Present</h5>
        <h4>Software Application Programmer I</h4>
        <h5>March 2019 - October 2019</h5>
        <h4>Undergraduate Research Assistant</h4>
        <h5>May 2018 - August 2018</h5>
        <ul>
          <li>
            Assisted in undergraduate research projects under Professor Myra
            Cohen.
          </li>
          <li>Continued development on audible JavaScript heuristics.</li>
          <li>Lead development for UNL iGEM collaboration project.</li>
        </ul>
        <h4>Development Manager - Senior Design Project</h4>
        <h5>August 2017 - May 2018</h5>
        <ul>
          <li>Prepared development environment and tooling.</li>
          <li>Performed regular code reviews.</li>
          <li>Maintained the build pipeline.</li>
          <li>Assisted teammates with new features.</li>
        </ul>
        <h4>Undergraduate Teaching Assistant</h4>
        <h5>January 2017 - May 2018</h5>
        <ul>
          <li>Assisted students in their coursework for Java assignments.</li>
          <li>Facilitated weekly lab sessions.</li>
          <li>Held regular office hours in the Student Resource Center.</li>
          <li>
            Reported feedback weekly to Graduate Teaching Assistants (GTAs) with
            students' comments regarding labs and assignments.
          </li>
        </ul>
        <hr />
        <p>
          Other achievments can be found on{' '}
          <a
            href='https://meritpages.com/MarkHernandez'
            target='_blank'
            rel='noopener noreferrer'
          >
            MeritPages
          </a>
          .
        </p>
      </div>
    </Page>
  )
}

export default About
