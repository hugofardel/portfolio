import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
	line-height: 1.5;
	font-weight: 400;

	color-scheme: light dark;
	color: rgba(255, 255, 255, 0.87);
	background-color: #242424;

	font-synthesis: none;
	text-rendering: optimizeLegibility;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	--orange: #ff7424;
	--text-color-light: rgb(210 212 222);
	--text-color-heading: rgb(235 237 243);

	--border-blue: 1px solid rgba(82, 79, 209, 0.5);
	--background-dark-blue: rgb(14, 19, 41);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
	margin: 0;
	display: flex;
	place-items: center;
	min-width: 320px;
	min-height: 100vh;
	background-color: #030617;
}


#root {
	max-width: 1280px;
	margin: 0 auto;
	padding: 2rem;
	text-align: center;
	min-height: calc(100vh - 4rem);
	width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

a {
  color: inherit;
  text-decoration: none;
}

a.link,
a.link:visited {
	color: #007bff;
	text-decoration: underline;
	transition: all 0.2s ease;
}

a.link:hover {
	color: #007bffcc;
}


p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

h1{
  color: var(--orange);
  font-size: 3rem;
  font-weight: 700;
  margin: 1rem 0;
}

h2{
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem 0;
}

h3{
  margin: 1rem 0;
	color: var(--text-color-heading);
	font-size: 1.2rem;
}



.background-light {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
	overflow: hidden;
}

.background-light::before,
.background-light::after {
	content: "";
	position: absolute;
	height: 500px;
	width: 500px;
	border-radius: 50%;
	box-shadow: 1px 1px 500px 100px rgb(29 11 51);
}

.background-light::before {
	top: 20%;
	left: -500px;
}

.background-light::after {
	top: 66%;
	right: -500px;
}


@media (max-width: 767px) {

	.background-light{
		display: none;
	}
}

`;

export default GlobalStyles;
