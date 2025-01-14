import React from "react";
import styled from "styled-components";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import gbfLogo from "../assets/gbflogo.png"; // Certifique-se de que o caminho está correto
import consultoriaImg from "../assets/consultoria.jpg";
import gestaoRiscosImg from "../assets/gestao-riscos.jpg";
import planejamentoImg from "../assets/planejamento.jpg";
import treinamentosImg from "../assets/treinamentos.jpg";

// Container principal
const ServicosContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(180deg, #01345A 0%, #DCE6F0 100%); /* Azul mais suave */
  color: #ffffff;
  min-height: 100vh;
  padding: 60px 20px;
`;

// Estilo para a imagem do logotipo
const Logo = styled.img`
  display: block;
  margin: 0 auto 40px auto; /* Espaço entre o logotipo e os cartões */
  max-width: 300px; /* Proporção do logotipo */
  height: auto;
`;

// Estilo dos cartões
const StyledCard = styled(Card)`
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Servicos = () => {
  const servicos = [
    {
      id: 1,
      title: "Consultoria Empresarial",
      description: "Oferecemos estratégias personalizadas para transformar e otimizar sua empresa.",
      image: consultoriaImg,
    },
    {
      id: 2,
      title: "Gestão de Riscos",
      description: "Identifique, avalie e gerencie riscos para garantir a segurança do seu negócio.",
      image: gestaoRiscosImg,
    },
    {
      id: 3,
      title: "Planejamento Estratégico",
      description: "Alcance seus objetivos com um plano estratégico eficiente e personalizado.",
      image: planejamentoImg,
    },
    {
      id: 4,
      title: "Treinamentos Corporativos",
      description: "Capacite sua equipe com treinamentos focados em desenvolvimento profissional.",
      image: treinamentosImg,
    },
  ];

  return (
    <ServicosContainer>
      {/* Logotipo Centralizado */}
      <Logo src={gbfLogo} alt="Global Force Bank Logo" />

      {/* Conteúdo Principal */}
      <Grid container spacing={4}>
        {servicos.map((servico) => (
          <Grid item xs={12} sm={6} md={3} key={servico.id}>
            <StyledCard>
              <CardMedia
                component="img"
                height="160"
                image={servico.image}
                alt={servico.title}
                style={{
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom style={{ fontWeight: "bold", color: "#011E3B" }}>
                  {servico.title}
                </Typography>
                <Typography variant="body2" style={{ color: "#555555" }}>
                  {servico.description}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </ServicosContainer>
  );
};

export default Servicos;

