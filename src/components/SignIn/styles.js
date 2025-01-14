import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem;
  max-width: 31rem;

  text-align: center;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  color: ${({ theme }) => theme.COLORS.GREEN_800};

  h4 {
    font-size: 2rem;
    font-weight: 500;
    margin: 1.5rem 0;
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

  a {
    color: ${({ theme }) => theme.COLORS.YELLOW};
    text-decoration: underline;
  }
`

export const StyledButton = styled.button`
  width: 100%;
  padding: 10px 20px;

  margin: 20px 0;

  background-color: ${({ theme }) => theme.COLORS.YELLOW};
  color: ${({ theme }) => theme.COLORS.GRAY_800};

  border: none;
  border-radius: 5px;

  font-size: 16px;
  font-weight: 500;
`
