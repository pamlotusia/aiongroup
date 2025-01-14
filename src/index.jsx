import { Grid, TextField } from '@mui/material'
import { Container, StyledButton } from './styles'
import { Link, useNavigate } from 'react-router-dom'

export function SignIn() {
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

	const navigate = useNavigate()
	function goTo() {
		navigate('/subscription')
	}

	return (
		<Container>
			<form action="" onSubmit={goTo}>
				<h4>Login</h4>
				<Grid container justifyContent="center">
					<Grid item xs={12}>
						<TextField
							type="text"
							name="cpf"
							required
							label="Digite seu CPF"
							maxLength="14"
							className="active"
							fullWidth
							onInput={formatCPF}
						/>
					</Grid>

					<StyledButton type="submit">Entrar</StyledButton>
				</Grid>
				<Link to="/">Criar uma conta</Link>
			</form>
		</Container>
	)
}
