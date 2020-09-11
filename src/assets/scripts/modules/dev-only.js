import sleep from '../utils/sleep'
import '../web-components/DesignTokens'

const domNode = document.body.appendChild(
  document.createElement('lionbyte-design-tokens')
)

sleep(200).then(() => {
  domNode.scrollIntoView({
    behavior: matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth',
    block: 'end'
  })
})
