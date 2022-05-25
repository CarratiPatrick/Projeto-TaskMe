let botao = document.getElementById("submit")

botao.addEventListener("click", (event) => {
  event.preventDefault()
  validaEmail()
})
function validaEmail() {
  const email = document.querySelector("#email");
  const senha = document.querySelector("#password").value;
  const tamanhoSenha = senha.length;

    if (email.value.indexOf("@") > -1 ) {
      console.log("validei email");
      if(tamanhoSenha > 3){
        console.log("validei senha");
        location.replace("../index.html");

      }

    }else {
    const p = document.querySelector("#resposta");
    p.innerText = "E-mail inválido!";
    p.style.color = "#ff0000";
  }
}
//Mostrar e ocultar senha
const container = document.querySelector("#container");
const senha = document.querySelector("#password");
const icon = document.querySelector("#eyeSvg");

icon.addEventListener("click", function () {
  container.classList.toggle("visible");
  if (container.classList.contains("visible")) {
    icon.src = "../img/fechado.svg";
    senha.type = "text";
  } else {
    icon.src = "../img/aberto.svg";
    senha.type = "password";
  }
});
