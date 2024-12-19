import styled from "styled-components";

const ContactItem = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	gap: 1rem;
	padding: 1rem 1.5rem;
	color: var(--text-color-light);
	background: var(--background-dark-blue);
	border: var(--border-blue);
	border-radius: 12px;

	@media (max-width: 767px) {
		width: 100%;
	}
`;

export default ContactItem;
