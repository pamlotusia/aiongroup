import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title as ChartTitle, Tooltip, Legend } from "chart.js";
import logo from "../assets/gbflogo.png"; // Certifique-se de que o logo está no caminho correto

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ChartTitle, Tooltip, Legend);

// Estilo principal
const SimuladorContainer = styled(Container)`
  font-family: "Montserrat", sans-serif;
  background: linear-gradient(180deg, #011e3b, #343a40 100%);
  color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

// Estilo do logotipo
const Logo = styled.img`
  display: block;
  margin: 0 auto 20px;
  height: 60px;
`;

// Estilo do título principal do simulador
const SimuladorTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
`;

// Estilo para o botão
const StyledButton = styled(Button)`
  background: linear-gradient(90deg, #ddba33, #b5972d);
  color: #ffffff;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  margin-top: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: linear-gradient(90deg, #b5972d, #ddba33);
  }
`;

const SimuladorAvancado = () => {
  const [aporteInicial, setAporteInicial] = useState(50000);
  const [aporteMensal, setAporteMensal] = useState(1000);
  const [prazo, setPrazo] = useState(12);
  const [dividendoMensal, setDividendoMensal] = useState(0.5);
  const [resultado, setResultado] = useState(null);

  const calcularSimulacao = () => {
    let capitalSemReinvestir = aporteInicial;
    let capitalComReinvestir = aporteInicial;
    let labels = [];
    let dataSemReinvestir = [];
    let dataComReinvestir = [];

    for (let i = 1; i <= prazo; i++) {
      const dividendos = capitalSemReinvestir * (dividendoMensal / 100);
      capitalSemReinvestir += aporteMensal;

      const dividendosReinvestidos = capitalComReinvestir * (dividendoMensal / 100);
      capitalComReinvestir += aporteMensal + dividendosReinvestidos;

      labels.push(`Mês ${i}`);
      dataSemReinvestir.push(capitalSemReinvestir + dividendos);
      dataComReinvestir.push(capitalComReinvestir);
    }

    setResultado({
      labels,
      datasets: [
        {
          label: "Sem Reinvestimento",
          data: dataSemReinvestir,
          borderColor: "rgba(75, 192, 192, 1)",
          fill: false,
        },
        {
          label: "Com Reinvestimento",
          data: dataComReinvestir,
          borderColor: "rgba(153, 102, 255, 1)",
          fill: false,
        },
      ],
    });
  };

  useEffect(() => {
    calcularSimulacao();
  }, [aporteInicial, aporteMensal, prazo, dividendoMensal]);

  return (
    <SimuladorContainer maxWidth="md">
      <Logo src={logo} alt="Global Force Bank" />
      <SimuladorTitle>Simulador Avançado de Investimentos</SimuladorTitle>

      <Box display="flex" flexDirection="column" gap={2} marginBottom={4}>
        <TextField
          label="Aporte Inicial (R$)"
          type="number"
          value={aporteInicial}
          onChange={(e) => setAporteInicial(Number(e.target.value))}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Aporte Mensal (R$)"
          type="number"
          value={aporteMensal}
          onChange={(e) => setAporteMensal(Number(e.target.value))}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Prazo (meses)"
          type="number"
          value={prazo}
          onChange={(e) => setPrazo(Number(e.target.value))}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Dividendo Mensal (%)"
          type="number"
          value={dividendoMensal}
          onChange={(e) => setDividendoMensal(Number(e.target.value))}
          variant="outlined"
          fullWidth
        />
      </Box>

      {resultado && (
        <Line
          data={resultado}
          options={{
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: "Projeção de Crescimento",
                color: "#ffffff",
              },
              legend: {
                position: "top",
                labels: {
                  color: "#ffffff",
                },
              },
            },
            scales: {
              x: {
                ticks: {
                  color: "#ffffff",
                },
              },
              y: {
                ticks: {
                  color: "#ffffff",
                },
                beginAtZero: true,
              },
            },
          }}
        />
      )}

      <Box display="flex" justifyContent="center">
        <StyledButton onClick={calcularSimulacao}>
          Atualizar Simulação
        </StyledButton>
      </Box>
    </SimuladorContainer>
  );
};

export default SimuladorAvancado;

