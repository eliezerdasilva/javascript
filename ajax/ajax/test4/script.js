$(document).ready(function(){
    $('#cmd').click(function(){
        $('#caixa').load('dados.txt');
    });
})


function executar(){
    $('#caixa').load('dados.txt');
}