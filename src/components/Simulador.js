// src/components/Simulador.js
import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const Simulador = () => {
  const [valor, setValor] = useState(0);
  const [taxa, setTaxa] = useState(0);
  const [resultado, setResultado] = useState(null);

  const calcularRentabilidade = () => {
    const total = valor + (valor * (taxa / 100));
    setResultado(total);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Simulador de Investimentos
      </Typography>
      <TextField
        label="Valor do Investimento"
        type="number"
        fullWidth
        variant="outlined"
        value={valor}
        onChange={(e) => setValor(Number(e.target.value))}
        style={{ marginBottom: '20px' }}
      />
      <TextField
        label="Taxa de Juros (%)"
        type="number"
        fullWidth
        variant="outlined"
        value={taxa}
        onChange={(e) => setTaxa(Number(e.target.value))}
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary" onClick={calcularRentabilidade}>
        Calcular Rentabilidade
      </Button>

      {resultado !== null && (
        <Typography variant="h6" style={{ marginTop: '20px' }}>
          Valor total após rentabilidade: R$ {resultado.toFixed(2)}
        </Typography>
      )}
    </div>
  );
};

export default Simulador;

