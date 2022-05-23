class EmailController {

    constructor(){
        console.log("Controller: Fui Criada");
    }

    validaOEmail(){
          console.log("Vou validar o email");
    const model = new EmailModel();
    model.validacao();

    // Passamos os dados para a view
    const view = new EmailView();
    
}
}

const controller = new EmailController();
document.getElementById("btn").addEventListener("click", ()=> controller.validaOEmail());