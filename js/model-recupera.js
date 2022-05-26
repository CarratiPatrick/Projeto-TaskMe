class EmailModel {

    validacao() {

        const email = $('#email').val()

        if (email.indexOf("@") > -1 && email.indexOf(".") > -1) {
            return "valido"

        } else {
            return "invalido"
        }
    }
}