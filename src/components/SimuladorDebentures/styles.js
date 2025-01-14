import styled from "styled-components";

// Estilos principais
export const SimuladorContainer = styled.div`
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
`;

export const ResultadoCard = styled.div`
  margin-top: 20px;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;

  & h6 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #ddba33;
  }

  & p {
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
  }
`;
