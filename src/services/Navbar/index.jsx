import { Link } from "react-router-dom";
import { Container } from "./styles";

export function Navbar(){
    return(
    <Container>
        <Link to={'/institucional'} className="link">Institucional</Link>
        <Link to={'/marktplace'} className="link">Tokens Marketplace</Link>
        <Link to={'/cadastro-investidor'} className="link">Cadastro Investidor</Link>
        <Link to={'/simulador-avancado'} className="link">Simulador de Investimentos</Link>
        <Link to={'/simulador-debentures'} className="link">Simulador de Debêntures</Link>
    </Container>

    )
}