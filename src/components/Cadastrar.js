import React, { useState } from 'react';

function Cadastrar({ voltar }) {
  const [portugues, setPortugues] = useState('');
  const [ingles, setIngles] = useState('');
  const [mensagem, setMensagem] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    fetch('https://vocabulario-back-end.onrender.com/pares', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ portugues, ingles })
    })
      .then(() => {
        setMensagem('✅ Par cadastrado com sucesso!');
        setPortugues('');
        setIngles('');
      })
      .catch(err => setMensagem('❌ Erro ao cadastrar.'));
  }

  return (
    <div>
      <h2>Cadastrar Novo Par</h2>
      <form onSubmit={handleSubmit}>
        <input value={portugues} onChange={e => setPortugues(e.target.value)} placeholder="Português" required />
        <input value={ingles} onChange={e => setIngles(e.target.value)} placeholder="Inglês" required />
        <button type="submit">Cadastrar</button>
      </form>
      <p>{mensagem}</p>
      <button onClick={voltar}>Voltar</button>
    </div>
  );
}

export default Cadastrar;