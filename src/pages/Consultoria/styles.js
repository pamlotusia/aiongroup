import styled from "styled-components";

export const Container = styled.div`
  main {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 100vh;

    background-color: ${({ theme }) => theme.COLORS.BLUE_200};
  }

  .container {
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 2 auto;
    gap: 1rem;
  }

  .card {
    background-color: ${({ theme }) => theme.COLORS.WHITE};

    padding: 1rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }

  .card:hover {
    background-color: ${({ theme }) => theme.COLORS.BLUE_700};

    padding: 1rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &.icon {
      background-color: ${({ theme }) => theme.COLORS.BLUE_200};
      color: ${({ theme }) => theme.COLORS.BLUE_700};
    }
  }
  .icon {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.COLORS.BLUE_200};
      color: ${({ theme }) => theme.COLORS.BLUE_700};

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        font-size: 2rem;
      }
    }

  .card > * {
    margin: 5px 0;
  }

  .title {
    color: ${({ theme }) => theme.COLORS.BLUE_700};
    font-size: 1.3rem;
    font-weight: 500;
  }

  @media (max-width: 1000px) {
    .container {
      grid-template-columns: 1fr;
    }
  }
`;
