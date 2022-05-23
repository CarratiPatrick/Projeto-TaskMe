class EmailViewValido{
  constructor(){
    console.log("Entrei na view");
  }

  emailValido(){
    const text = $('#text')
    const p = document.createElement('p')
    p.innerText = "E-mail válido"
    p.style.color = "#00ff00"
  
    text.appendChild(p)
    console.log("Email válido");
  }
  emailInvalido(){
    const text = $('#text')
    const p = document.createElement('p')
    p.innerText = "E-mail inválido"
    p.style.color = "#ff0000"
  
    text.appendChild(p)
    console.log("Email inválido");
  }
}