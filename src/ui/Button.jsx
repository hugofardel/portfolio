import styled from "styled-components";

const Button = styled.a`
	display: inline-block;
	padding: 0.6em 1.2em;
	margin: 2rem auto 0 auto;
	text-align: center;
	color: white;
	background-color: var(--orange);
	border: 2px solid var(--orange);
	border-radius: 8px;
	font-size: 1em;
	font-weight: 500;
	font-family: inherit;
	cursor: pointer;
	transition: all 0.25s;

	&:hover {
		color: var(--orange);
		background-color: transparent;
		border: 2px solid var(--orange);
	}
`;

export default Button;
