import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Estilo base do Swiper
import "swiper/css/navigation"; // Estilos de navegação
import "swiper/css/pagination"; // Estilos de paginação
import { ImageContainer } from "./styles";
// import consultoria from "../../assets/15410.jpg";
import welcome from "../../assets/welcome.jpg";
import security from "../../assets/security.jpg";
import consulting from "../../assets/freepik-export-20250114141330y5Zm.jpeg";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export function Slider() {
  const background = [
    {
      image: consulting,
      title: "Soluções financeiras que impulsionam o futuro da sua empresa.",
      text: "A AION GROUP OF BRAZIL existe no mercado financeiro para preencher uma necessidade crucial: a de fornecer soluções financeiras inovadoras e sustentáveis que impulsionam o crescimento e desenvolvimento econômico, tanto a nível nacional quanto global.",
    },
  ];
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      // Adicione os módulos desejados
      spaceBetween={20} // Espaço entre slides
      slidesPerView={1} // Quantos slides mostrar por vez
      navigation //
      pagination={{ clickable: true }} // Paginação clicável
      loop={true} // Loop infinito
      style={{ maxWidth: "100%" }}
    >
      {/* Slides */}

      {background.map((index) => {
        return (
          <SwiperSlide style={{ height: "32rem" }}>
            <ImagePosition
              image={index.image}
              text={index.text}
              title={index.title}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export function ImagePosition({ image, title, text }) {
  return (
    <ImageContainer>
      <img src={image} />
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </ImageContainer>
  );
}
