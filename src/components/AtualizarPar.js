import React, { useState } from 'react';

function Atualizar({ voltar }) {
  const [id, setId] = useState('');
  const [portugues, setPortugues] = useState('');
  const [ingles, setIngles] = useState('');
  const [mensagem, setMensagem] = useState('');

  function handleUpdate(e) {
    e.preventDefault();
    fetch('https://vocabulario-back-end.onrender.com/pares', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, portugues, ingles })
    })
      .then(res => {
        if (res.ok) {
          setMensagem('✅ Par atualizado com sucesso!');
        } else {
          setMensagem('❌ ID não encontrado ou erro ao atualizar.');
        }
      })
      .catch(() => setMensagem('❌ Erro de comunicação com o servidor.'));
  }

  return (
    <div>
      <h2>Atualizar Par</h2>
      <form onSubmit={handleUpdate}>
        <input value={id} onChange={e => setId(e.target.value)} placeholder="ID" required />
        <input value={portugues} onChange={e => setPortugues(e.target.value)} placeholder="Português" required />
        <input value={ingles} onChange={e => setIngles(e.target.value)} placeholder="Inglês" required />
        <button type="submit">Atualizar</button>
      </form>
      <p>{mensagem}</p>
      <button onClick={voltar}>Voltar</button>
    </div>
  );
}

export default Atualizar;