import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 5.5rem;

  img {
    height: 4rem;
  }

  @media (max-width: 900px) {
    padding: 1rem 2rem;
  }
`
