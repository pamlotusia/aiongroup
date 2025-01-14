import { Container, About, Specialties } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import admin from '../../assets/admin.jpg'

export function Consultoria() {
	return (
		<Container>
			<Header />
			<main>
				<About>
					<img src={admin} alt="" />

					<div className="textContent">
						<p className="title">Desenvolvemos, implantamos e administramos:</p>

						<p className="text">
							Desenvolvemos projetos próprios e para clientes/parceiros,
							realizando toda a análise técnica e pesquisa necessária, além de
							oferecer consultoria e assessoria para o desenvolvimento dos
							mesmos.
						</p>
						<p className="text">
							Nossos produtos são oferecidos com o melhor custo-benefício,
							qualidade e durabilidade. Atuamos em negócios de diferentes
							tamanhos (pequenos, médios e grandes), com serviços
							especializados, rápidos e precisos. Em operações, gerenciamos
							aspectos financeiros internacionais e nacionais, tributários e
							contábeis.
						</p>

						<p className="text">
							Trabalhamos com total transparência em todos os níveis
							corporativos, oferecendo planejamento estratégico, técnico,
							analítico e multisetorial, além de capacitarmos, estimulamos e
							promovemos o desenvolvimento dos nossos clientes e parceiros.
						</p>
					</div>

				</About>

				<Specialties>
					<div className="specialties">
						<p className="title">
							As especialidades e atribuições do <span>AION GROUP</span>.
							Consultoria e assessoria técnica de :</p>

						<ol>
							<li>Financeira, para a captação e investimentos;</li>
							<li>Mercadológica;</li>
							<li>Contábil;</li>
							<li>Tributária;</li>
							<li>Em mercado de capitais;</li>
							<li>Em planejamento estratégico corporativo;</li>
							<li>
								Na criação, montagem e administração e gestão corporativa de
								Empresas e Instituições;
							</li>
							<li>Na criação, montagem e administração e gestão corporativa de produtos e serviços;</li>
							<li>Na criação, montagem e administração e gestão corporativa de departamentos comerciais, para a colocação de produtos e serviços</li>
						</ol>
					</div>
					<img src='https://institutoaionbrasil.com/prod_e_serv/images/37542.jpg' alt="" />

				</Specialties>
			</main>

			<Footer />
		</Container>
	);
}
