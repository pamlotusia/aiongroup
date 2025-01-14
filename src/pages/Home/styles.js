import styled from "styled-components";
import analise from "../../assets/analise.jpg";

// Estilos principais
export const HomeContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  section.first {
    background-color: ${({ theme }) => theme.COLORS.GRAY_800};
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    .card {
      display: grid;
      padding: 1rem;
      gap: 0.5rem;
      margin: 1rem;
      border-radius: 10px;

      background-color: ${({ theme }) => theme.COLORS.GRAY_400};

      /* border-bottom: 6px solid ${({ theme }) => theme.COLORS.YELLOW}; */

      svg {
        font-size: 1.8rem;
      }

      .title {
        font-size: 1.7rem;
        margin: 2rem 0;
      }

      .text {
        font-size: 1.2rem;
        font-weight: 200;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
      }
    }
  }

  section.second {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.GRAY_800};

    .card {
      display: grid;
      padding: 1rem;
      gap: 0.5rem;
      margin: 1rem;
      border-radius: 10px;

      background-color: ${({ theme }) => theme.COLORS.LILAC_200};

      position: relative;

      .icon {
        width: 4rem;
        height: 4rem;

        background-color: ${({ theme }) => theme.COLORS.GRAY_800};
        color: ${({ theme }) => theme.COLORS.GRAY_200};

        position: absolute;
        top: -2rem;
        right: 1rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;
        svg {
          font-size: 2.2rem;
        }
      }

      .title {
        font-size: 1.7rem;
        font-weight: 500;
        margin: 2rem 0;
      }

      .text {
        font-size: 1.2rem;
        font-weight: 300;
      }
    }
  }

  section {
    max-width: 100%;
    padding: 3rem 5.5rem;

    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
    }
  }

  h3 {
    font-size: 3rem;
    font-family: "Bebas Neue", serif;
    text-align: center;

    margin: 2rem 0;
  }

  @media screen and (max-width: 900px) {
    margin-top: 2rem;

    flex-direction: column;
    gap: 1rem;

    section {
      padding: 1rem;

      .container {
        grid-template-columns: 1fr;
        gap: 0.3rem;
      }
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
