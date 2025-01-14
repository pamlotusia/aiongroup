import styled from "styled-components";

export const Container = styled.div`
  main {
    margin: 0 auto 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 100vh;
  }
`;

export const About = styled.div`
  margin: 0rem auto 5rem;
  height: 100%;

  display: flex;
  gap: 3rem;

  background-color: ${({ theme }) => theme.COLORS.GREEN_800};

  .textContent {
    width: 100%;
    padding: 2rem 5rem 2rem 2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    .title {
      font-size: 2rem;
      font-weight: 400;

      margin: 0 auto 1rem;

      text-align: justify;
    }

    .text {
      margin: 1rem auto;

      font-size: 1.2rem;
      font-weight: 300;

      span {
        color: ${({ theme }) => theme.COLORS.GREEN_300};
        font-weight: 400;
      }
    }
  }

  img {
    width: 30%;
    object-fit: cover;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 1rem;
    margin: 0;

    main {
    }

    img {
      width: 100%;
    }

    .textContent {
      padding: 0 2rem;

      .title {
        font-size: 1.7rem;
        text-align: left;
      }
    }
  }
`;

export const Specialties = styled.div`
  display: flex;
  gap: 0 3rem;
  max-width: 85rem;
  margin: 0 auto 3rem;

  img {
    width: 50%;
    height: 100%;
  }

  .specialties {
    width: 100%;

    .title {
      font-size: 2rem;
      font-weight: 300;

      margin: 0 auto 1rem;
      color: ${({ theme }) => theme.COLORS.GREEN_300};

      span {
        color: ${({ theme }) => theme.COLORS.GREEN_800};
        font-weight: 400;
      }
    }

    ol {
      margin: 0 2rem;
    }

    li {
      line-height: 2;
      font-size: 1.3rem;
      font-weight: 300;
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }

    li::marker {
      color: ${({ theme }) => theme.COLORS.GREEN_800};
      font-weight: 400;
    }
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    flex-direction: column-reverse;
    margin: 0;

    img {
      width: 100%;
      height: 50vh;
      object-fit: cover;
    }

    .specialties {
      padding: 0.8rem;

      ol {
        margin: 0 2rem;
      }
    }
  }
`;
