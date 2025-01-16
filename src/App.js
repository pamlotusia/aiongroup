import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home' // A página inicial
import { Login } from './pages/Login'
import { Institutional } from './pages/Institucional'
import { Estruturacao } from './pages/Estruturacao'
import { Consultoria } from './pages/Consultoria'
import { AboutUs } from './pages/About'

import { SignUp } from './pages/Signup'
// import Services from './components/Servicos';
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/globalStyles'
function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Router>
				<Routes>
					{/* Página Principal (Home) */}
					<Route path="/" element={<Home />} />
					<Route path="/about-us" element={<AboutUs />} />
					{/* <Route path="/cadastro-investidor" element={<CadastroLead />} /> Nova rota */}
					<Route path="/register" element={<SignUp />} /> {/* Nova rota */}
					<Route path="/entrar" element={<Login />} />
					{/* Outras Rotas */}
					{/* <Route path="/servicos" element={<Services />} /> */}
					{/* Página Institucional */}
					<Route path="/institucional" element={<Institutional />} />
					<Route path="/estruturacao" element={<Estruturacao />} />
					<Route path="/consultoria" element={<Consultoria />} />
					{/* Página Simulador de Investimentos */}
					{/* <Route path="/simulador1" element={<SimuladorInvestimentos />} /> */}
					{/* Página do Banco (BankApp) */}
					{/* <Route path="/cadastro" element={<DebentureCadastro />} /> */}
{/* 
					<Route path="/monitoramento" element={<DebentureMonitoramento />} />
					<Route path="/investimento" element={<DebentureInvestimento />} />
					<Route path="/negociacao" element={<DebentureNegociacao />} />
					<Route path="/simulador-avancado" element={<SimuladorAvancado />} />
					<Route path="/simulador-debentures" element={<SimuladorDebentures />} /> */}

					{/* <Route path="/app" element={<BankApp />} /> */}
					{/* <Route path="/crowdfunding" element={<AssetsList />} /> */}
					<Route path="/cadastro-investidor" element={<SignUp />} />
					{/* <Route path="/subscription" element={<SubscriptionPage />} /> */}
					{/* Página para rotas não encontradas */}
					{/* <Route path="*" element={<NotFound />} /> */}
				</Routes>
			</Router>
		</ThemeProvider>
	)
}

export default App
