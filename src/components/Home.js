import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/gbflogo.png';
import consultoria from '../assets/consultoria.jpg';
import gestaoRiscos from '../assets/gestao-riscos.jpg';
import planejamento from '../assets/planejamento.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CadastroInvestidor from './CadastroInvestidor'; // Importação do componente de cadastro
import SimuladorDebentures from './SimuladorDebentures'; // Importação do componente de simulador de debêntures

// Estilos principais
const HomeContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  background: linear-gradient(180deg, #011E3B, #343a40);
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Logo = styled.img`
  height: 60px;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 28px;
  cursor: pointer;

  &:hover {
    color: #ddba33;
  }
`;

const DropdownMenu = styled.nav`
  background: #1b2d40;
  position: absolute;
  top: 70px;
  right: 20px;
  padding: 20px;
  border-radius: 8px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 1000;
`;

const MenuLink = styled.a`
  display: block;
  color: #ffffff;
  text-decoration: none;
  padding: 10px 0;
  font-size: 16px;

  &:hover {
    color: #ddba33;
  }
`;

// Banner rotativo
const BannerContainer = styled.div`
  margin: 20px auto;
  width: 90%;
  height: 400px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-top: 30px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-top: 10px;
`;

const CadastroContainer = styled.div`
  margin: 40px auto;
  width: 90%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
`;

const SimuladorContainer = styled.div`
  margin: 40px auto;
  width: 90%;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
`;

const Home = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeBanner, setActiveBanner] = useState(0);

  const banners = [consultoria, gestaoRiscos, planejamento];

  // Alterna entre banners automaticamente
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <HomeContainer>
      {/* Cabeçalho com menu hambúrguer */}
      <Header>
        <Logo src={logo} alt="Global Force Bank Logo" />
        <MenuButton onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </MenuButton>
      </Header>

      {/* Menu dropdown */}
      <DropdownMenu isOpen={menuOpen}>
        <MenuLink onClick={() => navigate('/institucional')}>Institucional</MenuLink>
        <MenuLink onClick={() => navigate('/marketplace')}>Tokens Marketplace</MenuLink>
        <MenuLink onClick={() => navigate('/cadastro-investidor')}>Cadastro Investidor</MenuLink>
        <MenuLink onClick={() => navigate('/simulador-avancado')}>Simulador de Investimentos</MenuLink>
        <MenuLink onClick={() => navigate('/simulador-debentures')}>Simulador de Debêntures</MenuLink>
      </DropdownMenu>

      {/* Banner rotativo */}
      <BannerContainer>
        {banners.map((src, index) => (
          <BannerImage key={index} src={src} alt={`Banner ${index + 1}`} active={index === activeBanner} />
        ))}
      </BannerContainer>

      {/* Título e subtítulo */}
      <TitleContainer>
        <Title>Bem-vindo ao Global Force Bank</Title>
        <Subtitle>Explore nossas soluções inovadoras para gestão e investimentos.</Subtitle>
      </TitleContainer>

      {/* Seção de cadastro */}
      <CadastroContainer>
        <CadastroInvestidor />
      </CadastroContainer>

      {/* Seção do Simulador de Debêntures */}
      <SimuladorContainer>
        <SimuladorDebentures />
      </SimuladorContainer>
    </HomeContainer>
  );
};

export default Home;

