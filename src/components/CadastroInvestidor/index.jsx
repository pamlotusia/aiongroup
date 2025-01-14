import React, { useState } from "react";
import { TextField, MenuItem, Checkbox, FormControlLabel } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import ResetIcon from "@mui/icons-material/RestartAlt";
import {
  Container,
  Content,
  ProgressiveContainer,
  FinalButtons,
} from "./styles";

export function CadastroInvestidor() {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 4;

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

  function handleNext() {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  }
  function handleBack() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }

  const containers = [
    (props) => <PersonalData {...props} />,
    (props) => <BankData {...props} />,
    (props) => <PatrimonialFinancialSituation {...props} />,
    (props) => <Permissions {...props} />,
  ];

  return (
    <Container>
      <h1>Cadastro investidor</h1>
      <form onSubmit={handleSubmit}>
        <ProgressiveContainer>
          <div className="progress-container">
            <div
              className="barProgress"
              style={{
                width: `${(currentStep / (containers.length - 1)) * 100}%`,
              }}
            ></div>
          </div>

          {containers[currentStep]({
            formData,
            handleInputChange,
            handleReset,
          })}

          <div className="buttons">
            {currentStep === containers.length - 1 ? (
              <FinalButtons>
                <button
                  className="back"
                  type="button"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                >
                  Voltar
                </button>
                <button className="reset" type="button" onClick={handleReset}>
                  <ResetIcon />
                  Resetar
                </button>

                <button className="save" type="submit">
                  <SaveIcon />
                  Salvar
                </button>
              </FinalButtons>
            ) : (
              <>
                <button
                  className="back"
                  type="button"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                >
                  Voltar
                </button>
                <button className="next" type="button" onClick={handleNext}>
                  Seguir
                </button>
              </>
            )}
          </div>
        </ProgressiveContainer>
      </form>
    </Container>
  );
}

function PersonalData({ formData, handleInputChange }) {
    function formatCPF(event) {
        let cpf = event.target.value.replace(/\D/g, '')
    
        if (cpf.length > 11) {
          cpf = cpf.substring(0, 11)
        }
    
        if (cpf.length <= 11) {
          cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2')
          cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2')
          cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
        }
    
        event.target.value = cpf
      }

    function formatCellphone(event) {
        let tel = event.target.value.replace(/\D/g, '');

        if (tel.length > 11) {
          tel = tel.substring(0, 11);
        }
      
        if (tel.length === 11) {
          tel = tel.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (tel.length === 10) {
          tel = tel.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
        }
      
        event.target.value = tel;
      }

  return (
    <Content>
      <p>Dados pessoais</p>
      <TextField
        fullWidth
        className="active"
        label="Nome completo"
        name="nomeCompleto"
        value={formData.nomeCompleto}
        onChange={handleInputChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        required
        margin="normal"
        type="text"
        className="active"
        label="CPF"
        name="cpf"
        maxLength="14"
        onInput={formatCPF}
        value={formData.cpf}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        className="active"
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
        className="active"
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
        className="active"
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
        className="active"
        label="Telefone celular"
        name="telefoneCelular"
        value={formData.telefoneCelular}
        onChange={handleInputChange}
        margin="normal"
        required
        type="tel"
        onInput={formatCellphone}
      />
    </Content>
  );
}

function BankData({ formData, handleInputChange }) {
  return (
    <Content>
      <p>Dados Bancários</p>
      <TextField
        fullWidth
        className="active"
        label="Banco"
        name="banco"
        value={formData.banco}
        onChange={handleInputChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        className="active"
        label="Agência"
        name="agencia"
        value={formData.agencia}
        onChange={handleInputChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        className="active"
        label="Conta"
        name="conta"
        value={formData.conta}
        onChange={handleInputChange}
        margin="normal"
        required
      />
    </Content>
  );
}

function PatrimonialFinancialSituation({ formData, handleInputChange }) {
  return (
    <Content>
      <p> Situação Financeira Patrimonial</p>
      <TextField
        fullWidth
        className="active"
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
        className="active"
        label="Patrimônio Líquido"
        name="patrimonioLiquido"
        value={formData.patrimonioLiquido}
        onChange={handleInputChange}
        margin="normal"
        required
        type="number"
      />
    </Content>
  );
}

function Permissions({ formData, handleInputChange, handleReset }) {
  return (
    <Content>
      <p>Declarações</p>
      <FormControlLabel
        control={
          <Checkbox
            checked={formData.declaraImpostoRenda}
            onChange={handleInputChange}
            name="declaraImpostoRenda"
          />
        }
        label="Declaro que entrego a declaração de Imposto de Renda"
        sx={{ margin: "1rem 0 2rem" }}
      />

      <p>Consentimento para Tratamento de Dados Pessoais</p>
      <FormControlLabel
        control={
          <Checkbox
            checked={formData.aceitaTratamentoDados}
            onChange={handleInputChange}
            name="aceitaTratamentoDados"
          />
        }
        sx={{ margin: "1rem 0 2rem" }}
        label="Aceito o tratamento de meus dados pessoais conforme descrito nos Termos e Condições"
      />

      <p>Assinatura</p>
      <TextField
        fullWidth
        className="active"
        label="Assinatura (Digite seu nome completo)"
        name="assinatura"
        value={formData.assinatura}
        onChange={handleInputChange}
        margin="normal"
        required
      />
    </Content>
  );
}
