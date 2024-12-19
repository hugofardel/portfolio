import CSS from "./assets/css.svg";
import HTML from "./assets/html.svg";
import JIRA from "./assets/jira.svg";
import React from "./assets/react.svg";
import Git from "./assets/git.svg";
import NodeJS from "./assets/nodejs.svg";
import Card from "./ui/Card.jsx";
import Section from "./ui/Section.jsx";
import styled from "styled-components";

const SkillsList = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-auto-rows: 1fr;
	grid-gap: 1rem;
	overflow: hidden;
	width: 100%;
	padding: 1rem 0;
`;

const Ul = styled.ul`
	margin: 5px 0;
	padding: 0 10px;
`;

const Li = styled.li`
	margin: 5px 0;
`;

const Skills = () => {
	return (
		<Section id="skills">
			<h2>Compétences</h2>

			<SkillsList>
				<Card title="HTML" icon={HTML} alt="html icon">
					<Ul>
						<Li>Création de structures sémantiques et conformes aux normes d&apos;accessibilités.</Li>
						<Li>Maîtrise des bonnes pratiques HTML5.</Li>
						<Li>Conception de sites web accessibles et optimisés pour le SEO et performant (lighthouse).</Li>
					</Ul>
				</Card>

				<Card title="CSS" icon={CSS} alt="CSS icon">
					<Ul>
						<Li>Maîtrise des bases CSS, Flexbox, et CSS Grid.</Li>
						<Li>Création de styles modulaires et maintenables avec SASS/SCSS (mixins, variables).</Li>
						<Li>
							Utilisation de Styled-Components dans des projets React pour des styles dynamiques et réutilisables.
						</Li>
						<Li>Expérience avec les animations CSS avancées (transitions, keyframes) et design responsive.</Li>
					</Ul>
				</Card>

				<Card title="React" icon={React} alt="React icon">
					<Ul>
						<Li>Maîtrise des hooks React et création de custom hooks.</Li>
						<Li>Expérience avec la gestion d&apos;état globale (Context API, Redux, MobX).</Li>
						<Li>Intégration de Styled-Components pour des styles dynamiques.</Li>
						<Li>Optimisation des performances.</Li>
						<Li>Mise en place de navigation dynamique avec React Router et gestion des API avec React Query.</Li>
						<Li>Familiarité avec les bases du typescript avec ReactTS.</Li>
					</Ul>
				</Card>

				<Card title="NodeJS" icon={NodeJS} alt="NodeJS icon">
					<Ul>
						<Li>
							Mise en place de serveurs back-end avec Node.js, y compris la gestion des routes et des API REST simples.
						</Li>
						<Li>Expérience avec Express.js pour simplifier la gestion des middlewares et des requêtes/réponses.</Li>
						<Li>Gestion des communications en temps réel avec Socket.IO.</Li>
						<Li>Manipulation des fichiers et système avec les modules natifs comme fs et path.</Li>
					</Ul>
				</Card>

				<Card title="Git" icon={Git} alt="Git icon">
					<Ul>
						<Li>
							Maîtrise des commandes principales (add, commit, push, pull, branch) et des workflows collaboratifs.
						</Li>
						<Li>Résolution des conflits de fusion et adoption des bonnes pratiques de versionnement.</Li>
					</Ul>
				</Card>

				<Card title="JIRA" icon={JIRA} alt="JIRA icon">
					<Ul>
						<Li>
							Gestion de projet et suivi des tâches avec Jira, en utilisant des tableaux Scrum ou Kanban pour organiser
							les workflows.
						</Li>
						<Li>Création, suivi et priorisation des tickets pour assurer la bonne exécution des sprints Agile.</Li>
						<Li>Personnalisation des filtres et tableaux de bord pour optimiser la gestion des projets.</Li>
					</Ul>
				</Card>
			</SkillsList>
		</Section>
	);
};

export default Skills;
