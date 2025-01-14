import axios from 'axios';
import { API_BASE_URL } from '../config/config';

// Função para buscar investimentos
export const getInvestments = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}investments/`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar investimentos:', error);
    throw error;
  }
};

// Função para criar um novo investimento
export const createInvestment = async (investmentData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}investments/`, investmentData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar investimento:', error);
    throw error;
  }
};

