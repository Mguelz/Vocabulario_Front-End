// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import ListaPares from './components/ListaPares';
// import CadastrarPar from './components/Cadastrar';


// function App() {
//   return (
//     <div>
//       <h1>Vocabulário - Consumo da API</h1>
//       <CadastrarPar />
//       <ListaPares />
//     </div>
//   );
//   }
  
//   export default App;

import React, { useState } from 'react';
import MenuInicial from './components/MenuInicial';
import Jogar from './components/Jogar';
import Cadastrar from './components/Cadastrar';
import Atualizar from './components/AtualizarPar';
import Listar from './components/ListaPares';
import Excluir from './components/DeletarPar';

function App() {
  const [telaAtual, setTelaAtual] = useState('menu');

  const navegar = (destino) => setTelaAtual(destino);

  return (
    <div style={{ padding: '20px' }}>
      {telaAtual === 'menu' && <MenuInicial navegar={navegar} />}
      {telaAtual === 'jogar' && <Jogar voltar={() => setTelaAtual('menu')} />}
      {telaAtual === 'cadastrar' && <Cadastrar voltar={() => setTelaAtual('menu')} />}
      {telaAtual === 'atualizar' && <Atualizar voltar={() => setTelaAtual('menu')} />}
      {telaAtual === 'listar' && <Listar voltar={() => setTelaAtual('menu')} />}
      {telaAtual === 'excluir' && <Excluir voltar={() => setTelaAtual('menu')} />}
    </div>
  );
}

export default App;