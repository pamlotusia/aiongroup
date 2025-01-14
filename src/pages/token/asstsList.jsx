import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AssetCard, AssetTitle, AssetDescription, AssetInfo, PurchaseButton } from '../styles';

const AssetsList = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    axios
      .get('/api/crowdfunding/assets/')
      .then(response => setAssets(response.data))
      .catch(error => console.error(error));
  }, []);

  const handlePurchase = assetId => {
    console.log(`Comprando tokens do ativo ${assetId}`);
  };

  return (
    <div>
      {assets.map(asset => (
        <AssetCard key={asset.id}>
          <AssetTitle>{asset.name}</AssetTitle>
          <AssetDescription>{asset.description}</AssetDescription>
          <AssetInfo>Preço do Token: R$ {asset.token_price}</AssetInfo>
          <AssetInfo>Total de Tokens: {asset.total_tokens}</AssetInfo>
          <PurchaseButton onClick={() => handlePurchase(asset.id)}>Comprar Tokens</PurchaseButton>
        </AssetCard>
      ))}
    </div>
  );
};

export default AssetsList;
