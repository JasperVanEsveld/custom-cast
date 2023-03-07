import { CAST } from "../../cast";
import { html, css, LitElement, property } from "../../deps";
import "./video-entry";

export type Result = {
  thumbnail: string;
  title: string;
  description: string;
  url: string;
  sources: {
    both: { url: string; width: string; height: string; bitrate: number }[];
    video: { url: string; width: string; height: string; bitrate: number }[];
    aduio: { url: string; bitrate: number }[];
  };
};

export class VideoList extends LitElement {
  @property()
  results: Result[] | undefined;

  static styles = css`
    :host {
      color: white;
      display: grid;
      place-items: center;
      grid-template-columns: 1fr;
      grid-gap: 2em;
      z-index: 1;
      position: relative;
      width: 80%;
      height: 100%;
      transition: all 200ms ease;
      transition-property: color, background;
      overflow-y: auto;
      overflow-x: hidden;
      scrollbar-color: var(--a1-color) rgb(0, 0, 0, 0);
      scrollbar-width: thin;
    }
    :host::-webkit-scrollbar {
      height: 12px;
      width: 12px;
      background: #0000;
    }

    :host::-webkit-scrollbar-thumb {
      background: var(--a1-color);
    }

    :host::-webkit-scrollbar-corner {
      background: #0000;
    }
    video-info {
      cursor: pointer;
      user-select: none;
    }
    video-info:focus {
      background-color: red;
    }

    @media only screen and (max-width: 1250px) {
      video-info {
        width: inherit;
        border-radius: inherit;
      }
    }
  `;

  async castVideo(video: Result) {
    const videoSource = video.sources.both[0];
    const info = CAST.createInfo(videoSource.url);
    await CAST.loadInfo(info);
  }

  render() {
    return html`${this.results?.map(
      (result: Result) =>
        html`<video-info
          tabindex="1"
          .result=${result}
          @click=${() => this.castVideo(result)}
        ></video-info>`
    )}`;
  }
}
customElements.define("video-list", VideoList);
