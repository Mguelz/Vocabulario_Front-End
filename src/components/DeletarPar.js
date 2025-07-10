import React, { useState } from 'react';

function Excluir({ voltar }) {
  const [id, setId] = useState('');
  const [mensagem, setMensagem] = useState('');

  function handleDelete() {
    fetch(`http://localhost:8080/pares/${id}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          setMensagem('✅ Par excluído com sucesso!');
        } else {
          setMensagem('❌ ID não encontrado ou erro ao excluir.');
        }
      })
      .catch(() => setMensagem('❌ Falha na conexão com o servidor.'));
  }

  return (
    <div>
      <h2>Excluir Par</h2>
      <input value={id} onChange={e => setId(e.target.value)} placeholder="Digite o ID" />
      <button onClick={handleDelete}>Excluir</button>
      <p>{mensagem}</p>
      <button onClick={voltar}>Voltar</button>
    </div>
  );
}

export default Excluir;