import styled from "styled-components";

const ProjectsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 20px;
`;

export default ProjectsGrid;
