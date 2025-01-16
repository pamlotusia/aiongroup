import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ScrollReveal from "scrollreveal";

import { Header } from "../../components/Header";
import { HomeContainer } from "./styles";
import { Slider } from "../../components/Swiper";
import { Footer } from "../../components/Footer";

import Accordion from "../../components/Accordion";

// icons
import { GrTechnology } from "react-icons/gr";
import { TbAutomation } from "react-icons/tb";
import { BsClipboardData } from "react-icons/bs";
import { GiHistogram } from "react-icons/gi";

import image from "../../assets/admin.jpg";
import consulting  from '../../assets/consulting.jpg'
import { Key } from "@mui/icons-material";
const diferrentials = [
  {
    title: "Expertise Internacional",
    text: "A AION GROUP OF BRAZIL se destaca pela sua vasta experiência e conhecimento no mercado financeiro global, trazendo práticas e estratégias de sucesso internacionais adaptadas ao mercado local.",
  },
  {
    title: "Inovação Constante",
    text: "Estamos sempre na vanguarda das inovações financeiras, utilizando tecnologia de ponta e métodos avançados para oferecer soluções personalizadas e eficazes.",
  },
  {
    title: "Soluções Personalizadas",
    text: "Nossas soluções são adaptadas às necessidades específicas de cada cliente, garantindo um atendimento excepcional e resultados superiores.",
  },
];

const solutions = [
  {
    title: "Automatização de Processos",
    text: "Implementamos tecnologias avançadas de automatização que reduzem custos e aumentam a eficiência operacional.",
    icon: <TbAutomation />,
  },
  {
    title: "Análise de Dados",
    text: "Utilizamos ferramentas de análise de dados para fornecer insights valiosos que ajudam nossos clientes a tomar decisões estratégicas informadas.",
    icon: <BsClipboardData />,
  },
  {
    title: "Consultoria Estratégica",
    text: " Oferecemos consultoria especializada para otimizar a gestão financeira e operacional, promovendo crescimento e sustentabilidade.",
    icon: <GiHistogram />,
  },
];
export function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    // Inicializa ScrollReveal
    ScrollReveal().reveal(".reveal", {
      distance: "50px",
      origin: "bottom",
      duration: 800,
      easing: "ease-in-out",
      reset: true, // Ativa a repetição ao rolar para cima
      interval: 200,
    });
  }, []);

  return (
    <HomeContainer className="reveal">
      <Header />

      <Slider />

      <section className="first" id="aboutUs">
        <h3>Nós fazemos a diferença</h3>

        <div className="container">
          {diferrentials.map((index) => {
            return (
              <div className="card" data-aos="fade-left" key={index.title}>
                <GrTechnology />
                <p className="title">{index.title}</p>

                <p className="text">{index.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="second" id="products">
        <h3>Inovações e Soluções em Gestão Financeira</h3>

        <div className="solutions">
          <img src={image} alt="" />
          <div className="cards">
            {solutions.map((index) => {
              return (
                <div className="card" data-aos="fade-right" key={index.title}>
                  <div className="icon">{index.icon}</div>
                  <div className="textContent">
                    <p className="title">{index.title}</p>
                    <p className="text">{index.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="third">
        <h3>Na aion group você pode contar com:</h3>

        <div className="container">

          <div className="textContent">
            <p>
              <span>Atendimento Personalizado</span>: Nossa abordagem centrada
              no cliente garante que cada projeto seja tratado com a máxima
              atenção e dedicação, resultando em soluções que verdadeiramente
              atendem às suas necessidades.
            </p>
            <p>
              <span>Resultados Comprovados</span>: Temos um histórico de sucesso comprovado, com inúmeros casos de clientes que alcançaram melhorias significativas em suas operações e finanças graças aos nossos serviços.
            </p>
            <p>
              <span>Parceria de Longo Prazo</span>: Valorizamos relações duradouras e trabalhamos para ser parceiros confiáveis a longo prazo, oferecendo suporte contínuo e inovação constante.

            </p>
          </div>
          <img src={consulting} alt="" />
        </div>
        {/* <Accordion /> */}
      </section>

      <Footer />
    </HomeContainer>
  );
}
