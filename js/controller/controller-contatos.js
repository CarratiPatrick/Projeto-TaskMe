class Controller {
  constructor(){
    
  }
    adcionaMensagem() {
      const nome =$("#nomeContato").val();
      const email = $("#emailContato").val();
      const assunto =$("#assuntoContato").val()
      const msg = $("#msgContato").val()
  
      const anotacoes = new Anotacoes(nome,email,assunto,msg);
      //anotacoes.verificaNota(titulo, nota);
    //  const mostraContato = new ContatoView()
    }
    limparMensagem(){
      const nome =$("#nomeContato").val("");
      const email = $("#emailContato").val("");
      const assunto =$("#assuntoContato").val("")
      const msg = $("#msgContato").val("")
    }
  }

  const controller = new Controller();
  const mostraContato = new ContatoView()
  
  $("#enviar").click((event) => {
    event.preventDefault();
    controller.adcionaMensagem();
    $('#formulario').hide();
    mostraContato.mostrarSucessoEnvio()

  });
  $("#btnReenviar").click((event)=>{
    event.preventDefault();
    controller.limparMensagem()
    $('#formulario').show();
    $( "#reenviar" ).addClass( "d-none" );

  })
  
  
  