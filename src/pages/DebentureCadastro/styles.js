import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Grid } from "@mui/material";
import styled from "styled-components";

// Estilização personalizada com styled-components
const CadastroContainer = styled(Container)`
  background: linear-gradient(180deg, #011e3b, #343a40);
  color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled(Typography)`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`;

const InputContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const StyledTextField = styled(TextField)`
  & .MuiInputBase-root {
    background-color: #ffffff;
    border-radius: 5px;
    color: #000;
  }
`;

const StyledButton = styled(Button)`
  background: linear-gradient(90deg, #ddba33, #b5972d);
  color: white;
  padding: 15px;
  border-radius: 8px;
  font-weight: bold;
  transition: transform 0.3s ease, background 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #b5972d, #ddba33);
    transform: scale(1.05);
  }
`;