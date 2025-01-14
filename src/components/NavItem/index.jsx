import { Link } from "react-router-dom";
import { Container } from "./styles";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


export function NavItem({ url, label, hasArrow, openMenu}) {
  return (
    <Container>
      <Link to={url} className="link" handleOpenMenu={openMenu}>
        {label} {hasArrow && <MdOutlineKeyboardArrowDown/>}
      </Link>
    </Container>
  )
}

