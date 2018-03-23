import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Typed from 'typed.js'

export class TextType extends Component {
  componentDidMount () {
    const { text, onStart, onEnd } = this.props

    const options = {
      strings: [text],
      startDelay: 150,
      typeSpeed: 15,
      preStringTyped: onStart !== undefined ? onStart : () => {},
      onComplete: onEnd !== undefined ? onEnd : () => {}
    }

    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount () {
    this.typed.destroy()
  }

  componentWillUpdate () {
    this.componentWillUnmount()
  }

  componentDidUpdate () {
    this.componentDidMount()
  }

  render () {
    return (
      <Fragment>
        <span className='visually-hidden' aria-live='polite'>
          {this.props.text}
        </span>
        <span
          ref={el => {
            this.el = el
          }}
          role='presentation'
          aria-hidden
        />
      </Fragment>
    )
  }
}

TextType.propTypes = {
  text: PropTypes.string.isRequired,
  onStart: PropTypes.func,
  onEnd: PropTypes.func
}
