import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateRegistro({ registroId }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRegistro = async () => {
      try {
        const response = await axios.get(`https://sua-api.com/registros/${registroId}`);
        const { nome, email } = response.data;
        setNome(nome);
        setEmail(email);
      } catch (error) {
        console.error('Erro ao obter detalhes do registro:', error);
      }
    };

    fetchRegistro();
  }, [registroId]);

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      await axios.put(`https://sua-api.com/registros/${registroId}`, { nome, email });
      console.log('Registro atualizado com sucesso');
    } catch (error) {
      console.error('Erro ao atualizar registro:', error);
    }

    setIsLoading(false);
  };

  if (isLoading) {
    return <div>Atualizando registro...</div>;
  }

  return (
    <div>
      <h1>Atualizar Registro</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={handleNomeChange} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
}

export default UpdateRegistro;
