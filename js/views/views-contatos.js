class ContatoView {
    mostrarSucessoEnvio() {
      $( "#reenviar" ).removeClass( "d-none" );
      const p =$('#sucesso')
      p.text("Enviado com sucesso")
      p.css("color", "#00ff00")
  }
}
  