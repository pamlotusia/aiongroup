import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Grid } from "@mui/material";
import styled from "styled-components";

const DebentureCadastro = () => {
  const [form, setForm] = useState({
    emissor: "",
    dataEmissao: "",
    valorNominal: "",
    taxaJuros: "",
    vencimento: "",
    rating: "",
    garantias: "",
    cnpj: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Debênture cadastrada:", form);
    alert("Debênture cadastrada com sucesso!");
  };

  return (
    <CadastroContainer maxWidth="sm">
      <Title variant="h4">Cadastro de Debêntures</Title>
      <InputContainer>
        <Grid container spacing={2}>
          {Object.keys(form).map((field) => (
            <Grid item xs={12} key={field}>
              <StyledTextField
                fullWidth
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                name={field}
                value={form[field]}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
          ))}
        </Grid>

        <StyledButton onClick={handleSubmit}>Cadastrar</StyledButton>
      </InputContainer>
    </CadastroContainer>
  );
};

export default DebentureCadastro;

