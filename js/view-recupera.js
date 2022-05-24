class EmailView {

  emailValido(){
    const p = $('#resposta')
    p.text("Link enviado!")
    p.css("color", "#00ff00")
  
  }
  emailInvalido(){
    const p= $('#resposta')
    p.text("E-mail invalido!")
    p.css("color", "#ff0000")
  }
}