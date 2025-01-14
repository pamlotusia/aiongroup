import styled from "styled-components";

export const Container = styled.div`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 2rem;
  max-width: 37.5rem;
  color: ${({ theme }) => theme.COLORS.GRAY_500};

  h1 {
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

export const Content = styled.div`
  max-width: 100%;

  p {
    font-size: 20px;
    font-weight: 500;
  }

  .active label.Mui-focused {
    color: ${({ theme }) => theme.COLORS.GREEN_800};
  }

  .active .MuiOutlinedInput-root {
    background-color: ${({ theme }) => theme.COLORS.WHITE};

    &:hover fieldset {
      border-color: ${({ theme }) => theme.COLORS.GREEN_800};
    }

    &.Mui-focused fieldset {
      border-color: ${({ theme }) => theme.COLORS.GREEN_800};
    }
  }
`;

export const ProgressiveContainer = styled.div`
  width: 100%;

  .buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    height: 3rem;
    border: none;
    font-weight: bold;
    font-size: 1rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .progress-container {
    width: 100%;
    height: 0.7rem;
    margin: 1rem 0;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
  }

  .barProgress {
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.YELLOW};
    border-radius: 5px;
    transition: width 0.3s ease;
  }

  .back {
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
  .next {
    background-color: ${({ theme }) => theme.COLORS.YELLOW};
  }

  @media (min-width: 1000px) {
    input {
      min-width: 508px;
    }
  }
`;

export const FinalButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  gap: 0.5rem;

  button {
    max-width: 100%;
    padding: 1rem 1.5rem;
  }

  .reset {
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
  .save {
    background-color: ${({ theme }) => theme.COLORS.YELLOW};
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
