import { Container, About, Specialties } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

//icons
import { GrTechnology } from "react-icons/gr";

const consulting = [
  {
    title: "Aion Consultoria Financeira",
    text: " Focada em fornecer soluções de consultoria financeira estratégica, incluindo planejamento financeiro, análise de investimentos e gerenciamento de risco.",
    icon: <GrTechnology />,
  },
  {
    title: "Aion Gestão de Ativos",
    text: " Responsável pela administração de portfólios de investimentos, oferecendo serviços de gestão de ativos para clientes institucionais e individuais.",
    icon: <GrTechnology />,
  },
  {
    title: "Aion Tecnologia e Inovação",
    text: " Dedica-se ao desenvolvimento e implementação de tecnologias financeiras inovadoras, como automação de processos, análise de big data e inteligência artificial.",
    icon: <GrTechnology />,
  },
  {
    title: "Transformação Econômica",
    text: " Ajudamos empresas a transformarem suas finanças e operações através de uma estruturação financeira sólida e eficaz.",
    icon: <GrTechnology />,
  },
  {
    title: "Sustentabilidade",
    text: " Comprometemo-nos com práticas que, não apenas beneficiam as empresas, mas também têm um impacto positivo no meio ambiente e na sociedade.",
    icon: <GrTechnology />,
  },
  {
    title: "Crescimento e Expansão",
    text: " Suportamos o crescimento sustentável das empresas, proporcionando oportunidades para expandirem seus negócios e alcançarem novos mercados.",
    icon: <GrTechnology />,
  },
];

export function Consultoria() {
  return (
    <Container>
      <Header />
      <section>
        <h3>Consultoria</h3>
        <div className="container">
			{consulting.map((index)=> {
				return(
					<div className="card">
						<div className="icon">
						{index.icon}
						</div>
						<p className="title">{index.title}</p>
						<p className="text">{index.text}</p>
					</div>
				)
			})}
		</div>
      </section>

      <Footer />
    </Container>
  );
}
