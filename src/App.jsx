// Importación para los estilos.
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [ipAddress, setIpAddress] = useState('Cargando IP');

  useEffect(() => {
    const urlApi = 'https://api.ipify.org?format=json';

    fetch(urlApi)
      .then(res => res.json())
      .then(data => {
        setIpAddress(data.ip);
      })
      .catch(error => {
        console.error('Error al traer tu dirección IP', error);
        setIpAddress('Error al traer tu dirección IP');
      });
  }, []);

  return (
    <div className='container'>
      <h1>IP Tracker</h1>
      <p>Tu dirección IP es: <span id='direccionIP'>{ipAddress}</span></p>
    </div>
  );
};

export default App;