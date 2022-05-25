class CadastroController {
  constructor() {
    $("#email").blur(() => {
      this.validaEmail()
    })

    $("#confirmaEmail").blur(() => {
      this.validaConfirmaEmail()
    })
    $("#cep").blur(() => {
      this.validaCep()
    })
    $("#nome").blur(() => {
      this.validaNome()
    })
    $("#sobrenome").blur(() => {
      this.validaSobrenome()
    })
    $("#senha").blur(() => {
      this.confirmaSenha()
    })
    $("#confirmaSenha").blur(() => {
      this.validaConfirmaSenha()
    })
    $("#rg").blur(() => {
      this.validaRG()
    })

    $("#formCadastro").submit(evento => {
      evento.preventDefault()
      if (cadastroModel.validaForm()) {
        location.replace("./login.html")
      } else {
        this.validaRG()
        this.validaConfirmaSenha()
        this.confirmaSenha()
        this.validaSobrenome()
        this.validaNome()
        this.validaCep()
        this.validaConfirmaEmail()
        this.validaEmail()
      }
    })
  }

  callbackCep() {
    preencheFormCep({
      rua: cadastroModel.rua,
      bairro: cadastroModel.bairro,
      cidade: cadastroModel.cidade,
      uf: cadastroModel.uf,
    })
  }

  validaRG() {
    cadastroModel.rg = $("#rg").val()
    if (cadastroModel.validaRg()) {
      validarCampo("#rg")
    } else {
      invalidarCampo("#rg")
    }
  }
  validaConfirmaSenha() {
    cadastroModel.confirmaSenha = $("#confirmaSenha").val()
    if (cadastroModel.validaConfirmaSenha()) {
      validarCampo("#confirmaSenha")
    } else {
      invalidarCampo("#confirmaSenha")
    }

  }

  confirmaSenha() {
    cadastroModel.senha = $("#senha").val()
    if (cadastroModel.validaSenha()) {
      validarCampo("#senha")
    } else {
      invalidarCampo("#senha")
    }
  }

  validaSobrenome() {
    cadastroModel.sobrenome = $("#sobrenome").val()
    if (cadastroModel.validaSobrenome()) {
      validarCampo("#sobrenome")
    } else {
      invalidarCampo("#sobrenome")
    }
  }

  validaNome() {
    cadastroModel.nome = $("#nome").val()
    if (cadastroModel.validaNome()) {
      validarCampo("#nome")
    } else {
      invalidarCampo("#nome")
    }

  }
  validaCep() {
    cadastroModel.cep = $("#cep").val()
    if (cadastroModel.validaCep()) {
      validarCampo("#cep")
      cadastroModel.pesquisaEndereco()
    } else {
      invalidarCampo("#cep")
    }

  }
  validaConfirmaEmail() {
    cadastroModel.confirmaEmail = $("#confirmaEmail").val()
    if (cadastroModel.validaConfirmaEmail()) {
      validarCampo("#confirmaEmail")
    } else {
      invalidarCampo("#confirmaEmail")
    }
  }

  validaEmail() {
    cadastroModel.email = $("#email").val()
    if (cadastroModel.validaEmail()) {
      validarCampo("#email")
    } else {
      invalidarCampo("#email")
    }
  }

}











const cadastroController = new CadastroController()