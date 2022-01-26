import '../../styles/Header.scss'
import { Link, useLocation } from "react-router-dom"
import { Col, Row } from 'react-bootstrap';

function Header() {

	var currentPage = "";
	const page = useLocation()
	switch(page.pathname){
		case "/": currentPage = "Accueil"; break;
		case "/register": currentPage = "Inscription"; break;
		case "/register/Check_user": currentPage = "Résultat de l'inscription"; break;
		//--> cas questionnaire
		case "/result": currentPage = "Résultat du qestionnaire"; break;
		case "/catalog": currentPage = "Liste de films"; break;
		case "/film-infos": currentPage = "Informations de film"; break;
		case "/wishlist": currentPage = "Liste des envies"; break;
		default: currentPage = "Erreur 404"; break;
	}

	return (
		<header>
			<Row>
				<Col>
					<Link to="/" title="Retour à l'accueil" alt="Retour à l'accueil">FlexÔCinosh</Link>
				</Col>
				<Col>
					<h1>{currentPage}</h1>
				</Col>
				<Col></Col>
			</Row>
		</header>
	)
}
export default Header