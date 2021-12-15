import { html, render } from 'lit'

import sleep from 'app/utils/sleep'

const root = document.body.appendChild(document.createElement('div'))

sleep().then(() => {
  render(
    html`
      <button type="button">Default</button>
      <button type="button" class="primary">Main</button>
      <button type="button" class="secondary">Secondary</button>
      <button type="button" class="">Toggle</button>
    `,
    root
  )
})
