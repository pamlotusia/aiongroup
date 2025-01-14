import styled from 'styled-components'

// Estilização principal
export const Container = styled.div`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 2rem;
  max-width: 37.5rem;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  
  h4 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 14px;
    margin-bottom: 1.2rem;
  }

  /* form inputs */
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

  @media (max-width: 1000px){
    padding: 1rem;
  }
`

export const StyledButton = styled.button`
  width: 100%;
  padding: .6rem  0;

  background-color: ${({ theme }) => theme.COLORS.YELLOW};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: none;
  border-radius: 5px;

  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
`
