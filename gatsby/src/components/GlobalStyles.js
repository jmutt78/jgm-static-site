import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
  --red: #FF4949;
  --black: #2E2E2E;
  --yellow: #ffc600;
  --white: #fff;
  --grey: #efefef;
  --purple: #1c0947;
  --tan: #fff5dd;
}

html {
  margin: 0;
  background: #fff5dd;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: eurostile,sans-serif;
  scrollbar-width: thin;
  scrollbar-color: var(--purple) var(--tan);
}

body {
  background: transparent;
}


.gatsby-image-wrapper img[src*=base64\\,] {
  image-rendering: -moz-crisp-edges;
  image-rendering: pixelated;
}

/* Scrollbar Styles */
body::-webkit-scrollbar {
  width: 13px;
}



body::-webkit-scrollbar-thumb {
  background: var(--purple) ;
  border-radius: 7px;
  border: 3px solid var(--tan);
}

img {
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
h1 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 2.25rem;
  line-height: 1.1;
}
h2 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1.62671rem;
  line-height: 1.1;
}
h3 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1.38316rem;
  line-height: 1.1;
}
h4 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1rem;
  line-height: 1.1;
}
h5 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 0.85028rem;
  line-height: 1.1;
}
h6 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 0.78405rem;
  line-height: 1.1;
}
hgroup {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
ul {
  margin-left: 1.45rem;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  list-style-position: outside;
  list-style-image: none;
}
ol {
  margin-left: 1.45rem;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  list-style-position: outside;
  list-style-image: none;
}
dl {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
dd {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
p {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
figure {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
pre {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 1.45rem;
  font-size: 0.85rem;
  line-height: 1.42;

  border-radius: 3px;
  overflow: auto;
  word-wrap: normal;
  padding: 1.45rem;
}
table {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  font-size: 1rem;
  line-height: 1.45rem;
  border-collapse: collapse;
  width: 100%;
}
fieldset {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
blockquote {
  margin-left: 1.45rem;
  margin-right: 1.45rem;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
form {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
noscript {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
iframe {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
hr {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: calc(1.45rem - 1px);

  border: none;
  height: 1px;
}
address {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
b {
  font-weight: bold;
}
strong {
  font-weight: bold;
}
dt {
  font-weight: bold;
}
th {
  font-weight: bold;
}
li {
  margin-bottom: calc(1.45rem / 2);
}
ol li {
  padding-left: 0;
}
ul li {
  padding-left: 0;
}
li > ol {
  margin-left: 1.45rem;
  margin-bottom: calc(1.45rem / 2);
  margin-top: calc(1.45rem / 2);
}
li > ul {
  margin-left: 1.45rem;
  margin-bottom: calc(1.45rem / 2);
  margin-top: calc(1.45rem / 2);
}
blockquote *:last-child {
  margin-bottom: 0;
}
li *:last-child {
  margin-bottom: 0;
}
p *:last-child {
  margin-bottom: 0;
}
li > p {
  margin-bottom: calc(1.45rem / 2);
}
code {
  font-size: 0.85rem;
  line-height: 1.45rem;
}
kbd {
  font-size: 0.85rem;
  line-height: 1.45rem;
}
samp {
  font-size: 0.85rem;
  line-height: 1.45rem;
}
abbr {
  border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
  cursor: help;
}
acronym {
  border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
  cursor: help;
}
abbr[title] {
  border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
  cursor: help;
  text-decoration: none;
}
thead {
  text-align: left;
}
td,
th {
  text-align: left;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
  font-feature-settings: 'tnum';
  -moz-font-feature-settings: 'tnum';
  -ms-font-feature-settings: 'tnum';
  -webkit-font-feature-settings: 'tnum';
  padding-left: 0.96667rem;
  padding-right: 0.96667rem;
  padding-top: 0.725rem;
  padding-bottom: calc(0.725rem - 1px);
}
th:first-child,
td:first-child {
  padding-left: 0;
}
th:last-child,
td:last-child {
  padding-right: 0;
}
tt,
code {

  border-radius: 3px;
  font-family: 'SFMono-Regular', Consolas, 'Roboto Mono', 'Droid Sans Mono',
    'Liberation Mono', Menlo, Courier, monospace;
  padding: 0;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
}
pre code {
  background: none;
  line-height: 1.42;
}
code:before,
code:after,
tt:before,
tt:after {
  letter-spacing: -0.2em;
  content: ' ';
}
pre code:before,
pre code:after,
pre tt:before,
pre tt:after {
  content: '';
}


@media only screen and (max-width: 480px) {
  html {
    font-size: 90%;
  }
  h1 {
    font-size: 30%;
  }
}
`;

export default GlobalStyles;