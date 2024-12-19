import PropTypes from "prop-types";
import styled from "styled-components";

const StyledHorizontalCard = styled.li`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-wrap: wrap;
	gap: 1.5rem 5rem;
	min-height: 200px;
	padding: 2rem;
	color: var(--text-color-light);
	background: var(--background-dark-blue);
	border: var(--border-blue);
	border-radius: 12px;
`;

const StyledDate = styled.div`
	font-style: italic;
	font-size: 0.8rem;
`;

const StyledIcon = styled.div`
	width: 200px;
	height: 100%;
`;

const Img = styled.img`
	min-width: 100px;
	max-width: 200px;
	max-height: 150px;
`;

const Content = styled.div`
	text-align: left;
	flex: 1;
`;

const HorizontalCard = ({ children, title, company, dateBegin, dateEnd, icon, alt }) => {
	return (
		<StyledHorizontalCard>
			<StyledIcon>
				<Img src={icon} alt={alt} />
			</StyledIcon>
			<Content>
				<h3>{title}</h3>
				<div className="company">{company}</div>
				<StyledDate>
					{dateBegin} - {dateEnd}
				</StyledDate>

				{children}
			</Content>
		</StyledHorizontalCard>
	);
};

HorizontalCard.propTypes = {
	children: PropTypes.node,
	title: PropTypes.string,
	company: PropTypes.string,
	dateBegin: PropTypes.string,
	dateEnd: PropTypes.string,
	icon: PropTypes.node,
	alt: PropTypes.string,
};

export default HorizontalCard;
