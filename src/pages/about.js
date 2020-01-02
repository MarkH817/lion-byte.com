import React from 'react'
import { FaLaptopCode, FaUniversity } from 'react-icons/fa'

import Page from '../templates/Page'
import MyPhoto from '../components/images/MyPhoto'
import ProfileCard from '../components/styles/ProfileCard'

export function About () {
  return (
    <Page title='About'>
      <h1>About</h1>

      <ProfileCard className='reverse'>
        <div className='text'>
          <p>
            Hello, my name is Mark Hernandez. I'm non-binary (they/them) and
            bisexual.{' '}
            <span aria-labelledby='pride-flag-description' role='img'>
              🏳️‍🌈
            </span>
            <span id='pride-flag-description' className='screen-reader'>
              Pride flag
            </span>
          </p>

          <p>
            I am a Software Engineer at gWorks who specializes in UI/UX,
            JavaScript, and modern web technologies. I strive to continuously
            grow and improve my skillsets to provide a smooth experience for
            both users and developers. TypeScript, ESLint, Jest, and other tools
            help achieve this ongoing goal as I move forward in my career.
          </p>
        </div>

        <div className='image'>
          <MyPhoto />
        </div>
      </ProfileCard>

      <div>
        <h2>More Information</h2>
        <h3>
          <FaUniversity /> Education
        </h3>
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

        <h3>
          <FaLaptopCode /> Experience
        </h3>
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
