import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import { Header } from "../../components/Header";
import { Container } from "./style";

//icons
import { IoMdTrophy } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import { BsGlobe2 } from "react-icons/bs";

const slider = [
  {
    title: "Inovação",
    text: " Incorporar tecnologias de ponta para oferecer soluções avançadas e personalizadas.",
  },
  {
    title: "Sustentabilidade",
    text: "Promover práticas financeiras responsáveis que beneficiem tanto os clientes quanto o meio ambiente.",
  },
  {
    title: "Excelência",
    text: "Garantir a máxima qualidade em todos os serviços prestados, superando as expectativas dos clientes",
  },
  {
    title: "Capacitação",
    text: " Investir no desenvolvimento contínuo de talentos, fornecendo educação e treinamento de alta qualidade.",
  },
  {
    title: "Abordagem Holística",
    text: "O Grupo Aion of Brazil oferece uma abordagem integrada que combina consultoria, gestão de ativos e tecnologia, proporcionando soluções completas e coerentes.",
  },
  {
    title: "Expertise Global",
    text: "Com uma presença global, o grupo traz as melhores práticas e conhecimentos do mercado internacional para o contexto local.",
  },
  {
    title: "Foco no Cliente",
    text: "A personalização e o atendimento centrado no cliente são pilares fundamentais, garantindo que cada solução seja adaptada às necessidades específicas.",
  },
];

export function AboutUs() {
  return (
    <Container>
      <Header />
      <section className="initial">
        <h3>Sobre nós</h3>
        <div className="container">
          <div className="header">
            <IoStar />
            <IoMdTrophy />
            <IoStar />
          </div>

          <div className="content">
            <div className="col-1">
              <div className="card">
                <p className="titleCard">Missão</p>
                <p className="textCard">
                  Estruturar negócios financeiros de excelência através de
                  gestões inovadoras que capacitem os nossos clientes a alcançar
                  os seus objetivos empresariais, impulsionando o crescimento
                  econômico e sustentável.
                </p>
              </div>
              <div className="card">
                <p className="titleCard">Visão</p>
                <p className="textCard">
                  Ser reconhecida globalmente como líder na estruturação de
                  negócios financeiros e de gestão no mercado global,
                  estabelecendo padrões de qualidade e inovação, e inspirando
                  confiança e respeito em todas as nossas interações.
                </p>
              </div>
            </div>
            <div className="col-2">
              <div className="card">
                <p className="titleCard">Valores</p>
                <p className="textCard">
                  <ul>
                    <li>
                      <span>Integridade</span>: Mantemos os mais altos padrões
                      éticos em todas as nossas ações e decisões.
                    </li>
                    <li>
                      <span>Inovação</span>: Investimos em uma cultura de
                      criatividade em inovações de sistemas e gestão financeira
                      para atender as necessidades de nossos parceiros e
                      clientes.
                    </li>
                    <li>
                      <span>Excelência</span>: Busca contínua na perfeição em
                      nossos serviços e produtos.
                    </li>
                    <li>
                      <span>Cliente em Primeiro Lugar</span>: Focamos nas
                      necessidades e satisfação de nossos clientes,
                      proporcionando um atendimento excepcional e personalizado.
                    </li>
                    <li>
                      <span>Sustentabilidade</span>: Comprometemo-nos com
                      práticas que respeitam o meio ambiente e a sociedade.
                    </li>
                    <li>
                      <span>Colaboração</span>: Valorizamos o trabalho em equipe
                      e a união para alcançar resultados superiores.
                    </li>
                    <li>
                      <span>Responsabilidade</span>: Assumimos a
                      responsabilidade por nossas ações e seus impactos no mundo
                      ao nosso redor.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="structure">
        <h3>ESTRUTURA DO GRUPO AION OF BRAZIL</h3>
        <p className="textContent">
          O Grupo Aion of Brazil é um conglomerado corporativo fundado pelo
          Instituto Aion do Brasil, composto por diversas entidades subsidiárias
          e institutos, cada uma especializada em diferentes aspectos da
          estruturação financeira e de gestão. Atua em múltiplos segmentos,
          incluindo:
        </p>
        <p className="textContent"></p>
        <ul>
          <li>Imobiliário</li>
          <li>Infraestruturas</li>
          <li>Energia</li>
          <li>Commodities</li>
          <li>Saúde</li>
          <li>Ativos</li>
          <li>Seguros</li>
          <li>Indústrias</li>
          <li>Tecnologias - Plataformas Digitais/Fintech</li>
          <li>Comunicação e Consultorias.</li>
        </ul>
      </section>

      <section className="slider">
        <h3>PROPÓSITO DO GRUPO AION OF BRAZIL</h3>
        <p>
          O propósito do Grupo Aion of Brazil é transformar a gestão financeira
          e operacional de empresas e indivíduos, proporcionando soluções
          inovadoras e eficientes que impulsionam o crescimento sustentável e a
          excelência operacional. O grupo se dedica a ser um parceiro confiável
          e estratégico, ajudando seus clientes a navegar pelas complexidades do
          mercado financeiro global.
        </p>

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slider.map((card) => {
            return (
              <SwiperSlide className="card">
                <h4>{card.title}</h4>
                <p>{card.text}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      <section className="global">
        <h3>Presença global <BsGlobe2/> </h3>
        <p>
          O GRUPO AION OF BRAZIL está presente em cinco continentes, com
          escritórios em diversas cidades importantes:
        </p>

        <div className="locates">
          <ul>
            <li>Salvador – Brasil </li>
            <li>São Paulo – Brasil </li>
            <li>Montevidéu – Uruguai</li>
            <li>Miami – Estados Unidos</li>
          </ul>

          <ul>

            <li>Hong Kong – China</li>
            <li>Madrid – Espanha</li>
            <li>Londres – Reino Unido</li>
            <li>Cidade do México – México</li>
          </ul>
        </div>
      </section>
    </Container>
  );
}
