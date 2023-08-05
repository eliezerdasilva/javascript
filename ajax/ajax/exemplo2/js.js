function fnajax(url, funcao){
   
    let pedido = new XMLHttpRequest();
    //respostaee
    pedido.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            
            funcao(pedido);
        }
    }
    
    // pedido
    pedido.open('GET', url, true);
    pedido.send();
}

function cmd1(pedido){
   
    document.getElementById('caixa1').innerHTML = pedido.responseText;
   
}

function cmd2(pedido){
    document.getElementById('caixa2').innerHTML = pedido.responseText;
}
