import { Container, Register, SecondaryContainer } from "./styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavItem } from "../NavItem";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
	const [queryParams, setQueryParams] = useState({});

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const query = {};
		for (let [key, value] of params.entries()) {
			query[key] = value;
		}
		setQueryParams(query);
	}, []);

	const adresses = [
		{ label: "Investimentos", hasArrow: true },
		{ label: "Aion Group", hasArrow: true },
	];

	const instituto = [
		{ label: 'Sobre', url: '/institucional' },
		{ label: "Estruturação", url: "/estruturacao" },
		{ label: "Consultoria", url: "/consultoria" },
	];
	const tokenPage = [
		{ url: "/cadastro-investidor", label: "Seja um investidor" },
		{ url: "/entrar", label: "Simulador de investimentos" },
	];

	const buttons = [
		{ url: "/entrar", label: "Entrar", className: "signin" },
		{ url: "/register", label: "Cadastre-se", className: "signup" },
	];

	const [openMenu, setOpenMenu] = useState();
	const [openSubmenu, setOpenSubmenu] = useState(null);

	return (
		<Container>
			<ul className={`${openMenu ? "open" : ""}`}>
				<Register>
					{!queryParams.cpf ? (
						buttons.map((btn) => (
							<button className={btn.className} key={btn.url}>
								<Link to={btn.url}>{btn.label}</Link>
							</button>
						))
					) : (
						<div style={{ textAlign: "center" }}>
							<span>Bem-vindo</span>
							<br />
							<strong>{queryParams.cpf}</strong>
						</div>
					)}
				</Register>

				{adresses.map((adress) =>
					adress.hasArrow ? (
						<li
							onMouseEnter={() => setOpenSubmenu(adress.label)}
							onMouseLeave={() => setOpenSubmenu(null)}
							style={{ position: "relative" }}
							key={adress.label}
						>
							<NavItem url={adress.url} label={adress.label} hasArrow={true} />
							{openSubmenu === adress.label && (
								<SecondaryContainer className="submenu">
									<ul>
										{adress.label === "Investimentos" &&
											tokenPage.map((tokenSublink) => (
												<li key={tokenSublink.url}>
													<NavItem url={tokenSublink.url} label={tokenSublink.label} />
												</li>
											))}
										{adress.label === "Aion Group" &&
											instituto.map((link) => (
												<li key={link.label}>
													<NavItem url={link.url} label={link.label} />
												</li>
											))}
									</ul>
								</SecondaryContainer>
							)}
						</li>
					) : (
						<NavItem url={adress.url} label={adress.label} key={adress.label} />
					)
				)}
			</ul>

			<button className="btn-mobile" onClick={() => setOpenMenu(!openMenu)}>
				{openMenu ? <CloseIcon /> : <MenuIcon />}
			</button>
		</Container>
	);
}
