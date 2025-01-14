import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/gbflogo.png';
import consultoria from '../assets/consultoria.jpg';
import gestaoRiscos from '../assets/gestao-riscos.jpg';
import planejamento from '../assets/planejamento.jpg';

// Animação de entrada
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Contêiner principal
const InstitutionalContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  background: linear-gradient(180deg, #011e3b 0%, #1b2d40 100%);
  color: #ffffff;
  min-height: 100vh;
  padding: 20px;
`;

// Cabeçalho com logotipo e menu
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

// Menu suspenso
const DropdownMenu = styled.nav`
  background: #1b2d40;
  position: absolute;
  top: 70px;
  right: 20px;
  padding: 20px;
  border-radius: 8px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  animation: ${fadeIn} 0.5s ease;
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

// Seção principal
const MainSection = styled.section`
  text-align: center;
  margin-top: 30px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
  animation: ${fadeIn} 1s ease;
`;

// Botões interativos
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

const StyledButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  background: linear-gradient(90deg, #ddba33, #b5972d);
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

// Seção de serviços com imagens
const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
`;

const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  width: 300px;
  text-align: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const ServiceContent = styled.div`
  padding: 15px;
`;

const Institutional = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLinkClick = (path) => {
    setMenuOpen(false); // Fecha o menu ao clicar em um link
    navigate(path);
  };

  return (
    <InstitutionalContainer>
      <Header>
        <Logo src={logo} alt="Global Force Bank" />
        <MenuButton onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </MenuButton>
      </Header>

      <DropdownMenu isOpen={menuOpen} ref={menuRef}>
        <MenuLink onClick={() => handleLinkClick('/cadastro-investidor')}>Cadastro</MenuLink>
        <MenuLink onClick={() => handleLinkClick('/simulador-avancado')}>Simulador de Investimentos</MenuLink>
        <MenuLink onClick={() => handleLinkClick('/servicos')}>Serviços</MenuLink>
      </DropdownMenu>

      <MainSection>
        <Title>Bem Vindo</Title>
        <p>Explore nossas soluções financeiras e descubra novas oportunidades.</p>
        <ButtonContainer>
          <StyledButton onClick={() => navigate('/cadastro-investidor')}>
            Cadastro
          </StyledButton>
          <StyledButton onClick={() => navigate('/simulador-avancado')}>
            Gestão de Investimentos
          </StyledButton>
        </ButtonContainer>
      </MainSection>

      <ServicesContainer>
        <ServiceCard>
          <ServiceImage src={consultoria} alt="Consultoria Empresarial" />
          <ServiceContent>
            <h3>Consultoria Empresarial</h3>
            <p>Estratégias para otimizar seus negócios.</p>
          </ServiceContent>
        </ServiceCard>
        <ServiceCard>
          <ServiceImage src={gestaoRiscos} alt="Gestão de Riscos" />
          <ServiceContent>
            <h3>Gestão de Riscos</h3>
            <p>Soluções para mitigar riscos financeiros e operacionais.</p>
          </ServiceContent>
        </ServiceCard>
        <ServiceCard>
          <ServiceImage src={planejamento} alt="Planejamento Estratégico" />
          <ServiceContent>
            <h3>Planejamento Estratégico</h3>
            <p>Planeje o futuro do seu negócio com eficiência.</p>
          </ServiceContent>
        </ServiceCard>
      </ServicesContainer>
    </InstitutionalContainer>
  );
};

export default Institutional;

