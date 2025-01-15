import styled from "styled-components";

export const Container = styled.li`
  .link {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 2rem;
    position: relative;
    font-family: "Bebas Neue", serif;

    color: ${({ theme }) => theme.COLORS.GRAY_800};
  }

  .link:hover {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    transition: color 0.2s ease-in-out;
    transition: 1s width ease-in;
  }

  .link::after {
    content: "";
    transition: width 0.3s ease-in-out;

    width: 0;
    height: 2px;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    position: absolute;
    bottom: -4px;
    left: 0;
  }

  .link:hover::after {
    width: 100%;
  }

  @media (max-width:1000px){

    .link{
      padding: 0 0 0 2rem;
    }
  }
`;
