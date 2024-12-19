import styled from "styled-components";

const ContactsList = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 1.5rem;
	width: 50%;
	margin: 0 auto;

	@media (max-width: 767px) {
		width: 100%;
	}
`;

export default ContactsList;
