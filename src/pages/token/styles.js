import styled from 'styled-components';

/* Estilos Globais */
export const MarketplaceContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  background: linear-gradient(180deg, #011e3b, #343a40);
  min-height: 100vh;
  color: #fff;
  padding: 20px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.img`
  height: 60px;
`;

export const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
`;

/* Grid de Produtos */
export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

/* Cartão de Produto */
export const AssetCard = styled.div`
  background: white;
  color: #000;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const AssetTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

export const AssetDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 15px;
  color: #555;
`;

export const AssetInfo = styled.p`
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #000;
`;

export const PurchaseButton = styled.button`
  background-color: #1976d2;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #155a9b;
  }
`;
