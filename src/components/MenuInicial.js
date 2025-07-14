import React from 'react';
import "../css/menuInicial.css";

function MenuInicial({ navegar }) {
  return (
    <div className="menu-container">
      <h2 className="menu-titulo">O que você deseja fazer?</h2>
      <div className="botoes-container">
        <button className="menu-botao" onClick={() => navegar('jogar')}>Jogar</button>
        <button className="menu-botao" onClick={() => navegar('cadastrar')}>Cadastrar</button>
        <button className="menu-botao" onClick={() => navegar('atualizar')}>Atualizar</button>
        <button className="menu-botao" onClick={() => navegar('listar')}>Listar</button>
        <button className="menu-botao" onClick={() => navegar('excluir')}>Excluir</button>
      </div>
    </div>
  );
}

export default MenuInicial;