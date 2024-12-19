import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 2rem;
	background: var(--background-dark-blue);
	border-radius: 12px;
	border: var(--border-blue);
`;

const Img = styled.img`
	height: 6rem;
`;

const CardContent = styled.div`
	text-align: left;
	color: var(--text-color-light);
	font-size: 1rem;
	line-height: 1.8;
`;

const Card = ({ children, title, icon, alt }) => {
	return (
		<StyledCard>
			<div>
				<Img src={icon} alt={alt} />
			</div>
			<CardContent>
				<h3>{title}</h3>
				{children}
			</CardContent>
		</StyledCard>
	);
};

Card.propTypes = {
	children: PropTypes.node,
	title: PropTypes.string,
	icon: PropTypes.node,
	alt: PropTypes.string,
};

export default Card;
