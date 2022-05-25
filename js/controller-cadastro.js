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
      } else{
        invalidarCampo("#confirmaEmail")
      }
    })
    $("#cep").blur(() => {
      cadastroModel.cep = $("#cep").val()
      if (cadastroModel.validaCep()) {
        cadastroModel.pesquisaEndereco()
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