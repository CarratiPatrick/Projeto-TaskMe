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
    }
  }
  const controller = new Controller();
  $("#enviar").click((e) => {
    e.preventDefault();
    controller.adcionaMensagem();;
  });
  
  
  