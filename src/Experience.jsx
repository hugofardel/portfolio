import misgroup from "./assets/misgroup.svg";
import HorizontalCard from "./ui/HorizontalCard.jsx";
import Section from "./ui/Section.jsx";
import ListCards from "./ui/ListCards.jsx";
import styled from "styled-components";

const Ul = styled.ul`
	margin: 1rem 0 0 0;
`;

const Experience = () => {
	return (
		<Section id="experience">
			<h2>Expérience</h2>
			<ListCards className="list-experiences">
				<HorizontalCard
					title="Développeur junior React"
					company="MIS GROUP, LILLE"
					dateBegin="27/10/2022"
					dateEnd="15/06/2024"
					icon={misgroup}
					alt="MIS Group"
				>
					<Ul>
						<li>Unique développeur front sur React (framework que je n&apos;avais jamais utilisé).</li>
						<li>Ajouts de nouvelles fonctionnalités.</li>
						<li>Mise en place de sockets avec un serveur node.</li>
						<li>Mise en place d&apos;un back office.</li>
						<li>Maintenir le code.</li>
						<li>Correction de bugs.</li>
						<li>
							Maintenance du site vitrine:{" "}
							<a href="https://www.e-survey.io/" className="link">
								e-survey
							</a>
						</li>
					</Ul>
				</HorizontalCard>

				<HorizontalCard
					title="Développeur VueJS React (stage)"
					company="MIS GROUP, LILLE"
					dateBegin="11/05/2022"
					dateEnd="26/10/2022"
					icon={misgroup}
					alt="MIS Group"
				>
					<Ul>
						<li>Stage réalisé en Vuejs en tant qu&apos;unique developpeur front.</li>
						<li>Création d&apos;une plateforme d&apos;etude qualitative.</li>
						<li>Style basé sur des maquettes déjà fournies.</li>
					</Ul>
				</HorizontalCard>
			</ListCards>
		</Section>
	);
};

export default Experience;
