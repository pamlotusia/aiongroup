import styled from "styled-components";

export const Container = styled.div`
  section {
    margin: 0 auto;
    padding: 0 5.5rem 3rem;
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

  h3{
    margin: 2rem 0 0;
  }



  .card {
    background-color: ${({ theme }) => theme.COLORS.WHITE};

    padding: 1rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};

    p{
    margin: 0 0 2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    font-size: 1.1rem;
  }
  }

  .title {
    color: ${({ theme }) => theme.COLORS.BLUE_600};
    font-size: 1.3rem;
    font-weight: 500;
  }

  .card:hover {
    background-color: ${({ theme }) => theme.COLORS.BLUE_400};

    padding: 1rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

  }

  .card:hover .title ,
  .card:hover p{
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  .card:hover .icon {
    color: ${({ theme }) => theme.COLORS.BLUE_400};
  }

  .icon {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.BLUE_200};
    color: ${({ theme }) => theme.COLORS.BLUE_600};

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

  @media (max-width: 1000px) {

    section {
      padding: 1rem 8px;
    }
    .container {
      grid-template-columns: 1fr;
    }
  }
`;
