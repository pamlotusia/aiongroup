import styled from "styled-components";

export const ImageContainer = styled.div`
  position: relative;

  img {
    height: 30rem;
    position: relative;
    width: 100%;
    object-fit: cover;
    filter: brightness(0.8);
    animation: expandImage 3s ease-out forwards; /* Animação */
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(270deg, #254a3a 1.1%, rgba(37, 74, 58, 0) 100%);
    z-index: 1; /* Garante que o gradiente fique acima da imagem */
  }

  div {
    z-index: 2;
    position: absolute;
    top: 25%;
    width: 60%;
    margin: 0 5rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    /* Animação */
    opacity: 0;
    transform: translateX(-100%);
    animation: slideIn 1.5s ease-out forwards;

    h3 {
      font-size: 3rem;
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.5rem;
      font-weight: 200;
    }

    @media (max-width: 1000px) {
      width: 100%;
      margin: 0;
      /* top: 20%; */
      padding: 0 3rem;
      
      h3{
        max-width: 100%;
        font-size: 2rem;
        margin-bottom: 0;
      }

      p{
        padding: 3rem;
      }


    }
  }

  /* Definindo a animação */
  @keyframes expandImage {
    0% {
      transform: scale(1.5); /* Começa com 1,5 vezes o tamanho */
    }
    100% {
      transform: scale(1); /* Termina no tamanho normal */
    }
  }

  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
