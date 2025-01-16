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
		{ label: "Produtos", hasArrow: true },
		{ label: "Sobre nós", url:'/about-us'},
	];

	const products = [
		{
			label: 'Consultoria', url: '/consultoria'
		},
	]

	const [openMenu, setOpenMenu] = useState();
	const [openSubmenu, setOpenSubmenu] = useState(null);

	return (
		<Container>
			<ul className={`${openMenu ? "open" : ""}`}>

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
										{adress.label === "Produtos" &&
											products.map((products) => (
												<li key={products.url}>
													<NavItem url={products.url} label={products.label} />
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
