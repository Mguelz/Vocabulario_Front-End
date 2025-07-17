import React, { useEffect, useState } from 'react';

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
      <h2>Pares Cadastrados</h2>
      <ul>
        {pares.map(par => (
          <li key={par.id}>
            ID {par.id}: {par.portugues} — {par.ingles}
          </li>
        ))}
      </ul>
      <button onClick={voltar}>Voltar</button>
    </div>
  );
}

export default Listar;