import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import axios from 'axios';

const DebentureList = () => {
    const [debentures, setDebentures] = useState([]);

    useEffect(() => {
        axios.get('/api/debentures/')
            .then(response => setDebentures(response.data))
            .catch(error => console.error('Erro ao carregar debêntures', error));
    }, []);

    const handleInvestir = (debentureId) => {
        // Lógica de investimento
        alert(`Investindo na debênture ${debentureId}`);
    };

    return (
        <div>
            {debentures.map((debenture) => (
                <Card key={debenture.id} sx={{ marginBottom: 2 }}>
                    <CardContent>
                        <Typography variant="h6">{debenture.emissor.nome}</Typography>
                        <Typography>Valor Nominal: {debenture.valor_nominal}</Typography>
                        <Typography>Taxa de Juros: {debenture.taxa_juros}%</Typography>
                        <Typography>Vencimento: {debenture.vencimento}</Typography>
                        <Button onClick={() => handleInvestir(debenture.id)}>Investir</Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default DebentureList;

