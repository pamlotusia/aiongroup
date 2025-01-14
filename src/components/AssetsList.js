import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Typography } from "@mui/material";

const AssetsList = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    axios.get("/api/crowdfunding/assets/")
      .then(response => setAssets(response.data))
      .catch(error => console.error(error));
  }, []);

  const handlePurchase = (assetId) => {
    // Lógica de compra de tokens
    console.log(`Comprando tokens do ativo ${assetId}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      {assets.map((asset) => (
        <Card key={asset.id} style={{ marginBottom: "20px", padding: "20px" }}>
          <Typography variant="h5">{asset.name}</Typography>
          <Typography>{asset.description}</Typography>
          <Typography>Preço do Token: R$ {asset.token_price}</Typography>
          <Typography>Total de Tokens: {asset.total_tokens}</Typography>
          <Button variant="contained" color="primary" onClick={() => handlePurchase(asset.id)}>
            Comprar Tokens
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default AssetsList;

