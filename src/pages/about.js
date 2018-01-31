import React from 'react'
import Link from 'gatsby-link'

const About = () => {
  return (
    <section>
      <h1>About</h1>
      <p>
        My name is Mark Hernandez. I'm a computer science student at the
        University of Nebraska - Lincoln.
      </p>
      <Link to='/'>Go home</Link>
    </section>
  )
}

export default About
