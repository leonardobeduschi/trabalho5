import React from 'react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HomePage() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${API_URL}/data`);
          setData(response.data);
        } catch (error) {
          console.error('Erro ao obter os dados:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <h1>Página Inicial</h1>
        {data && <p>Dados: {JSON.stringify(data)}</p>}
      </div>
    );
  }
  
  export default HomePage;
  