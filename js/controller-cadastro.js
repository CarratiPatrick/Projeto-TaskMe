class CadastroController {
  constructor() {
    $("#email").blur(() => {
      cadastroModel.email = $("#email").val()
      if (cadastroModel.validaEmail()) {
        // chamar funcao na view que mostra email verde
      } else {
        //chamar funcao na view que mostra o email vermelho com erro
      }
    })

    $("#confirmaEmail").blur(() => {
      cadastroModel.confirmaEmail = $("#confirmaEmail").val()
      if (cadastroModel.validaConfirmaEmail()) {

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