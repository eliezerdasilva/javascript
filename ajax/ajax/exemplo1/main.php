<?php

    if(isset($_GET['a']) and isset($_GET['a'])){
        $nome = $_GET['n'];
        $apelido = $_GET['a'];
        $frase_final = "seja bem vindo. $nome $apelido.";
        echo $frase_final;
        
    }





?>