import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import consultoria from '../../assets/consultoria.jpg';
import gestaoRiscos from '../../assets/gestao-riscos.jpg';
import planejamento from '../../assets/planejamento.jpg'; 
import { Header } from '../../components/Header';
import CadastroInvestidor from '../../components/CadastroInvestidor'; // Importação do componente de cadastro
import SimuladorDebentures from '../../components/SimuladorDebentures'; // Importação do componente de simulador de debêntures
import { BannerContainer, BannerImage, CadastroContainer, HomeContainer, SimuladorContainer, TitleContainer } from './styles';
import { DropdownMenu } from '../../components/DropdownMenu';

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
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
  
        {/* Banner rotativo */}
        <BannerContainer>
          {banners.map((src, index) => (
            <BannerImage key={index} src={src} alt={`Banner ${index + 1}`} active={index === activeBanner} />
          ))}
        </BannerContainer>
  
        {/* Título e subtítulo */}
        <TitleContainer>
          <h1>Bem-vindo ao Global Force Bank</h1>
          <p>Explore nossas soluções inovadoras para gestão e investimentos.</p>
        </TitleContainer>
  
        {/* Seção de cadastro */}
          <CadastroInvestidor />
  
        {/* Seção do Simulador de Debêntures */}
        <SimuladorContainer>
          <SimuladorDebentures />
        </SimuladorContainer>
      </HomeContainer>
    );
  };
  export default Home;