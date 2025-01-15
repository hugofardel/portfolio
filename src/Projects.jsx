import ProjectCard from "./ui/ProjectCard.jsx";
import Section from "./ui/Section.jsx";
import ProjectsGrid from "./ui/ProjectsGrid.jsx";
import MastermindImg from "./assets/mastermind.png";
import ScoreboardImg from "./assets/scoreboard.png";
import CodeNestImg from "./assets/codenest.png";
// import MinigamesImg from "./assets/minigames.png";
// import WishlistImg from "./assets/wishlist.png";
// import MemorygameImg from "./assets/memorygames.png";

const Projects = () => {
	return (
		<Section id="projects">
			<h2>Projets personnels</h2>

			<ProjectsGrid>
				<ProjectCard
					title="Mastermind"
					alt="Mastermind"
					image={MastermindImg}
					link="https://mastermind-hugo-fardel.vercel.app/"
				>
					Implémentation du jeu Mastermind (retrouver la bonne combinaison de couleur) en React JS. Design trouvé sur
					<a href="https://dribbble.com/shots/6421638-Mastermind" className="link">
						dribbble
					</a>
					.
				</ProjectCard>

				<ProjectCard
					title="Scoreboard"
					alt="Scoreboard"
					image={ScoreboardImg}
					link="https://scoreboard-bay.vercel.app/"
				>
					Simple projet React JS d&apos;un scoreboard. Ajoutez des joueurs puis saisissez les points par manche. Un
					classement, un historique et un graphique de la partie sont générés.
				</ProjectCard>

				<ProjectCard title="CodeNest" alt="CodeNest" image={CodeNestImg} link="https://code-nest-nine.vercel.app">
					Storybook de mes composants UI. Ce projet a pour but de mettre facilement à disposition mes composants UI qui
					sont susceptibles d&apos;être utiliser sur d&apos;autres projets, d&apos;apprendre un outil de documentation
					et de design system et enfin de tester chaque composants ainsi que des choses comme l&apos;accessibilité.
				</ProjectCard>

				{/* <ProjectCard
					title="Memory games"
					alt="Memory games"
					image={MemorygameImg}
					link="https://github.com/hugofardel/MemoryGame"
				>
					Projet en React avec les bases de Typescript proposant des jeux simples pour entrainer sa mémoire. Projet
					d&apos;entrainement non fini.
				</ProjectCard>

				<ProjectCard title="Wishlist" alt="Wishlist" image={WishlistImg} link="https://github.com/hugofardel/Wishlist">
					Consulter la liste de souhait de vos amis et fabriquer la vôtre ! (Pour l&apos;instant pas de BDD), réalisé en
					ReactTS.
				</ProjectCard>

				<ProjectCard title="MiniGames" alt="MiniGames" image={MinigamesImg}>
					Liste de jeux avec points par utilisateurs et &ldquo;coins&rdquo; à gagner et à miser ! Réalisé en ReactJS.
					Projet non fini
				</ProjectCard> */}
			</ProjectsGrid>
		</Section>
	);
};

export default Projects;
