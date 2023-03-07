import{i as e,s as t,y as r,C as i}from"./mod.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function n(e){return(t,r)=>void 0!==r?((e,t,r)=>{t.constructor.createProperty(r,e)})(e,t,r):o(e,t)}function s(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s}class l extends t{render(){if(void 0===this.result)return;const{thumbnail:e,title:t,description:i}=this.result;return r`<img src=${e} class="thumb" />
      <h1 class="title">${t}</h1>
      <p class="description">${i}</p>`}}l.styles=e`
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
  `,s([n()],l.prototype,"result",void 0),customElements.define("video-info",l);class d extends t{async castVideo(e){const t=e.sources.both[0],r=i.createInfo(t.url);await i.loadInfo(r)}render(){var e;return r`${null===(e=this.results)||void 0===e?void 0:e.map((e=>r`<video-info
          tabindex="1"
          .result=${e}
          @click=${()=>this.castVideo(e)}
        ></video-info>`))}`}}d.styles=e`
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
  `,s([n()],d.prototype,"results",void 0),customElements.define("video-list",d);export{d as VideoList};
//# sourceMappingURL=video-list-919898de.js.map
