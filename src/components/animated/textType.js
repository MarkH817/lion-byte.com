import * as React from 'react'
import PropTypes from 'prop-types'

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

  async create () {
    const { text, onStart, onEnd } = this.props

    const {
      default: Typed
    } = await import(/* webpackChunkName: "typed.js" */ 'typed.js')

    this.typed = new Typed(this.el, {
      autoInsertCss: false,
      cursorChar: '&nbsp;',
      strings: [text],
      startDelay: 200,
      typeSpeed: 76,
      preStringTyped: onStart,
      onComplete: onEnd
    })
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
          aria-hidden
        />

        <noscript>
          <span aria-hidden>{text}</span>
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

TextType.defaultProps = {
  onStart: () => {},
  onEnd: () => {}
}
