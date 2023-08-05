window.onload = function () {
    document.getElementById('btn').addEventListener('click', btn_click);

}
function btn_click() {
    //manipulacao 
    //document.getElementById('caixa').innerHTML = "teste";
    //ajax
    //Objeto request
    let pedido = new XMLHttpRequest();

    //definir a funcao
    pedido.onreadystatechange = function () {
        if (pedido.readyState == 4 && pedido.status == 200) {
            document.getElementById('caixa').innerHTML = this.responseText;

        }else{
            document.getElementById('caixa').innerHTML = this.statusText;
        }
    }
    pedido.open("get", "main.php?n=joao&a=ribeiro", true);
    pedido.send();

    
}