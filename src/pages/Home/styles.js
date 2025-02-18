import styled from "styled-components";

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
      margin: 1rem 0;
      border-radius: 10px;

      background-color: ${({ theme }) => theme.COLORS.GRAY_400};

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

    .solutions {
      display: flex;
      align-items: flex-start;
      width: 100%;
      gap: 2rem;

      img {
        min-width: 50%;
      }
    }

    .cards {
      display: grid;
    }

    .card {
      display: flex;
      gap: 1rem;
      padding: 1rem;
      margin: 0 0 1rem;

      background-color: ${({ theme }) => theme.COLORS.ORANGE_200};

      .textContent {
        gap: 1rem;
      }

      .icon {
        min-width: 2.3rem;
        height: 2.3rem;

        background-color: ${({ theme }) => theme.COLORS.ORANGE};
        color: ${({ theme }) => theme.COLORS.GRAY_200};

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;

        svg {
          font-size: 1.2rem;
        }
      }

      .title {
        font-size: 1.3rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.GRAY_800};
      }

      .text {
        font-size: 1.1rem;
        font-weight: 400;
        color: #2f2f2f;
      }
    }
  }

  section.third {
    margin: 0 auto;

    .container {
      display: flex;
    }

    p {
      margin: 1rem 0;
      color: ${({ theme }) => theme.COLORS.GRAY_800};
      font-size: 1.1rem;
    }

    span {
      color: ${({ theme }) => theme.COLORS.ORANGE};
      font-weight: 500;
    }

    img {
      width: 500px;
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

  @media screen and (max-width: 1000px) {
    flex-direction: column;

    section {
      padding: 1rem;

      .container {
        grid-template-columns: 1fr;
        gap: 0.3rem;
      }

      .solutions {
        flex-direction: column;

        img {
          max-width: 100%;
        }
      }

    }
    section.third {
      .container {
        flex-direction: column;

        img{
          max-width: 100%;
        }
      }
    }
  }
`;

export const BackgroundContainer = styled.div`
  height: 20rem;
  width: 100%;

  position: relative;

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
