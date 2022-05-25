class CadastroController {
  constructor() {
    $("#email").blur(() => {
      cadastroModel.email = $("#email").val()
      if (cadastroModel.validaEmail()) {
        validarCampo("#email")
      } else {
        invalidarCampo("#email")
      }
    })

    $("#confirmaEmail").blur(() => {
      cadastroModel.confirmaEmail = $("#confirmaEmail").val()
      if (cadastroModel.validaConfirmaEmail()) {
        validarCampo("#confirmaEmail")
      } else {
        invalidarCampo("#confirmaEmail")
      }
    })
    $("#cep").blur(() => {
      cadastroModel.cep = $("#cep").val()
      if (cadastroModel.validaCep()) {
        validarCampo("#cep")
        cadastroModel.pesquisaEndereco()
      } else {
        invalidarCampo("#cep")
      }
    })
    $("#nome").blur(() => {
      cadastroModel.nome = $("#nome").val()
      if (cadastroModel.validaNome()) {
        validarCampo("#nome")
      } else {
        invalidarCampo("#nome")
      }
    })
    $("#sobrenome").blur(() => {
      cadastroModel.sobrenome = $("#sobrenome").val()
      if (cadastroModel.validaSobrenome()) {
        validarCampo("#sobrenome")
      } else {
        invalidarCampo("#sobrenome")
      }
    })
    $("#senha").blur(() => {
      cadastroModel.senha = $("#senha").val()
      if (cadastroModel.validaSenha()) {
        validarCampo("#senha")
      } else {
        invalidarCampo("#senha")
      }
    })
    $("#confirmaSenha").blur(() => {
      cadastroModel.confirmaSenha = $("#confirmaSenha").val()
      if (cadastroModel.validaConfirmaSenha()) {
        validarCampo("#confirmaSenha")
      } else {
        invalidarCampo("#confirmaSenha")
      }
    })
    $("#rg").blur(() => {
      cadastroModel.rg = $("#rg").val()
      if (cadastroModel.validaRg()) {
        validarCampo("#rg")
      } else {
        invalidarCampo("#rg")
      }
    })
    $("#formCadastro").submit(evento => {
      evento.preventDefault()
      if (cadastroModel.validaForm()) {
        console.log('vai pra sucesso');
      } else {
        console.log('foi nao');
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
}











const cadastroController = new CadastroController()