import { CAST } from "../../cast";
import { html, css, LitElement, property } from "../../deps";
import { Result } from "./video-list";

export class VideoInfo extends LitElement {
  @property()
  result: Result;

  static styles = css`
    :host {
      box-sizing: border-box;
      place-items: center;
      display: grid;
      grid-template-areas:
        "thumb title"
        "thumb description";
      grid-template-rows: 1fr min-content;
      grid-template-columns: 1fr 3fr;
      grid-gap: 1em;
      width: 80%;
      background-color: var(--m1-color);
      border-radius: 1em;
      padding-left: 1em;
      padding-right: 1em;
      padding-top: 0.5em;
      padding-bottom: 0.5em;
    }

    .title {
      grid-area: title;
      width: 100%;
      overflow: hidden;
      overflow-wrap: anywhere;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 2em;
      text-align: center;
    }

    .thumb {
      grid-area: thumb;
      width: 100%;
      overflow: hidden;
    }

    .description {
      grid-area: description;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      overflow-wrap: anywhere;
      text-overflow: ellipsis;
      font-size: 1em;
    }
  `;

  render() {
    if (this.result === undefined) {
      return;
    }
    const { thumbnail, title, description } = this.result;
    return html`<img src=${thumbnail} class="thumb" />
      <h1 class="title">${title}</h1>
      <p class="description">${description}</p>`;
  }
}
customElements.define("video-info", VideoInfo);
