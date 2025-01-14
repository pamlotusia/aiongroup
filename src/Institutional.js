import React, { useState } from "react";
import styled from "styled-components";
import { Button, Typography, Box, TextField, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Simulador from './Simulador';  // Supondo que o Simulador de Rentabilidade esteja em outro componente

// Estilo principal
const InstitutionalContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(180deg, #011e3b, #343a40);
  color: #ffffff;
  text-align: center;
  padding: 50px 20px;
`;

const Banner = styled(Box)`
  background: url("/assets/banner.jpg") no-repeat center center;
  background-size: cover;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  width: 100%;
`;

const FormContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 30px;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  padding: 10px 20px;
  background: linear-gradient(90deg, #ddba33, #b5972d);
  color: white;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  transition: transform 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #b5972d, #ddba33);
    transform: scale(1.05);
  }
`;

const CadastroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f5f5;
  padding: 50px 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 800px;
`;

const Institutional = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ nome: "", email: "", senha: "" });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Lógica de cadastro do usuário
    console.log("Cadastro realizado:", formData);
    setSnackbarMessage("Cadastro realizado com sucesso!");
    setSnackbarOpen(true);
    navigate("/simulador");
  };

  return (
    <InstitutionalContainer>
      <Banner>
        <Typography variant="h3" gutterBottom>
          Investir com Segurança e Rentabilidade
        </Typography>
        <Typography variant="h6">
          Descubra as vantagens de investir em debêntures e tenha controle total sobre seus investimentos.
        </Typography>
      </Banner>

      <FormContainer>
        <Typography variant="h4" gutterBottom>
          Cadastro de Investidor
        </Typography>
        <TextField
          label="Nome Completo"
          variant="outlined"
          fullWidth
          margin="normal"
          name="nome"
          value={formData.nome}
          onChange={handleInputChange}
        />
        <TextField
          label="E-mail"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <TextField
          label="Senha"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          name="senha"
          value={formData.senha}
          onChange={handleInputChange}
        />
        <StyledButton onClick={handleSubmit}>Cadastrar</StyledButton>
      </FormContainer>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <Box style={{ marginTop: "40px", textAlign: "center" }}>
        <StyledButton
          onClick={() => navigate("/simulador")}
          style={{ backgroundColor: "#28a745" }}
        >
          Acessar Simulador de Investimentos
        </StyledButton>
      </Box>

      {/* Seção Institucional sobre Fundo Imobiliário */}
      <Box style={{ marginTop: "40px", padding: "20px", background: "#343a40", borderRadius: "8px" }}>
        <Typography variant="h5" style={{ color: "#fff" }}>Vantagens de Investir em Fundos Imobiliários</Typography>
        <Typography variant="body1" style={{ color: "#fff", marginTop: "10px" }}>
          Os Fundos Imobiliários oferecem uma excelente oportunidade de diversificação do portfólio, com
          rendimentos consistentes e acessíveis. Invista com segurança e rentabilidade superior a outros tipos de ativos.
        </Typography>
        <StyledButton
          onClick={() => navigate("/cadastro")}
          style={{ marginTop: "20px", backgroundColor: "#b5972d" }}
        >
          Saiba mais sobre Fundos Imobiliários
        </StyledButton>
      </Box>
    </InstitutionalContainer>
  );
};

export default Institutional;

