import { Router } from "express";
import jogo from "../gameInstance.js";
import Aluno from "../models/Aluno.js";

const cadastroRoutes = Router();

cadastroRoutes.post("/adicionar", (req, res) => {
  const { grupo, nome, apelido, senha } = req.body;
  try {
    jogo.verificarNomeExistente(nome);
    jogo.verificarApelidoExistente(apelido);

    const novoAluno = new Aluno(grupo, nome, apelido, senha);

    jogo.adicionarAluno(novoAluno);

    res
      .status(201)
      .json({ message: "Aluno criado com sucesso.", aluno: novoAluno });
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

cadastroRoutes.get("/listar", (req, res) => {
  const { grupo, nome } = req.query;
  try {
    const resultado = jogo.mostrarAlunos(grupo, nome);

    return res.status(200).json(resultado);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
});

cadastroRoutes.put("/atualizar", (req, res) => {
  const { nome, novoGrupo, novoNome, novoApelido, novaSenha } = req.body;

  try {
    if (!novoGrupo && !novoNome && !novoApelido && !novaSenha) {
      return res.status(400).json({
        message: "É necessário informar ao menos um campo para atualização.",
      });
    }

    const alunoAtualizado = jogo.alunos.find((a) => a.nome === nome);

    if (!alunoAtualizado) {
      return res.status(404).json({ message: `Aluno ${nome} não encontrado.` });
    }

    if (novoNome) {
      alunoAtualizado.validarNome(novoNome);
      jogo.verificarNomeExistente(novoNome);
    }

    if (novoApelido) {
      jogo.verificarApelidoExistente(novoApelido);
    }

    alunoAtualizado.atualizarCampos({
      grupo: novoGrupo,
      nome: novoNome,
      apelido: novoApelido,
      senha: novaSenha,
    });

    return res.status(200).json({
      message: "Aluno atualizado com sucesso.",
      aluno: alunoAtualizado,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

cadastroRoutes.delete("/remover", (req, res) => {
  const { nome } = req.query;

  try {
    const aluno = jogo.removerAluno(nome);

    if (!aluno) {
      return res.status(404).json({ message: `Aluno ${nome} não encontrado.` });
    }

    return res.status(200).json({
      message: "Aluno removido com sucesso.",
      aluno: aluno,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

export default cadastroRoutes;
