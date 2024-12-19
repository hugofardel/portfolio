import dev from "./assets/dev.svg";
import Button from "./ui/Button.jsx";
import Tag from "./ui/Tag.jsx";
import Tags from "./ui/Tags.jsx";
import styled from "styled-components";

const StyledSectionIntro = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	z-index: 10;
`;

const Presentation = styled.div`
	flex: 0.6;

	@media (max-width: 767px) {
		flex: 1;
	}
`;

const Illustration = styled.div`
	flex: 0.4;

	@media (max-width: 767px) {
		display: none;
	}
`;

const P = styled.p`
	color: #727693;
	margin: 2rem 0;
`;

const Img = styled.img`
	height: 100%;
	min-width: 300px;
`;

const Introduction = () => {
	return (
		<StyledSectionIntro>
			<Presentation>
				<h1>Hugo Fardel</h1>
				<h2>Développeur Front-end </h2>
				<P>Développeur junior front-end, spécialisé dans les technologies autour de Javascript.</P>

				<Tags>
					<Tag>25 ans</Tag>
					<Tag>Permis B</Tag>
					<Tag>Disponible</Tag>
					<Tag>Mobilité géographique</Tag>
				</Tags>

				<Button href="#intro">Télécharger mon CV</Button>
			</Presentation>

			<Illustration>
				<Img src={dev} alt="dev" />
			</Illustration>
		</StyledSectionIntro>
	);
};

export default Introduction;
