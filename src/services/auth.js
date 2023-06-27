import axios from 'axios';
const API_URL = 'http://projeto5.com/api';

async function login(username, password) {
    try {
      const response = await axios.post(`${API_URL}/login`, { username, password });
      const token = response.data.token;
      return token;
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      throw new Error('Erro ao fazer login');
    }
  }
  
  export { login };

  import React, { useState } from 'react';
  import { login } from '../services/auth';
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const token = await login(username, password);
      console.log('Token de autenticação:', token);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };
  
  import axios from 'axios';
  
  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token'); // Obtém o token do local storage
      if (token) {
        config.headers.Authorization = `Bearer ${token}`; // Define o cabeçalho de autorização
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  
  
    
