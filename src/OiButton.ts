import { html, css, LitElement, TemplateResult, CSSResult } from 'lit';
import { property } from 'lit/decorators.js';

export class OiButton extends LitElement {
  static styles: CSSResult = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--oi-button-text-color, #000);
    }
  `;

  @property({ type: String }) header = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render(): TemplateResult<1> {
    return html`
      <h2>${this.header} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
