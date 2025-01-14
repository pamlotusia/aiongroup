import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  color: ${({ theme }) => theme.COLORS.GRAY_800};

  &:hover {
    transform: scale(1.05);
  }

  p {
    width: 15rem;
    font-size: 1.2rem;
    font-weight: 400;
  }

  svg {
    font-size: 36px;
    color: ${({ theme }) => theme.COLORS.GREEN_300};
  }
`
