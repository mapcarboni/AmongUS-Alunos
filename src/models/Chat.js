class Chat {
  constructor() {
    this.mensagens = [];
  }

  enviarMensagem(apelido, mensagem) {
    const data = new Intl.DateTimeFormat("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date());

    const mensagemCompleta = `${data} - ${apelido}: ${mensagem}`;
    this.mensagens.push(mensagemCompleta);
  }
}

export default Chat;
