class Aluno {
  #senha;
  constructor(grupo, nome, apelido, senha) {
    this.grupo = this.validarGrupo(grupo);
    this.nome = this.validarNome(nome);
    this.apelido = this.validarApelidoNaoNulo(apelido);
    this.#senha = this.validarSenha(senha);
    this.estaVivo = true;
    this.localAtual = "Portaria do SENAI";
  }

  validarNome(nome) {
    if (!nome || typeof nome !== "string" || nome.match(/[^a-zA-Z]/)) {
      throw new Error(
        "Campo --nome-- inválido. Ele deve ser uma string e não conter números!"
      );
    }
    return nome;
  }

  validarGrupo(grupo) {
    if (!Number.isInteger(grupo) || grupo < 1 || grupo > 6) {
      throw new Error(
        "Campo --grupo-- é obrigatório e deve ser um número de 1 a 6!"
      );
    }
    return grupo;
  }

  validarApelidoNaoNulo(apelido) {
    if (!apelido) {
      throw new Error("Campo --apelido-- é obrigatório!");
    }
    return apelido;
  }

  validarSenha(senha) {
    if (!senha || typeof senha !== "string" || senha.match(/[^a-zA-Z0-9]/)) {
      throw new Error(
        "Campo --senha-- é obrigatório! Ela deve ser uma string podendo ter dígitos e letras."
      );
    }
    return senha;
  }

  atualizarCampos({ grupo, nome, apelido, senha }) {
    if (grupo) {
      this.grupo = this.validarGrupo(grupo);
    }
    if (nome) {
      this.nome = this.validarNome(nome);
    }
    if (apelido) {
      this.apelido = this.validarApelidoNaoNulo(apelido);
    }
    if (senha) {
      this.#senha = this.validarSenha(senha);
    }
  }

  pegarSenha() {
    return this.#senha;
  }
}

export default Aluno;
