class EmailView {
  constructor(){
    console.log("Entrei na view");
  }

  emailValido(){
    console.log("Email válido na view");
    const p = $('#resposta')
    p.text("Link enviado!")
    p.css("color", "#00ff00")
  
  }
  emailInvalido(){
    console.log("Email inválido na view");
    const p= $('#resposta')
    p.text("E-mail invalido!")
    p.css("color", "#ff0000")
  }
}