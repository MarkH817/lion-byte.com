import { css, html, LitElement } from 'lit-element'

class DesignTokens extends LitElement {
  // eslint-disable-next-line class-methods-use-this
  render () {
    return html`<section aria-labelledby="color-title">
      <h2 id="color-title">Colors</h2>
      <div class="color-container">
        <div
          title="PRIMARY"
          style="background-color: var(--color-primary)"
        ></div>
        <div title="ACCENT" style="background-color: var(--color-accent)"></div>
        <div title="BLACK" style="background-color: var(--color-black)"></div>
        <div title="GRAY" style="background-color: var(--color-gray)"></div>

        <div title="???" style="background-color: hsl(240, 75%, 80%)"></div>
        <div title="MAIN CHARACTER" style="background-color: #aa1c00"></div>
        <div
          title="MAIN CHARACTER - SIDE"
          style="background-color: #aa1c0080"
        ></div>
        <div title="GEAR" style="background-color: #c0880a"></div>
        <div title="GEAR - SIDE" style="background-color: #c0880a80"></div>
      </div>
    </section>`
  }

  static get styles () {
    return css`
      *,
      *::after,
      *::before {
        box-sizing: border-box;
      }

      :host {
        background-color: #fff;
        border: 0.25rem dashed goldenrod;
        display: block;
        height: 50vh;
        max-height: 25rem;
        overflow-y: scroll;
      }

      .color-container {
        display: flex;
        flex-direction: column;
      }

      .color-container div {
        height: 2rem;
        width: 2rem;
      }

      @media not (prefers-reduced-motion: reduce) {
        .color-container div {
          transition: transform 50ms ease-in;
        }
      }

      .color-container div:hover {
        transform: scale3d(2, 1.5, 1) translate3d(25%, 0, 0);
      }
    `
  }
}

customElements.define('lionbyte-design-tokens', DesignTokens)

export default DesignTokens
