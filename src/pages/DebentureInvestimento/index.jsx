import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

const DebentureInvestimento = () => {
  const [valor, setValor] = useState("");
  const [taxa, setTaxa] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularInvestimento = () => {
    const rendimento = parseFloat(valor) + parseFloat(valor) * (parseFloat(taxa) / 100);
    setResultado(rendimento);
  };

}

export default DebentureInvestimento;

