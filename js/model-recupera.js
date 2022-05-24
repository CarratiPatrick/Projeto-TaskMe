class EmailModel {
    constructor(){
console.log("Entrei na model");
    }

    validacao(){
        console.log("entrei na validação");
      
        const email = $('#email').val()

        if (email.indexOf("@") > -1){
            console.log('email validou')
          return "valido"
        } else{
            console.log("email invalido");
            return "invalido"
        }
    }
    getValor(){
        return this.valor
    }
}