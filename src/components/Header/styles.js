import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 5.5rem;

  .logo{
    font-size: 3rem;
    font-family: "Bebas Neue", serif;
  }

  @media (max-width: 900px) {
    padding: 1rem 2rem;
  }
`
