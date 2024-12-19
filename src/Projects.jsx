import ProjectCard from "./ui/ProjectCard.jsx";
import Section from "./ui/Section.jsx";
import ProjectsGrid from "./ui/ProjectsGrid.jsx";
import MastermindImg from "./assets/mastermind.png";
import ScoreboardImg from "./assets/scoreboard.png";
import CodeNestImg from "./assets/codenest.png";
import MinigamesImg from "./assets/minigames.png";
import WishlistImg from "./assets/wishlist.png";
import MemorygameImg from "./assets/memorygames.png";

const Projects = () => {
	return (
		<Section id="projects">
			<h2>Projets personnels</h2>

			<ProjectsGrid>
				<ProjectCard title="Mastermind" alt="Mastermind" image={MastermindImg} link="/">
					Retrouver la bonne combinaison de couleur générée au hasard. Réalisé en React, basé sur un design trouvé sur{" "}
					<a href="https://dribbble.com/shots/6421638-Mastermind" className="link">
						dribbble
					</a>
					.
				</ProjectCard>

				<ProjectCard title="Memory games" alt="Memory games" image={MemorygameImg} link="/">
					Plusieurs jeux pour entrainer sa mémoire ! Projet en React avec les bases de Typescript. Projet réalisé en
					React avec une simple implémentation de Typescript.
				</ProjectCard>

				<ProjectCard title="Wishlist" alt="Wishlist" image={WishlistImg} link="/">
					Consulter la liste de souhait de vos amis et fabriquer la vôtre ! (Pour l&apos;instant pas de BDD), réalisé en
					ReactTS.
				</ProjectCard>

				<ProjectCard title="Scoreboard" alt="Scoreboard" image={ScoreboardImg} link="/">
					Compter les points de vos parties et retrouver les resultats par manches que le classement. Réalisé en
					ReactJS.
				</ProjectCard>

				<ProjectCard title="MiniGames" alt="MiniGames" image={MinigamesImg} link="/">
					Liste de jeux avec points par utilisateurs et &ldquo;coins&rdquo; à gagner et à miser ! Réalisé en ReactJS
				</ProjectCard>

				<ProjectCard title="CodeNest" alt="CodeNest" image={CodeNestImg} link="/">
					Bibliothèque personelle avec mes composant UI et hooks susceptibles d&apos;être utilisés sur d&apos;autres
					projets.
				</ProjectCard>
			</ProjectsGrid>
		</Section>
	);
};

export default Projects;
