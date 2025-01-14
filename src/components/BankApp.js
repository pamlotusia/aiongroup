import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, TextField, Box, Typography, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

// Estilos principais
const BankAppContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  background: linear-gradient(180deg, #011E3B 0%, #343a40 100%);
  min-height: 100vh;
  padding: 20px 0;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #ffffff;
  margin-bottom: 30px;
  text-align: center;
`;

const FormContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin: 0 auto;
  max-width: 600px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const Footer = styled.footer`
  margin-top: 30px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  width: 100%;
  text-align: center;
`;

const BankApp = () => {
  const navigate = useNavigate();
  
  // Estado do formulário
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    cpf: "",
    celular: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Função para capturar alterações no formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simula um envio de dados, você pode conectar com seu backend aqui
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Cadastro realizado com sucesso!");
      navigate("/app");  // Redireciona para a página de investimentos
    }, 2000);
  };

  return (
    <BankAppContainer>
      <Container maxWidth="sm">
        <Title>Bem-vindo à Global Force Investimentos</Title>
        <FormContainer>
          <SectionTitle>Abra sua conta gratuitamente</SectionTitle>

          <Typography variant="body1" paragraph>
            Aqui, na casa de investimentos do Global Force, você encontra
            oportunidades sintonizadas com seus objetivos, conteúdos e análises
            para investir com apoio, assessoria personalizada e muitos outros
            benefícios Classe GB Force. Para agilizar a abertura de sua conta, tenha
            em mãos um documento pessoal (RG, CNH ou RNE).
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Nome Completo"
                  variant="outlined"
                  fullWidth
                  name="nomeCompleto"
                  value={formData.nomeCompleto}
                  onChange={handleInputChange}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="E-mail"
                  variant="outlined"
                  fullWidth
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="CPF"
                  variant="outlined"
                  fullWidth
                  name="cpf"
                  type="text"
                  value={formData.cpf}
                  onChange={handleInputChange}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Celular com DDD"
                  variant="outlined"
                  fullWidth
                  name="celular"
                  type="text"
                  value={formData.celular}
                  onChange={handleInputChange}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Cadastrando..." : "Próximo"}
                </Button>
              </Grid>
            </Grid>
          </form>

          <Box mt={2}>
            <Typography variant="body2">
              Já tem cadastro?{" "}
              <Link to="/login" style={{ color: "#ddba33" }}>
                Faça login aqui
              </Link>
            </Typography>
          </Box>

          <Box mt={4}>
            <Typography variant="body2">
              A isenção compreende às taxas cobradas pela GB Force. As taxas sobre os serviços efetuados pela B3 são repassadas aos clientes.
            </Typography>
          </Box>
        </FormContainer>

        <Footer>
          <Typography variant="body2">
            Ao realizar o cadastro, você concorda com nossos Termos e Condições e com a Política de Privacidade.
          </Typography>
        </Footer>
      </Container>
    </BankAppContainer>
  );
};

export default BankApp;

