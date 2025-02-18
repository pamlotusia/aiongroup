import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 1rem 6rem;

  background-color: ${({ theme }) => theme.COLORS.GRAY_800};
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  p {
    font-size: 1rem;
  }

  .links {
    display: flex;
    align-items: end;
    flex-direction: column;
    gap: 1rem;
  }

  .contact {
    text-align: right;
    
    p{
      margin: .5rem 0;      
    }
  }

  a:hover,
  .contact:hover {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  @media (max-width: 1000px) {
    padding: 1rem;
  }
`;
