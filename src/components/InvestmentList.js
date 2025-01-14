import React from 'react';

const InvestmentList = ({ investments }) => {
  return (
    <ul>
      {investments.map((investment) => (
        <li key={investment.id}>
          {investment.nome} - {investment.valor_minimo}
        </li>
      ))}
    </ul>
  );
};

export default InvestmentList;

