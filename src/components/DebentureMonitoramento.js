import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Card, CardContent } from "@mui/material";

const DebentureMonitoramento = () => {
  const [debentures, setDebentures] = useState([]);

  useEffect(() => {
    setDebentures([
      { emissor: "Empresa A", rendimento: "5%", risco: "Baixo" },
      { emissor: "Empresa B", rendimento: "7%", risco: "Médio" },
    ]);
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Monitoramento de Debêntures
      </Typography>
      <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", marginTop: 3 }}>
        {debentures.map((d, index) => (
          <Card key={index} sx={{ minWidth: 300, padding: 2 }}>
            <CardContent>
              <Typography variant="h6">{d.emissor}</Typography>
              <Typography>Rentabilidade: {d.rendimento}</Typography>
              <Typography>Risco: {d.risco}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default DebentureMonitoramento;

