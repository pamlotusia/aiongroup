import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Estilo base do Swiper
import "swiper/css/navigation"; // Estilos de navegação
import "swiper/css/pagination"; // Estilos de paginação
import { ImageContainer } from "./styles";
// import consultoria from "../../assets/15410.jpg";
import welcome from "../../assets/welcome.jpg";
import novelty from "../../assets/novelty.jpg";
import security from "../../assets/security.jpg";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export function Slider() {
  const background = [
    {
      image: welcome,
      title: "Quem Somos",
      text: "A Global Force Bank é uma fintech ousada e inovadora que está revolucionando o mundo financeiro. Nosso objetivo é transformar a forma como você interage com o dinheiro, unindo segurança, tecnologia e transparência.",
    },
    {
      image: security,
      title: "Transformação Digital com Segurança",
      text: "Com a Global Force Bank, você pode converter moedas fiduciárias, como reais e dólares, em tokens digitais. Porém, não se trata de qualquer token: nossos ativos digitais são 100% lastreados por um fundo de reserva em moeda real.",
    },
    {
      image: novelty,
      title: " A Nova Era das Finanças",
      text: "Na Global Force Bank, acreditamos que a inovação financeira deve ser acessível, confiável e estável. Estamos aqui para tornar o futuro digital mais seguro, abrindo caminho para uma economia mais integrada e globalizada",
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
      style={{maxWidth: '100%'}}
    >
      {/* Slides */}

      {background.map((index) => {
        return (
          <SwiperSlide>
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
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </ImageContainer>
  );
}
