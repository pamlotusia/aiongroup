import { Container } from "./styles.js";
import SimuladorDebentures from "../../components/SimuladorDebentures/index.jsx";
import { Header } from "../../components/Header/index.jsx"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

export function SubscriptionPage() {

	return (
		<Container>
			<Header />
			<div style={{ display: "flex", width: "80%", justifySelf: "center", backgroundColor: "white", flexDirection: "column" }}>

				<div style={{ paddingBottom: 50 }}>
					<h1 >
						Assinatura de patrimônio imobiliário
					</h1>
					<div style={{ height: 10, backgroundColor: "teal" }} />
				</div>

				<div style={{ display: "flex", flexDirection: "row" }}>

					<div style={{
						flex: 3,
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						gap: 50,
					}}>

						<div style={{ flex: 1, textAlign: "center" }}>

						</div>
						<div style={{ display: "flex", flexDirection: "row", gap: 30 }}>
							<img src="https://tecnoartengenharia.com.br/wp-content/uploads/2024/04/prediosaltos1.jpeg" alt="" style={{ width: 400, flex: 4 }} />
							<div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", flex: 3 }}>
								<p>
									✓ Compre imóveis aos poucos, sem financiamentos e sem juros
								</p>
								<div style={{ backgroundColor: "lightgray", height: 2 }} />
								<p>
									✓ Invista no futuro da sua família
									com a segurança dos imóveis
								</p>
								<div style={{ backgroundColor: "lightgray", height: 2 }} />
								<p>
									✓ Gestão simplificada pela
									carteira digital de imóveis
								</p>
							</div>
						</div>

						<div style={{ display: "flex", flexDirection: "column", gap: 50 }}>

							<h2>
								Vantagens
							</h2>
							<div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
								<h3>Acessível para todos</h3>
								<div style={{ backgroundColor: "lightgray", height: 2 }} />
								<div style={{ display: "flex", gap: 30 }}>
									<div style={{ flex: 1 }}>
										<h3 style={{ fontSize: 20 }}>A partir de</h3>
										<strong style={{ fontSize: 40, color: "teal" }}>R$ X,00</strong>
										<p>no seu ritmo</p>
									</div>
									<div style={{ flex: 1 }}>
										<h3 style={{ fontSize: 20 }}>Seja sócio de</h3>
										<strong style={{ fontSize: 40, color: "teal" }}>Imóveis</strong>
										<p>variados</p>
									</div>
									<div style={{ flex: 3 }}>
										<p>Agora todos podem ser SÓCIOS de imóveis! A digitalização da propriedade em tokens permite o seu fracionamento e transações totalmente digitais de forma muito mais fácil e rápida para quem nunca teve acesso.</p>
									</div>
								</div>
							</div>

							<div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
								<h3>Construção de patrimônio</h3>
								<div style={{ backgroundColor: "lightgray", height: 2 }} />
								<div style={{ display: "flex", gap: 30 }}>
									<div style={{ flex: 1 }}>
										<h3 style={{ fontSize: 20 }}>Receba</h3>
										<strong style={{ fontSize: 40, color: "purple" }}>Aluguéis</strong>
										<p>na sua proporção*</p>
									</div>
									<div style={{ flex: 1 }}>
										<h3 style={{ fontSize: 20 }}>Aguarde</h3>
										<strong style={{ fontSize: 40, color: "purple" }}>Valorizar</strong>
										<p>com o mercado</p>
									</div>
									<div style={{ flex: 3 }}>
										<p>Construa um patrimônio que dá frutos e atravessa gerações! Sempre que os imóveis estão alugados, você recebe o equivalente ao seu percentual. Sendo dono de frações, o risco de vacância é diluído pelos imóveis.</p>
									</div>
								</div>
							</div>

							<div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
								<h3>Simples e inovador</h3>
								<div style={{ backgroundColor: "lightgray", height: 2 }} />
								<div style={{ display: "flex", gap: 30 }}>
									<div style={{ flex: 1 }}>
										<h3 style={{ fontSize: 20 }}>Transaçõoes em</h3>
										<strong style={{ fontSize: 40, color: "orangered" }}>Minutos</strong>
										<p>na sua carteira</p>
									</div>
									<div style={{ flex: 1 }}>
										<h3 style={{ fontSize: 20 }}>Gestão</h3>
										<strong style={{ fontSize: 40, color: "orangered" }}>Digital</strong>
										<p>dos imóveis</p>
									</div>
									<div style={{ flex: 3 }}>
										<p>Na sua carteira digital de imóveis você compra e vende imóveis, fracionados ou inteiros, em 5 minutos. Todas as decisões que você precisa tomar são realizadas através de votações em sua carteira.</p>
									</div>
								</div>
							</div>

						</div>
						<h2>
							Como funciona
						</h2>
						<Accordion style={{ width: "100%" }}>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1-content"
								id="panel1-header"
							>
								<Typography component="strong" style={{ color: "black", fontWeight: "bold" }}>1. Deposite</Typography>
							</AccordionSummary>
							<AccordionDetails style={{ display: "flex", flexDirection: "column", gap: 10 }}>
								<p>
									Comece decidindo quanto do seu orçamento você deseja preservar na sua conta digital.
								</p>
								<p>
									Algumas pessoas fazem planos para os filhos, outros gostam de separar um
									dinheiro em imóveis para seu próprio futuro. Há quem assine como uma maneira de
									evitar gastar em besteiras.
								</p>
							</AccordionDetails>
						</Accordion>

						<Accordion style={{ width: "100%" }}>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel2-content"
								id="panel2-header"
							>
								<Typography component="strong" style={{ color: "black", fontWeight: "bold" }}>2. Escolha seus imóveis</Typography>
							</AccordionSummary>
							<AccordionDetails style={{ display: "flex", flexDirection: "column", gap: 10 }}>
								<p>
									Uma vez que seu dinheiro estiver em sua conta digital, você terá liberdade para escolher os imóveis nos quais investir,
								</p>
								<p>
									Com sua conta você possui acesso exclusivo aos imóveis que estão sendo oferecidos por seus proprietários no formato fracionado.
								</p>
								<p>
									Você poderá escolher um ou mais imóveis para adquirir frações.
								</p>

							</AccordionDetails>
						</Accordion>

						<Accordion style={{ width: "100%" }}>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel3-content"
								id="panel3-header"
							>
								<Typography component="strong" style={{ color: "black", fontWeight: "bold" }}>3. Acumule patrimônio</Typography>
							</AccordionSummary>
							<AccordionDetails style={{ display: "flex", flexDirection: "column", gap: 10 }}>
								<p>
									Agora você se tornou proprietário digital!
									As frações de imóveis adquiridas vão ficar na sua carteira digital netspaces.
								</p>
								<p>
									Assim como qualquer dono de imóveis, você receberá aluguéis sempre que os
									imóveis estiverem alugados, de acordo com as porcentagens estabelecidas em contrato, simples, né?
								</p>
								<p>
									Imóveis vendidos em frações permitem que os assinantes diluam os riscos de
									vacância por terem apenas percentuais de imóveis.
								</p>
								<p>
									A gestão dos seus imóveis é toda feita pela carteira digital. As decisões são tomadas
									através de votação entre os proprietários, como numa assembléia tradicional.
								</p>

							</AccordionDetails>
						</Accordion>

						<Accordion style={{ width: "100%" }}>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel4-content"
								id="panel4-header"
							>
								<Typography component="strong" style={{ color: "black", fontWeight: "bold" }}>4. Simule seus Debêntures</Typography>
							</AccordionSummary>
							<AccordionDetails style={{ display: "flex", flexDirection: "column", gap: 10 }}>
								<p>
									Além das porcentagens estabelecidas em contrato, você também recebe Debêntures sobre o valor investido.
								</p>
								<p>
									Você pode fazer uma simulação ao lado.
								</p>

							</AccordionDetails>
						</Accordion>
					</div>
					<div style={{ flex: 1, justifyContent: "center", display: "flex" }}>
						<SimuladorDebentures />
					</div>
				</div>
			</div>
			<p style={{ textAlign: "center" }}>
				Todos os direitos reservados.
			</p>
		</Container >

	)
}
