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
  informaErroCep(erro) {

  }
  
  validaCep() {
  
    // valiada o cep e caso de ruim, da um throw
  }
  
  //validação email
  validaEmail() {
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    return reg.test(this.email)
  }
  validaConfirmaEmail() {
    return this.email === this.confirmaEmail
  }
}



const cadastroModel = new CadastroModel()