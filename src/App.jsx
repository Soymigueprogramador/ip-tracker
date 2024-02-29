import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [ipAddress, setIpAddress] = useState('Cargando IP');

  useEffect(() => {
    const token = 'ebffa21d2b4655'; // Define tu token aquí
    const urlApi = `https://ipinfo.io/json?token=${token}`;

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
      <p className='primer-datos'> ¿Qué es una dirección IP? </p>
      <p className='segundo-datos'>
        Una dirección IP es una dirección única que identifica a un dispositivo en Internet o en una red local. <br></br>
        IP significa “protocolo de Internet”, <br></br>
        que es el conjunto de reglas que rigen el formato de los datos enviados a través de Internet o la red local. <br></br>
      </p>
    </div>
  );
};

export default App;
