$(document).ready(
    function(){
        $("#cmd").click(
            function(){
            
                $("#caixa").load("dados.txt", function(responseTxt,statusTxt,xhr){
                    if(statusTxt == "sucess"){
                        alert('Aconteceu uma comunicação');
                    }
                    if(statusTxt == "error"){
                        alert('ERRO: '+xhr.status+ ": "+xhr.statusText);
                    }
                });
            }
        );
    }

);