import React from 'react';
import ReactDOM from 'react-dom/client';
import TokensMarketplace from './components/TokensMarketplace';
import AssetsList from './components/AssetsList';
import GlobalStyle from './styles/GlobalStyle';  

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TokensMarketplace />
      <AssetsList />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
