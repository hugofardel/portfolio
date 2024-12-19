import { FaArrowRight } from "react-icons/fa6";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledProjectCard = styled.div`
	overflow: hidden;
	border-radius: 10px;
	background: var(--background-dark-blue);
	border: var(--border-blue);
	border-radius: 12px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	cursor: pointer;

	&:hover {
		box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
	}
`;

const Img = styled.img`
	padding: 1rem 1rem 0 1rem;
	width: 100%;
	height: auto;
	display: block;
	transition: transform 0.3s ease;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 15px;
	text-align: left;
`;

const P = styled.p`
	font-size: 1rem;
	margin-bottom: 20px;
	color: rgb(210 212 222);
`;

const IconeLink = styled(FaArrowRight)`
	vertical-align: middle;
`;

const ProjectCard = ({ children, image, alt, title, link }) => {
	return (
		<StyledProjectCard className="project-card">
			<Img src={image} alt={alt} />

			<Content>
				<h3>{title}</h3>
				<P>{children}</P>
				<a href={link} className="link">
					Voir le projet <IconeLink />
				</a>
			</Content>
		</StyledProjectCard>
	);
};

ProjectCard.propTypes = {
	children: PropTypes.node,
	image: PropTypes.string,
	alt: PropTypes.string,
	title: PropTypes.string,
	link: PropTypes.string,
};

export default ProjectCard;
