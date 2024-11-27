class Quiz {
  constructor() {
    this.perguntas = [];
  }

  obterPerguntaAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * this.perguntas.length);
    return this.perguntas[indiceAleatorio];
  }

  verificarResposta(pergunta, respostaDada) {
    return pergunta.respostaCorreta === respostaDada;
  }
}

export default Quiz;
