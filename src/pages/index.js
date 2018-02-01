import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <section>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>
      <Link to='/page-2/'>Go to page 2</Link>
    </p>
    <p>
      <Link className='button primary' to='/about'>
        About
      </Link>
    </p>
  </section>
)

export default IndexPage
