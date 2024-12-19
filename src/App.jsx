import Introduction from "./Introduction.jsx";
import Banner from "./Banner.jsx";
import Skills from "./Skills.jsx";
import Experience from "./Experience.jsx";
import Formation from "./Formation.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";

function App() {
	return (
		<>
			<GlobalStyles />
			<div className="background-light"></div>

			<Introduction />
			<Banner />
			<Skills />
			<Experience />
			<Formation />
			<Projects />
			<Contact />
		</>
	);
}

export default App;
