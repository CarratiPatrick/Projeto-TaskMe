class EmailController {

    constructor(){
        console.log("Controller: Fui Criada");
    }

    validaOEmail(){
          console.log("Vou validar o email");
    const model = new EmailModel();
    let valida = model.validacao();
    console.log(valida);

    
    const view = new EmailView();
    if( valida == "valido"){
        view.emailValido()
    }else{
        view.emailInvalido()
    }


    
}
}

const controller = new EmailController();
document.getElementById("btn").addEventListener("click", ()=> controller.validaOEmail());