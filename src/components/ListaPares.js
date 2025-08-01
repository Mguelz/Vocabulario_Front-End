import React, { useEffect, useState } from 'react';
import '../css/listar.css';

function Listar({ voltar }) {
  const [pares, setPares] = useState([]);

  useEffect(() => {
    fetch('https://vocabulario-back-end.onrender.com/pares')
      .then(res => res.json())
      .then(data => setPares(data))
      .catch(err => console.error('Erro ao listar pares:', err));
  }, []);

  return (
    <div>
      <button className='botao-voltar' onClick={voltar}>Voltar</button>
      <h2 className='titulo'>PARES CADASTRADOS</h2>
      <ul className="lista-pares">
        {pares.map(par => (
          <li key={par.id} className="par-card">
            <strong>{par.id}</strong><br />
            {par.portugues} <br></br>
            {par.ingles}
          </li>
        ))}
      </ul>

      <button className='botao-voltar' onClick={voltar}>Voltar</button>
    </div>
  );
}

export default Listar;