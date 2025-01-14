import styled from "styled-components";

export const Container = styled.nav`
  z-index: 7;
  display: flex;

  ul {
    list-style: none;

    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.GREEN_800};
  }

  .btn-mobile {
    display: none;
  }

  @media screen and (max-width: 800px) {
    .btn-mobile {
      z-index: 2;
      display: block;

      border: none;
      background-color: transparent;
      color: ${({ theme }) => theme.COLORS.GREEN_800};

      cursor: pointer;

      svg {
        font-size: 28px;
      }
    }

    ul {
      display: none;

      &.open {
        z-index: 2;
        margin-top: 2rem;

        width: max-content;
        height: 100vh;

        display: block;
        background-color: ${({ theme }) => theme.COLORS.WHITE};

        padding: 1rem 8px;

        position: absolute;
        right: 0;
        text-align: right;
      }

      li {
        margin: 8px 0;
        font-size: 1.3rem;
      }
    }
  }
`;

export const Register = styled.div`
  display: flex;

  button {
    border: none;
    border-radius: 5px;
    padding: 6px 12px;
    margin: 0 8px;

    font-size: 14px;
    font-weight: 700;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-weight: 500;
    }
  }

  .signup {
    background-color: ${({ theme }) => theme.COLORS.YELLOW};
    a {
      color: ${({ theme }) => theme.COLORS.GRAY_800};
    }
  }

  .signin {
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  }

  @media screen and (max-width: 900px) {
    margin: 0 0 2rem;
    display: grid;
    gap: 1rem;

    button {
      width: 100%;
      margin: 0 2px;
    }
  }
`;

export const SecondaryContainer = styled.div`
width: 100%;
  z-index: 6;
  position: absolute;
  right: 0;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 4px 0;

  ul {
    max-width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    li {
      padding: 2px;
      text-transform: capitalize;

      a {
        text-decoration: none;
        color: #333;

        &:hover {
          color: #007bff;

        }
      }
      @media (max-width: 1000px) {
        padding: 0;
        margin: 6px 0;
      }
    }
  }

  &.submenu {
    display: block;
    max-width: 100%;
  }
`;
