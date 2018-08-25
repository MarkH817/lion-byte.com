import * as React from 'react'
import PropTypes from 'prop-types'
import Typed from 'typed.js'

export class TextType extends React.PureComponent {
  componentDidMount () {
    this.create()
  }

  componentWillUnmount () {
    this.typed.destroy()
  }

  componentDidUpdate () {
    this.destroy()
    this.create()
  }

  create () {
    const { text, onStart, onEnd } = this.props

    const options = {
      autoInsertCss: false,
      strings: [text],
      startDelay: 200,
      typeSpeed: 76,
      preStringTyped: onStart !== undefined ? onStart : () => {},
      onComplete: onEnd !== undefined ? onEnd : () => {}
    }

    this.typed = new Typed(this.el, options)
  }

  destroy () {
    this.typed.destroy()
  }

  render () {
    const { text } = this.props

    return (
      <React.Fragment>
        <span className='visually-hidden'>{text}</span>

        <span
          ref={el => {
            this.el = el
          }}
          role='presentation'
          aria-hidden
        />

        <noscript>
          <span role='presentation' aria-hidden>
            {text}
          </span>
        </noscript>
      </React.Fragment>
    )
  }
}

TextType.propTypes = {
  text: PropTypes.string.isRequired,
  onStart: PropTypes.func,
  onEnd: PropTypes.func
}
