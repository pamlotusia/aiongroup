import { Container, Products, Background, About } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import equipe from "../../assets/business-strategy-concept-with-game.jpg";

const services = [
  { title: "Administrativo"},
  { title: "Operacional" },
  {
    title: "Estruturas e infraestruturas físicas"
  },
  { title: "Departamento jurídico"},
  {
    title: "Departamento financeiro e operações financeiras"
  },
  {
    title: "Administração e gestão tributária e contábil"
  },
  {
    title: "Planejamento estratégico e financeiro"
  },
  { title: "Marketing e publicidade"},
  { title: "Mercado de capitais"},
  {
    title: "Mercado financeiro nacional e internacional"
  }
];


export function Estruturacao() {
  return (
    <Container>
      <Header />
      <main>
        <div className="header">
          <div className="textHeader">
            <p>
              “Estas estruturas financeiras e corporativas, que na maioria das
              vezes atuam/operam isoladamente, já são gigantes no mercado
              financeiro nacional e internacional, mas quando
              associadas/integradas, se transformam nas{" "}
              <span>BIG TOWER BANK</span>, que são consideradas as maiores e
              mais seguras plataformas de investimentos do mundo.”
            </p>
          </div>
          <img
            src="https://institutoaionbrasil.com/prod_e_serv/images/19611.jpg"
            alt=""
          />
        </div>


        <About>
          <div className="textContent">
            <p className="title">Estruturação</p>
            <p className="text">
              Há um prazer particular em ver algo nascer ou se transformar,
              ainda mais quando esse processo nos direciona a reflexões
              essenciais, direcionadas através de questões definidas como
              simples, moderativas e estruturais, que fazem com o que o
              indivíduo saiba responder:
            </p>
            <ul>
              <li>Quem é?</li>
              <li>Para que veio?</li>
              <li>Onde chegar?</li>
            </ul>
            <p className="text">
              Assim, neste âmbito, atuamos com o EESG+ em diversas esferas,
              principalmente no que tange a esfera psicológica, social,
              econômica de políticas, no que tange a governança corporativa. É
              convocar o empresário a reflexões acerca do seu futuro e o da sua
              empresa e ofertar a possibilidade de um upgrade, que impactará
              ampliando o desenvolvimento econômico e com o olhar atento à
              sustentabilidade desde os mínimos detalhes.
            </p>
          </div>

          <div className="services">
            <ul className="servicesList">
            {services.map((service) => {
              return <li className="service">{service.title}</li>;
            })}

            </ul>
            <img src={equipe} alt="" />
          </div>
        </About>
      </main>

      <Footer />
    </Container>
  );
}
