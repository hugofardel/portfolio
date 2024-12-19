import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import styled from "styled-components";

const StyledBanner = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	flex-wrap: wrap;
	gap: 1.5rem;
	margin: 2rem 0;
	padding: 1rem;
	background: #090b1d;
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	gap: 1rem;
	padding: 0 2rem;

	&:not(:first-child):not(:last-child) {
		border-left: 3px solid #14193f;
	}
`;

const Header = styled.header`
	font-size: 1.6rem;
	color: white;
`;

const InfoContent = styled.div`
	/* color: #727693; */
	color: #9fa5cf;
	font-size: 1.2rem;
`;

const Icones = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 2rem;
	flex-direction: row;
`;

const Img = styled.img`
	height: 2.8rem;
	filter: drop-shadow(0 0 0.6rem rgb(82 79 209));
`;

const Line = styled.span`
	display: inline-flex;
	align-items: center;
	margin-left: 8px;
	height: 4px;
	width: 3rem;
	background-color: var(--orange);
	border-radius: 1px;
	vertical-align: middle;
`;

const Banner = () => {
	return (
		<StyledBanner>
			<Info>
				<Header>2</Header>
				<InfoContent>Projets professionnels</InfoContent>
			</Info>

			<Info>
				<Header>2+</Header>
				<InfoContent>Années d&apos;expériences</InfoContent>
			</Info>

			<Info>
				<Header>6+</Header>
				<InfoContent>Projets personnels</InfoContent>
			</Info>

			<Info>
				<Header>
					Suivez moi <Line />
				</Header>
				<Icones>
					<div>
						<a href="https://github.com/hugofardel" target="_blank">
							<Img src={github} alt="github" />
						</a>
					</div>
					<div>
						<a href="https://www.linkedin.com/in/hugo-fardel-6414601b4/" target="_blank">
							<Img src={linkedin} alt="linkedin" />
						</a>
					</div>
				</Icones>
			</Info>
		</StyledBanner>
	);
};

export default Banner;
