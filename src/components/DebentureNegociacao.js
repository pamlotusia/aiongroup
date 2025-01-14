import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

const DebentureNegociacao = () => {
  const [valorVenda, setValorVenda] = useState("");
  const [quantidade, setQuantidade] = useState("");

  const handleNegociacao = () => {
    alert(`Negociados ${quantidade} debêntures por R$ ${valorVenda}`);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Negociação de Debêntures
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 2 }}>
        <TextField
          label="Valor de Venda"
          type="number"
          value={valorVenda}
          onChange={(e) => setValorVenda(e.target.value)}
        />
        <TextField
          label="Quantidade"
          type="number"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleNegociacao}>
          Negociar
        </Button>
      </Box>
    </Container>
  );
};

export default DebentureNegociacao;

