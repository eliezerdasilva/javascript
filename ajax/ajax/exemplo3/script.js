  function executar(){
   
    //ajax
    let pedido = new XMLHttpRequest();

    //resposta
    pedido.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let dados = this.responseXML;
            let clientes = dados.getElementsByTagName("cliente");
            let conteudo = '<h2>CLientes</h2>';
            for(let i = 0; i < clientes.length; i++){
                conteudo += '<p>Nome : '+ clientes[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue + '</p>';
                conteudo += '<p>Contato : '+ clientes[i].getElementsByTagName("contato")[0].childNodes[0].nodeValue + '</p>';
                conteudo += '<hr>';
            }
            document.getElementById('caixa1').innerHTML = conteudo
        }

    }
        //tratamento

   

    // pedido
    pedido.open("GET","dados.xml",true);
    pedido.send();
  }