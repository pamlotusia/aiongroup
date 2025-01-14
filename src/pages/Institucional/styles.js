import styled from "styled-components";

export const Container = styled.div`
  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 100vh;

    header {
      width: 100%;

      color: ${({ theme }) => theme.COLORS.WHITE};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      margin: 0 0 2rem;
    }
  }

  .text {
    font-size: 1.5rem;
  }
`;
export const Mvv = styled.div`

display: flex;
gap: 1rem;
	text-align: center;
	justify-content: center;

    @media (max-width:1000px){
			flex-wrap: wrap;
		}
	img {
		width: 6rem;
		height: 6rem;
	}

	h2 {
	 font-size: 3rem;
				color: ${({ theme }) => theme.COLORS.YELLOW};
	}
	p {
		padding: 1rem;
		font-size: 1.5rem;
			font-weight: 300;
}

.card {
	padding: 2rem;
	max-width: 25%;
    @media (max-width:1000px){
    max-width: 80%;

  }
}

.content{
 display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
}
`
export const Background = styled.div`
  position: relative;
  width: 100%;
  height: 28rem;

  display: flex;
  overflow: hidden;

  div {
    width: 80%;
    padding: 2rem;
    position: relative;
    z-index: 2;

    background: linear-gradient(90deg, #022c31 65.6%, rgba(37, 74, 58, 0) 100%);

    padding: 10rem 5rem 5rem;

    span {
      color: ${({ theme }) => theme.COLORS.YELLOW};
    }

    p {
      margin: 0 auto;
      font-size: 1.5rem;
      font-weight: 200;
      line-height: 1.5;
      max-width: 60rem;
    }
  }
  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }

  @media (max-width: 1000px) {
    div {
      padding: 3rem;

      p {
        font-size: 1.1rem;
      }
    }
  }
`;

export const Products = styled.section`
  margin: 2rem auto;
	background: #022c31;
	padding: 3rem 10rem;
	width: 100%;
	display: flex;
flex-direction: column;

  .title {
    font-size: 2rem;
    font-weight: 400;

    margin: 1rem auto;

    text-align: center;
    color: white;
  }

  .text {
    margin: 1rem auto 1.5rem;

    font-size: 1.3rem;
    font-weight: 300;
    color: white;

    span {
      font-weight: 400;
    }
  }

  .productContainer {
    display: flex;
    justify-content: space-between;
    gap: 0.8rem;
  }

  .product {
		background: white;
    width: 28rem;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    border-radius: 8px 8px;

    img {
      height: 13rem;
      width: 100%;

      border-radius: 8px 8px 0 0;
    }

    .textCard {
      padding: 1rem;
    }

    h4 {
      color: ${({ theme }) => theme.COLORS.GREEN_800};
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.GRAY_400};

      span {
        color: ${({ theme }) => theme.COLORS.YELLOW};
      }
    }

    @media (max-width: 1000px) {
      margin: 1.3rem auto;
      max-width: 100%;
    }
  }

  @media (max-width: 800px) {
    padding: 1rem 2rem;
    flex-direction: column;

    .title {
      width: 100%;
      margin: 0 auto 1.5rem;
      word-spacing: 1;
      font-size: 1.6rem;
      text-align: inherit;
    }

    .productContainer {
      flex-direction: column;
      align-items: baseline;

      .product {
        width: 100%;
      }
    }
  }
`;

export const About = styled.div`
  margin: 1rem auto;

  max-width: 81rem;
  display: flex;
  gap: 5rem;
  height: 100%;

  .textContent {
    width: 100%;

    .title {
      font-size: 1.8rem;
      font-weight: 300;

      margin: 0 auto 1rem;

      text-align: justify;
      color: ${({ theme }) => theme.COLORS.GREEN_300};

      span {
        font-weight: 500;
      }
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

    .service {
      line-height: 1.4;
      font-size: 1.2rem;
      font-weight: 300;
      color: ${({ theme }) => theme.COLORS.GRAY_800};
    }
  }

  .images {
    width: 50%;

    img {
      width: 100%;
      height: 80vh;
      object-fit: cover;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 1rem;
    gap: 1rem;

    .images {
      width: 100%;

      img {
        height: 30%;
      }
    }
  }
`;
