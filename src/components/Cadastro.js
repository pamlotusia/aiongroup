import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Button,
  Typography,
  Box,
  LinearProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import NavigationMenu from "./NavigationMenu";
import FormSection from "./FormSection";
import { useNavigate } from "react-router-dom";

// Estilo principal
const CadastroContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(180deg, #011e3b, #343a40 100%);
  color: #ffffff;
  text-align: center;
  padding: 20px;
`;

// Contêiner de formulário
const FormContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

// Botões estilizados
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

const sections = [
  { id: "FichaCadastral", label: "Ficha Cadastral" },
  { id: "DadosPessoais", label: "Dados Pessoais" },
  { id: "DadosResidenciais", label: "Dados Residenciais" },
  { id: "DadosComerciais", label: "Dados Comerciais" },
  { id: "DadosBancarios", label: "Dados Bancários" },
  { id: "Declaracoes", label: "Declarações" },
  { id: "Consentimento", label: "Consentimento para Tratamento de Dados" },
];

const initialFormState = sections.reduce((acc, section) => {
  acc[section.id] = {};
  return acc;
}, {});

const Cadastro = () => {
  const [currentSection, setCurrentSection] = useState(sections[0].id);
  const [formData, setFormData] = useState(initialFormState);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) setFormData(JSON.parse(savedData));
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleInvestmentsClick = () => navigate("/investimentos");

  return (
    <CadastroContainer>
      <Typography variant="h4" gutterBottom>
        Cadastro e Investimentos
      </Typography>

      <FormContainer>
        <Typography variant="h5" style={{ marginBottom: "20px" }}>
          {sections.find((s) => s.id === currentSection)?.label}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={(sections.findIndex((s) => s.id === currentSection) + 1) * (100 / sections.length)}
        />
        <NavigationMenu
          sections={sections.map((s) => s.label)}
          currentSection={currentSection}
          onSectionChange={setCurrentSection}
        />
        <FormSection
          sectionData={formData[currentSection]}
          sectionName={currentSection}
          onInputChange={handleInputChange}
        />
      </FormContainer>

      <Box>
        <StyledButton
          onClick={() => showSnackbar("Dados salvos com sucesso!")}
        >
          Salvar Dados
        </StyledButton>
        <StyledButton
          style={{ background: "#28a745" }}
          onClick={handleInvestmentsClick}
        >
          Acessar Gestão de Investimentos
        </StyledButton>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </CadastroContainer>
  );
};

export default Cadastro;

