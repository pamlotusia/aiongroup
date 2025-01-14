import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import logo from '../assets/gbflogo.png'; // Certifique-se de que o logo está no caminho correto

// Importação do ChartJS
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title as ChartTitle, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ChartTitle, Tooltip, Legend);

// Estilo do Simulador
const SimuladorContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  background: linear-gradient(180deg, #011E3B 0%, #343a40 100%);
  color: #ffffff;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SimuladorPaper = styled(Paper)`
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const SimuladorTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  color: #ffffff;
  text-align: center;
  margin-bottom: 30px;
`;

const Logo = styled.img`
  height: 80px;
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background: linear-gradient(90deg, #ddba33, #b5972d);
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;

  &:hover {
    background: linear-gradient(90deg, #b5972d, #ddba33);
    transform: scale(1.05);
  }
`;

const SimuladorInvestimentos = () => {
  const [valorInvestido, setValorInvestido] = useState(1000); // Valor inicial do investimento
  const [taxaJuros, setTaxaJuros] = useState(5); // Taxa de juros anual
  const [prazo, setPrazo] = useState(12); // Prazo do investimento (em meses)
  const [aporteMensal, setAporteMensal] = useState(0); // Aporte mensal adicional
  const [resultado, setResultado] = useState(null); // Resultado do cálculo

  // Função para calcular o investimento ao longo do tempo
  const calcularInvestimento = () => {
    let saldo = valorInvestido;
    let saldoComAporte = valorInvestido;
    let labels = [];
    let data = [];
    let dataComAporte = [];

    for (let i = 1; i <= prazo; i++) {
      saldo = saldo * (1 + taxaJuros / 100);
      saldoComAporte = saldoComAporte * (1 + taxaJuros / 100) + aporteMensal;

      labels.push(`Mês ${i}`);
      data.push(saldo);
      dataComAporte.push(saldoComAporte);
    }

    setResultado({
      labels,
      datasets: [
        {
          label: 'Sem Aporte Mensal',
          data,
          borderColor: 'rgba(75, 192, 192, 1)',
          fill: false,
          tension: 0.1,
        },
        {
          label: 'Com Aporte Mensal',
          data: dataComAporte,
          borderColor: 'rgba(153, 102, 255, 1)',
          fill: false,
          tension: 0.1,
        },
      ],
    });
  };

  // Atualiza o resultado sempre que as entradas mudam
  useEffect(() => {
    calcularInvestimento();
  }, [valorInvestido, taxaJuros, prazo, aporteMensal]);

  return (
    <SimuladorContainer>
      <Logo src={logo} alt="Global Force Bank" />
      <SimuladorTitle>Simulador de Investimentos</SimuladorTitle>

      <SimuladorPaper>
        <Typography variant="h6" gutterBottom>
          Preencha os valores abaixo para calcular a rentabilidade do seu investimento.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Valor Investido (R$)"
            variant="outlined"
            type="number"
            value={valorInvestido}
            onChange={(e) => setValorInvestido(Number(e.target.value))}
            fullWidth
          />
          <TextField
            label="Taxa de Juros Anual (%)"
            variant="outlined"
            type="number"
            value={taxaJuros}
            onChange={(e) => setTaxaJuros(Number(e.target.value))}
            fullWidth
          />
          <TextField
            label="Prazo (meses)"
            variant="outlined"
            type="number"
            value={prazo}
            onChange={(e) => setPrazo(Number(e.target.value))}
            fullWidth
          />
          <TextField
            label="Aporte Mensal (R$)"
            variant="outlined"
            type="number"
            value={aporteMensal}
            onChange={(e) => setAporteMensal(Number(e.target.value))}
            fullWidth
          />
        </Box>

        {/* Gráfico de Resultados */}
        {resultado && (
          <div style={{ marginBottom: '30px' }}>
            <Line
              data={resultado}
              options={{
                responsive: true,
                plugins: {
                  title: {
                    display: true,
                    text: 'Evolução do Investimento',
                  },
                  legend: {
                    position: 'top',
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
        )}

        {/* Botões */}
        <Box display="flex" justifyContent="center">
          <StyledButton onClick={calcularInvestimento}>
            Calcular Rentabilidade
          </StyledButton>
        </Box>
      </SimuladorPaper>
    </SimuladorContainer>
  );
};

export default SimuladorInvestimentos;

