import React, { useState } from 'react';
import "../css/validarSenha.css"; // Crie esse CSS se quiser estilizar

function ValidarSenha({ onValidar, voltar }) {
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const senhaCorreta = "seilaseila";

  const validar = () => {
    if (senha === senhaCorreta) {
      onValidar();
    } else {
      setErro("Senha incorreta. Tente novamente.");
    }
  };

  return (
    <div className="validar-container">
      <h2>🔐 Digite a senha para continuar</h2>
      <input
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Senha"
        className="senha-input"
      />
      <button onClick={validar} className="botao-validar">Validar</button>
      {erro && <p className="erro-senha">{erro}</p>}
      <button onClick={voltar} className="botao-voltar-validacao">Voltar</button>
    </div>
  );
}

export default ValidarSenha;