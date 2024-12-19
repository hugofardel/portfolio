import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import Section from "./ui/Section.jsx";
import ContactItem from "./ui/ContactItem.jsx";
import ContactsList from "./ui/ContactsList.jsx";

const Contact = () => {
	return (
		<Section id="contact">
			<h2>Contactez-moi !</h2>

			<ContactsList>
				<ContactItem>
					<FaEnvelope />
					hugo.fardel@live.fr
				</ContactItem>

				<ContactItem>
					<BsTelephone />
					06 52 28 43 81
				</ContactItem>

				<ContactItem>
					<FaLocationDot />
					62770, Noyelles-les-Humières
				</ContactItem>
			</ContactsList>
		</Section>
	);
};

export default Contact;
