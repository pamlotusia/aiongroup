import { Link } from "react-router-dom";
import { Container } from "./style";

export function Footer() {
  const links = [
    { title: "Sobre nós", url: "#aboutUs" },
    {
      title: "Produtos",
      url: "#products",
    },
    {
      title: "Serviços",
      url: "#services",
    },
  ];

  return (
    <Container>
      <div className="links">
        {links.map((link) => {
          return (
            <Link to={link.url} className="link">{link.title}</Link>
          );
        })}

        <div className="contact">
          <p>Entre em contato</p>
          <p>projeto@earthprojects.com.br</p>
        </div>
      </div>
    </Container>
  );
}
