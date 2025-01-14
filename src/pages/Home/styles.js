import styled from "styled-components";
import analise from "../../assets/analise.jpg";

// Estilos principais
export const HomeContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  section {
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 10rem;

    p {
      font-size: 36px;
      color: white;

      position: absolute;
      left: 0;
    }

    @media screen and (max-width: 900px) {
      margin-top: 2rem;

      flex-direction: column;
      gap: 1rem;
    }
  }
`;

export const BackgroundContainer = styled.div`
  height: 20rem;
  width: 100%;

  position: relative;

  background-image: url(${analise});
  background-size: cover;
  filter: brightness(0.7);
`;

export const TextContainer = styled.div`
  display: grid;
  justify-content: end;
  gap: 1rem;

  padding: 5rem 10rem;
  text-align: left;
  color: ${({ theme }) => theme.COLORS.WHITE};

  font-size: 3.2rem;
  font-weight: 400;

  text-transform: uppercase;
  word-wrap: break-word;

  margin-bottom: 1rem;

  p {
    word-wrap: break-word;
    position: absolute;
    top: 25%;

    color: ${({ theme }) => theme.COLORS.WHITE};
    animation-fill-mode: forwards; /* Mantém o estado final da animação */
  }

  button {
    position: absolute;
    bottom: 5rem;
    max-width: 15rem;
    font-size: 1.1rem;
    padding: 0.5rem 2rem;

    background-color: ${({ theme }) => theme.COLORS.YELLOW};
    border: none;
    border-radius: 3px;
  }

  @media screen and (max-width: 900px) {
    /* texto */
  }

  @keyframes slidein {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideout {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(-100%);
      opacity: 0;
    }
  }
`;


// export const About = styled.div`
//   padding: 9rem 12rem;
//   display: flex;
//   justify-content: space-between;
//   gap: 5rem;

//   .title{
//       color: ${({theme})=> theme.COLORS.GREEN_800};
//       font-size: 3rem;
//       height: fit-content;
//       width: 100%;
//       margin: 0;

//       border-bottom: 1px solid #ccc;
//     }

//   .subtitle{
//       color: ${({theme})=> theme.COLORS.GREEN_300};
//       font-size: 1.2rem;
//       font-weight: 400;
//       height: fit-content;
//       margin: 0;
//     }

//   .content {
//     display: flex;
//     flex-direction: column;
//     align-items: baseline;
//     gap: 2rem;

//     .text {
//       width: 40rem;
//       text-align: justify;

//       color: ${({ theme }) => theme.COLORS.GRAY_400};
//       font-weight: 300;
//       line-height: 1.5;
//       font-size: 1.1rem;

//       span {
//         font-weight: 400;
//       }
//     }

//     button {
//       background-color: ${({ theme }) => theme.COLORS.YELLOW};
//       color: ${({ theme }) => theme.COLORS.WHITE};
//       font-size: 1.2rem;
//       font-weight: 300;
//       padding: 0.5rem 1rem;
//       border: 0;
//       border-radius: 2rem;
//     }
//     button:hover {
//       background-color: transparent;
//       color: ${({ theme }) => theme.COLORS.YELLOW};
//       border: 1px solid ${({ theme }) => theme.COLORS.YELLOW};
//     }
//   }
// `;
