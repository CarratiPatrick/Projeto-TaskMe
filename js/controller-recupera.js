class EmailController {

    validaOEmail() {

        const model = new EmailModel();
        let valida = model.validacao();


        const view = new EmailView();
        if (valida == "valido") {
            view.emailValido()
        } else {
            view.emailInvalido()
        }
    }
}

const controller = new EmailController();
document.getElementById("btn").addEventListener("click", () => controller.validaOEmail());