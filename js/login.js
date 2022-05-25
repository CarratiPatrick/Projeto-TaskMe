function validaEmail() {
  const email = document.querySelector("#email").value;

  if (email.indexOf("@") > -1) {
    const senha = document.querySelector("#password").value;
    const tamanhoSenha = senha.lenght;
    if (email.indexOf("@") > -1 && tamanhoSenha > 3) {
      console.log("validei email e senha");
    }
    window.location.href = "./index.html";
  } else {
    const p = document.querySelector("#resposta");
    p.innerText = "E-mail inválido!";
    p.style.color = "#ff0000";
  }
}
