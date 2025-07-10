import React, { useEffect, useState } from "react";
import "../css/jogar.css";

function Jogar({ voltar }) {
  const [par, setPar] = useState(null);
  const [resposta, setResposta] = useState("");
  const [feedback, setFeedback] = useState("");
  const [totalRodadas, setTotalRodadas] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const [mostrarFeedback, setMostrarFeedback] = useState(false);

  // Buscar novo par ao carregar ou após resposta
  function carregarNovaPalavra() {
    fetch("http://localhost:8080/pares/aleatorio")
      .then((res) => res.json())
      .then((data) => {
        console.log("Resposta da API: ", data);
        setPar(data); // Atualiza o estado com a nova palavra
        setResposta(""); // Limpa a resposta anterior
        setFeedback(""); // Limpa o feedback anterior
      })
      .catch((err) => console.error("Erro ao buscar par:", err));
  }

  useEffect(() => {
    carregarNovaPalavra();
  }, []);

  function verificar() {
    const correto =
      resposta.trim().toLowerCase() === par.portugues.trim().toLowerCase();

    setFeedback(
      correto ? "✅ Acertou!" : `❌ Errou! A resposta era: ${par.portugues}`
    );
    setMostrarFeedback(true);

    setTotalRodadas((prev) => prev + 1);
    correto ? setAcertos((prev) => prev + 1) : setErros((prev) => prev + 1);

    // 🔁 Carrega nova palavra mais rápido (ex: 1.5s)
    setTimeout(() => {
      carregarNovaPalavra();
    }, 1000);

    // 🧽 Remove feedback depois (ex: 4s)
    setTimeout(() => {
      setMostrarFeedback(false);
      setFeedback("");
    }, 5000);
  }

  const porcentagem =
    totalRodadas === 0 ? 0 : ((acertos / totalRodadas) * 100).toFixed(1);
  return (
    <div className="jogo-container">
      <h1 className="titulo">Traduza a palavra abaixo</h1>
      {par && (
        <>
          <div className="palavra">{par.ingles}</div>
          <textarea
            className="textarea-grande"
            value={resposta}
            onChange={(e) => setResposta(e.target.value)}
            placeholder="Digite a tradução em português"
            onKeyPress={(e) => e.key === "Enter" && verificar()}
          />
          <button className="botao-verificar" onClick={verificar}>
            Verificar
          </button>
          <div className="feedback">{feedback}</div>
        </>
      )}
      <div className="painel">
        <p>
          🧠 Total de palavras: <strong>{totalRodadas}</strong>
        </p>
        <p>
          ✅ Acertos: <strong>{acertos}</strong> | ❌ Erros:{" "}
          <strong>{erros}</strong>
        </p>
        <p>
          📊 Porcentagem de acertos: <strong>{porcentagem}%</strong>
        </p>
      </div>
      <button className="botao-voltar" onClick={voltar}>
        Voltar
      </button>
      <button className="botao-parar" onClick={voltar}>
        Parar de Jogar
      </button>
    </div>
  );
}

export default Jogar;
