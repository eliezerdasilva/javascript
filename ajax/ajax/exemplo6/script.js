 // submeter o formulario
function submeterFormulario(id_formulario){

    let frm = $('#'+id_formulario);

    frm.submit(function(e){
        //impede a submissão 
        e.preventDefault();
        //submissão do form em Ajax
        $.ajax({
            type: frm.attr('methos'),
            url: frm.attr('action'),
            data: frm.serialize(),
            //sucesso
            success: function(i){
               $('#info').html('Enviado com sucesso');
            },
            //erro
            error: function(){
                $('#info').html('Aconteceu um erro');
            }
        });
    });

}