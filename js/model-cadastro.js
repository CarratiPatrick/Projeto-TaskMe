class CadastroModel {
  constructor() {
    this.nome = ""
    this.sobrenome = ""
    this.rg = ""
    this.orgaoEmissor = ""
    this.cep = ""
    this.rua = ""
    this.bairro = ""
    this.cidade = ""
    this.uf = ""
    this.complemento = ""
    this.numero = ""
    this.email = ""
    this.confirmaEmail = ""
    this.senha = ""
    this.confirmaSenha = ""

  }

  validaCep() {
    const cepVal = /^[0-9]{8}$/;
    return cepVal.test(this.cep)
  }

  //validação email
  validaEmail() {
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    return reg.test(this.email)
  }
  validaConfirmaEmail() {
    return this.email === this.confirmaEmail
  }

  pesquisaEndereco() {
    try {
      this.validaCep()
      $.ajax({
        url: `https://viacep.com.br/ws/${this.cep}/json`,
        type: 'GET',
        success: (resposta) => {
          this.rua = resposta.logradouro
          this.bairro = resposta.bairro
          this.cidade = resposta.localidade
          this.uf = resposta.uf
          cadastroController.callbackCep()
        },
        error: (erro) => {
          this.informaErroCep('cep nao encontrado')
        }
      })
    } catch (error) {
      this.informaErroCep('cep invalido')
    }

  }


}








const cadastroModel = new CadastroModel()