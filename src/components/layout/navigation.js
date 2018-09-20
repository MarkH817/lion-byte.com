import * as React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'

export class Navigation extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = { checked: false }

    this.hideNav = this.hideNav.bind(this)
    this.toggleNav = this.toggleNav.bind(this)
  }

  hideNav () {
    this.setState({ checked: false })
  }

  toggleNav () {
    this.setState(prevState => ({ checked: !prevState.checked }))
  }

  render () {
    return (
      <nav>
        <Link to='/' className='brand'>
          <StaticQuery
            query={graphql`
              query {
                site {
                  siteMetadata {
                    title
                  }
                }
              }
            `}
            render={data => <span>{data.site.siteMetadata.title}</span>}
          />
        </Link>

        {/* <input
          id='menu-toggle'
          type='checkbox'
          className='show'
          checked={this.state.checked}
          onChange={this.toggleNav}
        />

        <label htmlFor='menu-toggle' className='burger pseudo button'>
          &#9776;
        </label> */}

        <div className='menu' onClick={this.hideNav}>
          <Link to='/'>Home</Link>

          <Link to='/about'>About</Link>

          <Link to='/blog'>Blog</Link>

          <a
            href='https://github.com/MarkH817/'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>

          <a
            href='https://www.twitter.com/lion_byte'
            target='_blank'
            rel='noopener noreferrer'
          >
            Twitter
          </a>

          <a
            href='https://www.linkedin.com/in/markhernandez1'
            target='_blank'
            rel='noopener noreferrer'
          >
            Linkedin
          </a>
        </div>
      </nav>
    )
  }
}
