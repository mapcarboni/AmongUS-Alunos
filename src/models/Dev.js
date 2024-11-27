import Aluno from "./Aluno.js";

class Dev extends Aluno {
  constructor(aluno) {
    super(
      aluno.grupo,
      aluno.nome,
      aluno.apelido,
      aluno.pegarSenha(),
      aluno.estaVivo
    );
    this.localAtual = "Recepção";
    this.tempoDesocupado = Date.now();
    this.votos = 0;
    this.jaVotou = false;
    this.pontos = 0;
  }

  mostrarPapel() {
    return `Sou jogador ${this.apelido} e sou um Dev com objetivo de resolver todos os problemas backends do SENAI 🎉`;
  }

  votar(alvo) {
    if (this.jaVotou === true) {
      throw new Error("Você já votou nesta rodada.");
    }
    alvo.votos++;
    this.jaVotou = true;
    return `O jogador ${alvo.apelido} foi votado pelo ${this.apelido} 😈`; 
  }
}

export default Dev;
