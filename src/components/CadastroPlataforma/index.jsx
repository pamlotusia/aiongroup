import { useState } from 'react'
import { Container, StyledButton } from './styles'
import {
  TextField,
  Box,
  Grid,
  FormControlLabel,
  Checkbox,
  Snackbar,
  Alert,
  Popover,
  Typography
} from '@mui/material'
import { TermosCondicoes } from '../TermosCondicoes'

export function CadastroPlataforma() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    celular: '',
    concorda: false
  })

  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')

  const handleInputChange = e => {
    const { name, value, checked, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!formData.concorda) {
      setSnackbarMessage('É necessário aceitar os termos para continuar.')
      setSnackbarOpen(true)
      return
    }
    console.log('Dados do Investidor:', formData)
    setSnackbarMessage('Cadastro realizado com sucesso!')
    setSnackbarOpen(true)
    // Aqui, insira a lógica de envio para a API.
  }

  //Pop-up terms
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'popover' : undefined

  return (
    <Container>
      <h4>Abra sua conta</h4>
      <p>
      Informe o email e senha que você usará para acessar sua conta na Global Force Bank.
      </p>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} justifyContent="center">
          {/* Nome completo */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nome Completo"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              required
              className="active"
            />
          </Grid>

          {/* E-mail */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="E-mail"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="active"
            />
          </Grid>

          {/* CPF */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="CPF"
              name="cpf"
              type="text"
              value={formData.cpf}
              onChange={handleInputChange}
              required
              className="active"
            />
          </Grid>

          {/* Celular */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Celular com DDD"
              name="celular"
              type="tel"
              value={formData.celular}
              onChange={handleInputChange}
              required
              className="active"
            />
          </Grid>

          {/* Termos e Condições */}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.concorda}
                  onChange={handleInputChange}
                  name="concorda"
                  color={`#47484c`}
                />
              }
              label={
                <span
                  style={{ cursor: 'pointer', textDecoration: 'underline' }}
                  onClick={handleClick}
                >
                  Concordo com os termos e condições
                </span>
              }
            />
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
            >
              <div
                style={{
                  padding: 16,
                  maxWidth: 600,
                  maxHeight: 200,
                  overflowY: 'auto',
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#888 #f1f1f1'
                }}
              >
                <TermosCondicoes/>
              </div>
            </Popover>
          </Grid>
        </Grid>

        <Box display="flex" justifyContent="center" mt={3}>
          <StyledButton type="submit">Cadastrar</StyledButton>
        </Box>
      </form>

      {/* Snackbar para mensagens */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="info">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  )
}
