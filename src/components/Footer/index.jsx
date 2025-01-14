import { Link } from "react-router-dom";
import { Container } from "./style";

export function Footer() {
  const links = [
    { title: "Sobre nós", url: "#aboutUs" },
    {
      title: "Produtos",
      url: "#products",
    },
  ];

  return (
    <Container>
      <div className="links">
        {links.map((link) => {
          return (
            <a href={link.url} className="link">{link.title}</a>
          );
        })}

        <div className="contact">
          <p>Entre em contato</p>
          <p>novosnegocios@aiongroupbrazil.com.br</p>
          <p>comercial@aiongroupbrazil.com.br</p>
        </div>
      </div>
    </Container>
  );
}
