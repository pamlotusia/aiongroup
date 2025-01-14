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

}

export default DebentureMonitoramento;