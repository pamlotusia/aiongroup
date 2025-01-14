import styled from "styled-components";

export const Container = styled.div`
  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 100vh;
    margin-bottom: 5rem;

    .header {
      height: 23rem;
      width: 100%;

      display: flex;
      justify-content: end;
      position: relative;

      .textHeader {
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          #f0b90b 63.6%,
          rgba(37, 74, 58, 0) 100%
        );
        position: absolute;
      }

      p {
        top: 0;
        left: 0;
        font-style: oblique;
        width: 65%;
        padding: 5rem 6rem;
        font-size: 1.8rem;
        font-weight: 300;
        color: ${({ theme }) => theme.COLORS.GRAY_800};

        span {
          font-weight: 500;
        }
      }

      img {
        height: 100%;
        width: 50%;
      }
    }
  }

  @media(max-width:1000px){
    main{
      .header{
        .textHeader{
          p{
            width: 90%;
            padding: 1.4rem;
            font-size: 1.5rem;
          }
        }
      }
    }

}
`;

export const About = styled.div`
  margin: 1rem auto;

  max-width: 81rem;
  gap: 5rem;
  height: 100%;

  .textContent {
    width: 100%;

    ul {
      margin: 1rem auto;
      padding: 0 1rem;
    }
    li {
      line-height: 2;
      font-size: 1.2rem;
      font-weight: 300;
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }

    li::marker {
      color: ${({ theme }) => theme.COLORS.YELLOW};
    }

    .title {
      font-size: 2rem;
      font-weight: 500;

      margin: 0 auto 1rem;

      text-align: justify;
      color: ${({ theme }) => theme.COLORS.GREEN_300};
    }

    .text {
      margin: 1rem auto;

      font-size: 1.2rem;
      font-weight: 300;
      color: ${({ theme }) => theme.COLORS.GRAY_400};

      span {
        color: ${({ theme }) => theme.COLORS.GREEN_300};
        font-weight: 400;
      }
    }
  }


  .services {
    display: flex;
    position: relative;

    img{
      display: block;
      width: 50%;
      position: relative;
      z-index: 1;
    }

    .servicesList {
      width: 100%;
      margin: 0 1rem;
      li {
        line-height: 2;
        font-size: 1.2rem;
        font-weight: 300;
        color: ${({ theme }) => theme.COLORS.GRAY_400};
      }

      li::marker {
        color: ${({ theme }) => theme.COLORS.GRAY_800};
      }
    }
  }

  .services::before{
    content: "";
    position: absolute;
    top: 1.2rem; 
    right: -1rem;
    width: 50%;
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.YELLOW}; 
    z-index: 0;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 1rem;
    gap: 1rem;

    .services{
      width: 100%;
      flex-direction: column;
    }
    .services::before, .services img{
      display: none;
    }
  }
`;
