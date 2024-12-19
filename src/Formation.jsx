import ulco from "./assets/ulco.svg";
import udemy from "./assets/udemy.svg";
import iut from "./assets/iut.jpg";
import HorizontalCard from "./ui/HorizontalCard.jsx";
import Section from "./ui/Section.jsx";
import styled from "styled-components";

const Ul = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	list-style: none;
	margin: 0;
	padding: 0;
`;

const Formation = () => {
	return (
		<Section id="formation">
			<h2>Formation</h2>

			<Ul>
				<HorizontalCard
					title="Formation React - Master modern React from beginner to advanced! Next.js, Context API, React Query, Redux,
							Tailwind, advanced patterns"
					company="Udemy"
					dateBegin="17/06/2024"
					dateEnd="10/12/2024"
					icon={udemy}
					alt="Udemy"
				/>

				<HorizontalCard
					title="Master - Web et Science de données"
					company="Université de Calais"
					dateBegin="2020"
					dateEnd="2022"
					icon={ulco}
					alt="Université de Calais"
				/>

				<HorizontalCard
					title="Licence 3 Informatique"
					company="Université de Calais"
					dateBegin="2019"
					dateEnd="2020"
					icon={ulco}
					alt="Université de Calais"
				/>

				<HorizontalCard
					title="DUT informatique"
					company="IUT de Calais"
					dateBegin="2017"
					dateEnd="2019"
					icon={iut}
					alt="IUT de Calais"
				/>
			</Ul>
		</Section>
	);
};

export default Formation;
