import React from 'react';
import { MarketplaceContainer, Header, Logo, Title, ProductsGrid } from './styles';
import ProductCard from './ProductCard';
import fundoImage from '../assets/fundo.png';
import logo from '../assets/gbflogo.png';

const products = [
  {
    title: 'Fundo Imobiliário - Alpha',
    price: 'R$ 1.000,00',
    image: fundoImage,
    description: 'Token representando um fundo imobiliário de alta rentabilidade.',
  },
  {
    title: 'Imóvel Comercial RJ',
    price: 'R$ 5.000,00',
    image: fundoImage,
    description: 'Token de imóvel comercial no Rio de Janeiro.',
  },
];

const TokensMarketplace = () => {
  return (
    <MarketplaceContainer>
      <Header>
        <Logo src={logo} alt="Global Force Bank Logo" />
      </Header>
      <Title>Marketplace de Tokens Imobiliários</Title>
      <ProductsGrid>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </ProductsGrid>
    </MarketplaceContainer>
  );
};

export default TokensMarketplace;
