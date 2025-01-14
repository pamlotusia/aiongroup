import React, { useState } from "react";
import { TextField, MenuItem, Button, Box, Typography, Checkbox, FormControlLabel } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import ResetIcon from "@mui/icons-material/RestartAlt";
import { styled } from "@mui/system";

const CustomButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
}));

const FichaCadastralForm = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    cpf: "",
    sexo: "",
    dataNascimento: "",
    email: "",
    telefoneCelular: "",
    banco: "",
    agencia: "",
    conta: "",
    rendaMensal: "",
    patrimonioLiquido: "",
    declaraImpostoRenda: false,
    aceitaTratamentoDados: false,
    assinatura: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados: ", formData);
    alert("Formulário enviado com sucesso!");
  };

  const handleReset = () => {
    setFormData({
      nomeCompleto: "",
      cpf: "",
      sexo: "",
      dataNascimento: "",
      email: "",
      telefoneCelular: "",
      banco: "",
      agencia: "",
      conta: "",
      rendaMensal: "",
      patrimonioLiquido: "",
      declaraImpostoRenda: false,
      aceitaTratamentoDados: false,
      assinatura: "",
    });
  };

  return (
    <Box
      sx={{
        padding: 3,
        borderRadius: 2,
        boxShadow: 3,
        background: "linear-gradient(to bottom, #ffffff, #f8f9fa)",
        maxWidth: 800,
        margin: "auto",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          marginBottom: 3,
          fontWeight: "bold",
          color: "#4A5568",
        }}
      >
        Ficha Cadastral Completa
      </Typography>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6" sx={{ marginBottom: 2, color: "#2D3748" }}>
          Dados Pessoais
        </Typography>
        <TextField
          fullWidth
          label="Nome completo"
          name="nomeCompleto"
          value={formData.nomeCompleto}
          onChange={handleInputChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="CPF"
          name="cpf"
          value={formData.cpf}
          onChange={handleInputChange}
          margin="normal"
          required
          type="text"
        />
        <TextField
          fullWidth
          select
          label="Sexo"
          name="sexo"
          value={formData.sexo}
          onChange={handleInputChange}
          margin="normal"
        >
          {["Masculino", "Feminino", "Outro"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          label="Data de nascimento"
          name="dataNascimento"
          type="date"
          value={formData.dataNascimento}
          onChange={handleInputChange}
          margin="normal"
          InputLabelProps={{ shrink: true }}
          required
        />
        <TextField
          fullWidth
          label="E-mail"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          margin="normal"
          required
          type="email"
        />
        <TextField
          fullWidth
          label="Telefone celular"
          name="telefoneCelular"
          value={formData.telefoneCelular}
          onChange={handleInputChange}
          margin="normal"
          required
          type="tel"
        />

        <Typography variant="h6" sx={{ marginTop: 4, marginBottom: 2, color: "#2D3748" }}>
          Dados Bancários
        </Typography>
        <TextField
          fullWidth
          label="Banco"
          name="banco"
          value={formData.banco}
          onChange={handleInputChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Agência"
          name="agencia"
          value={formData.agencia}
          onChange={handleInputChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Conta"
          name="conta"
          value={formData.conta}
          onChange={handleInputChange}
          margin="normal"
          required
        />

        <Typography variant="h6" sx={{ marginTop: 4, marginBottom: 2, color: "#2D3748" }}>
          Situação Financeira Patrimonial
        </Typography>
        <TextField
          fullWidth
          label="Renda Mensal"
          name="rendaMensal"
          value={formData.rendaMensal}
          onChange={handleInputChange}
          margin="normal"
          required
          type="number"
        />
        <TextField
          fullWidth
          label="Patrimônio Líquido"
          name="patrimonioLiquido"
          value={formData.patrimonioLiquido}
          onChange={handleInputChange}
          margin="normal"
          required
          type="number"
        />

        <Typography variant="h6" sx={{ marginTop: 4, marginBottom: 2, color: "#2D3748" }}>
          Declarações
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.declaraImpostoRenda}
              onChange={handleInputChange}
              name="declaraImpostoRenda"
            />
          }
          label="Declaro que entrego a declaração de Imposto de Renda"
        />

        <Typography variant="h6" sx={{ marginTop: 4, marginBottom: 2, color: "#2D3748" }}>
          Consentimento para Tratamento de Dados Pessoais
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.aceitaTratamentoDados}
              onChange={handleInputChange}
              name="aceitaTratamentoDados"
            />
          }
          label="Aceito o tratamento de meus dados pessoais conforme descrito nos Termos e Condições"
        />

        <Typography variant="h6" sx={{ marginTop: 4, marginBottom: 2, color: "#2D3748" }}>
          Assinatura
        </Typography>
        <TextField
          fullWidth
          label="Assinatura (Digite seu nome completo)"
          name="assinatura"
          value={formData.assinatura}
          onChange={handleInputChange}
          margin="normal"
          required
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 3,
          }}
        >
          <CustomButton
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
          >
            Salvar
          </CustomButton>
          <CustomButton
            type="button"
            variant="outlined"
            color="secondary"
            startIcon={<ResetIcon />}
            onClick={handleReset}
          >
            Resetar
          </CustomButton>
        </Box>
      </form>
    </Box>
  );
};

export default FichaCadastralForm;

