import React from 'react';

const InvestmentForm = ({ formData, setFormData, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={formData.nome}
        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
      />
      <input
        type="number"
        placeholder="Valor Mínimo"
        value={formData.valor_minimo}
        onChange={(e) => setFormData({ ...formData, valor_minimo: e.target.value })}
      />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default InvestmentForm;

