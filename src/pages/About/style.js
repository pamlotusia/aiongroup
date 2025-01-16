import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  section {
    margin: 0 auto;
    padding: 1rem 6rem 3rem;
  }

  .initial {
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    color: ${({ theme }) => theme.COLORS.GRAY_800};

    .header {
      width: 100%;
      display: flex;
      justify-content: center;
      color: ${({ theme }) => theme.COLORS.ORANGE};
      margin: 2rem auto;
      gap: 1rem;

      svg {
        font-size: 1.1rem;
      }
    }

    .content {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    .col-1 {
      display: grid;
      gap: 1rem;
    }
    .card {
      width: 500px;
      padding: 1rem;

      .titleCard {
        font-size: 1.4rem;
        font-weight: 500;
        margin: 1rem 0;
      }
    }

    ul {
      list-style: none;
    }
    li {
      margin: 0 0 1rem;

      span {
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.ORANGE};
      }
    }
  }

  .structure {
    background-color: ${({ theme }) => theme.COLORS.GRAY_800};
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    h3 {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    .textContent {
      font-size: 1.1rem;
      font-weight: 300;
      text-align: justify;
    }

    ul {
      margin: 1.9rem 0;

      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    li {
      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    li:hover {
      color: ${({ theme }) => theme.COLORS.ORANGE};
    }
  }

  .slider {
    > p {
      font-size: 1.1rem;
      text-align: justify;
    }

    .mySwiper {
      width: 100%;
      margin: 3rem 0;
    }

    .swiper-pagination-bullet {
      background: ${({ theme }) => theme.COLORS.ORANGE};
    }
    .card {
      width: auto;
      height: 13rem;
      max-width: 300px;
      flex-shrink: 0;
      background: ${({ theme }) => theme.COLORS.GRAY_100};
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

      h4 {
        margin: 0 0 1rem;
        font-size: 1.1rem;
      }
    }
  }

  .global {
    background-color: ${({ theme }) => theme.COLORS.GRAY_800};
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    h3 {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin: 1rem 0 0 ;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    p {
      text-align: center;
      font-weight: 300;
      font-size: 1.1rem;
      margin: 1rem 0;
    }
    
    ul{
        list-style: none;

    }

    li:hover{
      color: ${({ theme }) => theme.COLORS.ORANGE};
    }
    
    ul:first-child{
        text-align: right;
    }

    .locates{
        margin: 1rem 0;
        display: flex;
        max-width: 600px;
        justify-content: center;
        margin: 0 auto;
        gap: 1rem;
    }
  }
`;
