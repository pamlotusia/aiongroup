import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button{
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
  }

  h3{
    font-size: 3rem;
    font-family: "Bebas Neue", serif;
    text-align: center;

    margin: 2rem 0;
  }

  button:hover{
    filter: brightness(0.9);
  }

  @media(max-width:650px){
    html{
      font-size: 87.5%;
    }
  }
`;

export default GlobalStyle;

