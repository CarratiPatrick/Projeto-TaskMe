class Anotacoes {
    constructor(nome, email, assunto, msg ) {
      this.nome = this.verificaTipoDoItem(nome);
      this.email = this.verificaTipoDoEmail(email);
      this.email = this.verificaTipoDoItem(assunto);
      this.email = this.verificaTipoDoItem(msg);
    }
  
    verificaTipoDoItem(item) {
      try {
        if (typeof item === "string") {
          return item;
        } else {
          throw new Error("Tipo invalido");
        }
      } catch (e) {
        console.error(e);
      };
      verificaTipoDoEmail(email) {
        try {
          const mail = email.indexOf("@")
          if (mail > -1) {
            return email;
          } else {
            throw new Error("Tipo invalido");
          }
        } catch (e) {
          console.error(e);
        }
      };
    }
    
  
   
  