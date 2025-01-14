import logo from "../.././assets/gbflogo.png";
import { Container } from "./styles";
import { CadastroInvestidor } from "../../components/CadastroInvestidor";
import { Link } from "react-router-dom";

export function CadastroLead() {
  return (
    <Container>
      <section>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>

        <div className="content">
          <p className="title">
            Seja um investidor<span>.</span>
          </p>
          <p className="text">
            Preencha todos os campos para começar sua jornada de investimentos.
          </p>
        </div>
      </section>

      <CadastroInvestidor />
    </Container>
  );
}
