import React, { useState, useEffect } from "react";
import { Container } from './styles';
import { TextField, Box } from "@mui/material";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title as ChartTitle, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ChartTitle, Tooltip, Legend);

export function  SimuladorAvancado(){
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
    <Container>
      {/* <Logo src={logo} alt="Global Force Bank" /> */}
      <h1>Simulador Avançado de Investimentos</h1>

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
        <button onClick={calcularSimulacao}>Atualizar Simulação</button>
      </Box>
    </Container>
  );
};