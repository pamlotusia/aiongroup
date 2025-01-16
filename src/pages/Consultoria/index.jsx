import { Container, About, Specialties } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import ScrollReveal from 'scrollreveal';

//icons
import { TbReportMoney } from "react-icons/tb";
import { TbPigMoney } from "react-icons/tb";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { LuPlaneTakeoff } from "react-icons/lu";
import { PiPlantFill } from "react-icons/pi";
import { TbTransform } from "react-icons/tb";
import { useEffect } from "react";

const consulting = [
  {
    title: "Aion Consultoria Financeira",
    text: " Focada em fornecer soluções de consultoria financeira estratégica, incluindo planejamento financeiro, análise de investimentos e gerenciamento de risco.",
    icon: <TbReportMoney />,
  },
  {
    title: "Aion Gestão de Ativos",
    text: " Responsável pela administração de portfólios de investimentos, oferecendo serviços de gestão de ativos para clientes institucionais e individuais.",
    icon: <TbPigMoney />,
  },
  {
    title: "Aion Tecnologia e Inovação",
    text: " Dedica-se ao desenvolvimento e implementação de tecnologias financeiras inovadoras, como automação de processos, análise de big data e inteligência artificial.",
    icon: <LuPlaneTakeoff />,
  },
  {
    title: "Transformação Econômica",
    text: " Ajudamos empresas a transformarem suas finanças e operações através de uma estruturação financeira sólida e eficaz.",
    icon: <TbTransform />,
  },
  {
    title: "Sustentabilidade",
    text: " Comprometemo-nos com práticas que, não apenas beneficiam as empresas, mas também têm um impacto positivo no meio ambiente e na sociedade.",
    icon: <PiPlantFill />,
  },
  {
    title: "Crescimento e Expansão",
    text: " Suportamos o crescimento sustentável das empresas, proporcionando oportunidades para expandirem seus negócios e alcançarem novos mercados.",
    icon: <FaMoneyBillTrendUp />,
  },
];

export function Consultoria() {
  useEffect(() => {
    // Inicializa ScrollReveal
    ScrollReveal().reveal('.reveal', {
      distance: '50px',
      origin: 'bottom',
      duration: 800,
      easing: 'ease-in-out',
      reset: true, // Ativa a repetição ao rolar para cima
      interval: 200
    });
  }, []);

  return (
    <Container>
      <Header />
      <section>
        <h3>Consultoria</h3>
        <p>A estrutura organizacional é projetada para maximizar a eficiência e a especialização em várias áreas-chave:</p>
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
