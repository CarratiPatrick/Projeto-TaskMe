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
  validaRg() {
    const RgVal = /^[0-9]{9}$/;
    return RgVal.test(this.rg)
  }

  //validação email
  validaEmail() {
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    return reg.test(this.email)
  }
  validaConfirmaEmail() {
    if (!this.validaEmail()) {
      return false
    }
    if (!this.email.length) return false

    return this.email === this.confirmaEmail
  }

  validaNome() {
    return this.nome.length > 3
  }

  validaSobrenome() {
    return this.sobrenome.length > 3
  }

  validaSenha() {
    return this.senha.length > 7
  }
  validaConfirmaSenha() {
    if (!this.validaSenha()) {
      return false
    }
    if (!this.senha.length) return false

    return this.senha === this.confirmaSenha
    
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

  validaForm(){
    return this.validaNome() && this.validaSobrenome() && this.validaCep() && this.validaRg() && this.validaEmail() && this.validaConfirmaEmail() && this.validaSenha() && this.validaConfirmaSenha()
  }


}








const cadastroModel = new CadastroModel()