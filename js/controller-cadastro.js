class CadastroController {
  constructor() {
    $("#email").blur(() => {
      cadastroModel.email = $("#email").val()
      if (cadastroModel.validaEmail()) {
// chamar funcao na view que mostra email verde
      }else{
//chamar funcao na view que mostra o email vermelho com erro
      }
    })
    
    $("#confirmaEmail").blur(() => {
      cadastroModel.confirmaEmail = $("#confirmaEmail").val()
      if (cadastroModel.validaConfirmaEmail()) {

      }
    })
  }
  
}











const cadastroController = new CadastroController()