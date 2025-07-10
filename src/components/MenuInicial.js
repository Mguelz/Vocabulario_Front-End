import React from 'react';

function MenuInicial({ navegar }) {
  return (
    <div>
      <h2>O que você deseja fazer?</h2>
      <button onClick={() => navegar('jogar')}>Jogar</button>
      <button onClick={() => navegar('cadastrar')}>Cadastrar</button>
      <button onClick={() => navegar('atualizar')}>Atualizar</button>
      <button onClick={() => navegar('listar')}>Listar</button>
      <button onClick={() => navegar('excluir')}>Excluir</button>
    </div>
  );
}

export default MenuInicial;