import { html, css, LitElement } from "../deps";
import { VideoList } from "./list/video-list";
import("./search-input");
import("./list/video-list");

const api_url =
  new URL(document.location.toString()).searchParams.get("server") ||
  "http://localhost:8181";

export class CastUI extends LitElement {
  static styles = css`
    :host(.full) {
      grid-template-rows: min-content auto 1fr;
    }
    :host {
      display: grid;
      grid-template-rows: min-content 1fr 0fr;
      grid-gap: 1rem;
      place-items: center;
      align-items: center;
      justify-items: center;
      transition: 200ms ease;
      color: white;
      height: 100dvh;
      width: 100vw;
    }
    search-input {
      font-size: 3rem;
    }
    cast-button {
      font-size: 6rem;
    }
    #placeholder {
      height: 6rem;
    }
    @media only screen and (max-width: 1250px) {
      search-input {
        width: 100%;
        border-radius: 0em;
      }
      video-list {
        width: 100%;
      }
    }
  `;

  options = {
    hasVideo: true,
    hasAudio: true,
  };
  get videoList(): VideoList {
    return this.shadowRoot.querySelector("video-list") as VideoList;
  }

  async fetchDownloadURL(query: string) {
    this.videoList.results = undefined;
    if (query === undefined || query === "") {
      this.className = "";
      return;
    }
    const url = new URL(api_url);
    url.searchParams.set("query", query);
    const response = await fetch(url);
    if (response.status === 200) {
      this.className = "full";
      const results = await response.json();
      this.videoList.results = results;
    }
  }

  render() {
    return html`<h1>Custom Cast</h1>
      <search-input
        @search=${(e) => {
          this.fetchDownloadURL(e.detail);
        }}
      ></search-input>
      <video-list></video-list>`;
  }
}
customElements.define("cast-ui", CastUI);
