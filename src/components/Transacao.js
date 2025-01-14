import React, { useState } from 'react';
import axios from 'axios';

const Transacao = () => {
    const [valor, setValor] = useState(0);
    const [debentureId, setDebentureId] = useState(0);

    const realizarTransacao = () => {
        axios.post('/api/transacoes/', { valor, debenture: debentureId })
            .then(response => alert('Investimento realizado com sucesso!'))
            .catch(error => console.error('Erro ao realizar transação', error));
    };

    return (
        <div>
            <input
                type="number"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                placeholder="Valor a investir"
            />
            <input
                type="number"
                value={debentureId}
                onChange={(e) => setDebentureId(e.target.value)}
                placeholder="ID da Debênture"
            />
            <button onClick={realizarTransacao}>Investir</button>
        </div>
    );
};

export default Transacao;

