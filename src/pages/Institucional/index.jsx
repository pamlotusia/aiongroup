import { Container, Products, Background, About, Mvv } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import background from "../../assets/backgroundPerson.jpg";
import operacoes from "../../assets/operacoes-financeiras.jpg";
import gestao from "../../assets/gestao-de-crise.jpg";
import reestruturacao from "../../assets/reestruturacao.jpg";

import missao from "../../assets/missao.png";
import visao from "../../assets/visao.png";
import valores from "../../assets/valores.png";
import { Line } from "../../components/Line";

export function Institutional() {
	return (
		<Container>
			<Header />
			<main>
				<header id="aboutUs">
					<Background>
						<div className="contentHeader">
							<p>
								O AION Group é um conglomerado global originado pelo{" "}
								<span>Instituto AION do Brasil</span>.
							</p>
							<p>
								{" "}
								Atuamos nos cinco continentes, abrangendo diversos segmentos:
								imobiliário, saúde, commodities, ativos, seguros, indústrias,
								tecnologia, consultoria e comunicação.
							</p>
							<p>
								Nosso compromisso é atender as demandas de clientes, parceiros e
								do mercado, garantindo inovação, excelência e soluções
								personalizadas.
							</p>
						</div>
						<img src={background} alt="" />
					</Background>
				</header>

				<Mvv>

					<div className="card">
						<div className="content">
							<img src={missao} alt="" />
							<h2>
								Missão
							</h2>
						</div>
						<p>
							Oferecer assessoria e consultoria financeira especializada para empresas, com foco em reestruturação e estruturação financeira, além de soluções estratégicas visando a sustentabilidade e o crescimento financeiro de nossos clientes.
						</p>
					</div>
					<div className="card">
						<div className="content">
							<img src={visao} alt="" />
							<h2>
								Visão
							</h2>
						</div>
						<p>

							Ser reconhecida como a líder em consultoria financeira empresarial no Brasil, oferecendo soluções inovadoras e estratégicas que garantem o crescimento sustentável e a prosperidade de nossos clientes, com especialização em reestruturação financeira

						</p>
					</div>
					<div className="card">
						<div className="content">
							<img src={valores} alt="" />
							<h2>
								Valores
							</h2>
						</div>
						<p>
							Ética e Transparência; Inovação; Comprometimento com o Cliente; Excelência; Sustentabilidade; Confiança.
						</p>

					</div>
				</Mvv>

				<Products id="products">
					<p className="title">Conheça nossos serviços</p>
					<p className="text">
						Somos uma equipe cujo objetivo é <span>melhorar a vida</span> de
						todos por meio de produtos inovadores. Criamos ótimos produtos para{" "}
						<span>resolver seus problemas</span> de negócios.
					</p>

					<div className="productContainer">
						<div className="product">
							<img src={operacoes} alt="" />
							<div className="textCard">
								<h4>Operações Financeiras</h4>
								<p>
									A recuperação das operações resgata credibilidade e crédito,
									isolando os recebíveis dos riscos da originadora. Os títulos
									securitizados oferecem atualização monetária e juros,
									similares a renda fixa.
								</p>
							</div>
						</div>

						<div className="product">
							<img src={gestao} alt="" />
							<div className="textCard">
								<h4>Gestão de Crises e Reestruturação</h4>
								<p>
									A <span>Aion Group of Brazil</span> atua com equipe de alta
									performance nas áreas financeira, negócios, estratégica,
									passivos, e funding, proporcionando resultados rápidos e
									eficazes.
								</p>
							</div>
						</div>

						<div className="product">
							<img src={reestruturacao} alt="" />
							<div className="textCard">
								<h4>Reestruturação de Dívidas</h4>
								<p>
									O processo de conjugação dos interesses por meio da
									compreensão das necessidades, elaboração de projeções
									adequadas - com análise técnica de riscos e oportunidades - e
									a adequação dessa modelagem junto aos credores tem
									estabelecido o melhor formato para as bases de alongamento de
									passivos.
								</p>
							</div>
						</div>
					</div>
					<Line />
				</Products>

			</main>

			<Footer />
		</Container>
	);
}
