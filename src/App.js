// import React, { useState } from 'react';
// import MenuInicial from './components/MenuInicial';
// import Jogar from './components/Jogar';
// import Cadastrar from './components/Cadastrar';
// import Atualizar from './components/AtualizarPar';
// import Listar from './components/ListaPares';
// import Excluir from './components/DeletarPar';

// function App() {
//   const [telaAtual, setTelaAtual] = useState('menu');

//   const navegar = (destino) => setTelaAtual(destino);

//   return (
//     <div style={{ padding: '20px' }}>
//       {telaAtual === 'menu' && <MenuInicial navegar={navegar} />}
//       {telaAtual === 'jogar' && <Jogar voltar={() => setTelaAtual('menu')} />}
//       {telaAtual === 'cadastrar' && <Cadastrar voltar={() => setTelaAtual('menu')} />}
//       {telaAtual === 'atualizar' && <Atualizar voltar={() => setTelaAtual('menu')} />}
//       {telaAtual === 'listar' && <Listar voltar={() => setTelaAtual('menu')} />}
//       {telaAtual === 'excluir' && <Excluir voltar={() => setTelaAtual('menu')} />}
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import MenuInicial from './components/MenuInicial'
import Listar from './components/ListaPares';
import Cadastrar from './components/Cadastrar';
import Atualizar from './components/AtualizarPar';
import Excluir from './components/DeletarPar';
import Jogar from './components/Jogar';
import ValidarSenha from './components/ValidarSenha';

function App() {
  const [pagina, setPagina] = useState("menu");
  const [proximaPaginaProtegida, setProximaPaginaProtegida] = useState(null);

  function navegar(p) {
    if (p === "jogar") {
      setPagina("jogar"); // acesso livre
    } else {
      setProximaPaginaProtegida(p); // salvar destino
      setPagina("validar"); // exigir senha
    }
  }

  function liberarAcesso() {
    setPagina(proximaPaginaProtegida);
    setProximaPaginaProtegida(null);
  }

  return (
    <>
      {pagina === "menu" && <MenuInicial navegar={navegar} />}
      {pagina === "validar" && (
        <ValidarSenha
          voltar={() => setPagina("menu")}
          onValidar={liberarAcesso}
        />
      )}
      {pagina === "listar" && <Listar voltar={() => setPagina("menu")} />}
      {pagina === "cadastrar" && <Cadastrar voltar={() => setPagina("menu")} />}
      {pagina === "atualizar" && <Atualizar voltar={() => setPagina("menu")} />}
      {pagina === "excluir" && <Excluir voltar={() => setPagina("menu")} />}
      {pagina === "jogar" && <Jogar voltar={() => setPagina("menu")} />}
    </>
  );
}

export default App;
