import * as React from 'react'
import PropTypes from 'prop-types'
import Typed from 'typed.js'

export class TextType extends React.PureComponent {
  componentDidMount () {
    const { text, onStart, onEnd } = this.props

    const options = {
      autoInsertCss: false,
      strings: [text],
      startDelay: 200,
      typeSpeed: 67,
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
      <React.Fragment>
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
        <noscript>
          <span role='presentation' aria-hidden>
            {this.props.text}
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
