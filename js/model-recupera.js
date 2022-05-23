class EmailModel {
    constructor(){
console.log("Entrei na model");
    }

    validacao(){
        const email = $('#email').val()

        if (email.indexOf("@") > -1){
            const view = new EmailView()
            console.log('email validou')
        } else{
            const view = new EmailView()
            console.log("email invalido");
        }
    }
}