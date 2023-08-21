const p_array=document.querySelector("#array");
const btnVerificar=document.querySelector("#btnVerificar");
const resultado=document.querySelector("#resultado");
var pesquisa = document.querySelector("#pesquisa");


const elementos_array=[16,12,20,10,17,15,13,11,18,10]
p_array.innerHTML="["+elementos_array+"]"
// Verifica e retorna se uma ou mais das condicoes estabelecidas existe
btnVerificar.addEventListener("click",(evt)=>{
    resultado.innerHTML = "";
    const ret=elementos_array.some((e,i)=>{

        if(e<18){
            resultado.innerHTML +="Array não conforme na posição " +i+"<br>"
        }
        return e>=18
    })
    if(ret){
        resultado.innerHTML +="OK <br>"
    }
})


//Filtro 
btnVerificar.addEventListener('click',(even)=>{
    resultado.innerHTML = "";
    const reto =  elementos_array.find((e,i)=>{
        if(e==pesquisa.value){
            resultado.innerHTML += "Valor pesquisado"+e+"na posicao "+i+'<br>';
            console.log(pesquisa.value)
            return e;  
        }
    })
  
})
// Achao do mouse 
btnVerificar.addEventListener('mouseover', () => {
    btnVerificar.style.backgroundColor = 'red';
 
  });
  btnVerificar.addEventListener('mouseout', () => {
    btnVerificar.style.backgroundColor = '#025';
 
  });

  //verifica e retorna  se todos os dados sao cumpre a condicao 
  btnVerificar.addEventListener('click',(even)=>{
    resultado.innerHTML = "";
    const ret =  elementos_array.every((e,i)=>{
        if(e<10){
            resultado.innerHTML +="Arrau nao conforme na posicao do "+ i+'<br>';
        }
        return e>=10;
    })
    if(ret){
        resultado.innerHTML+="OK <br>";
    }
    
})
//Acao que verifica o retorno da operacao passada. | Interpretação
btnVerificar.addEventListener('click',(even)=>{
    resultado.innerHTML = "";
    const ret =  elementos_array.reduce((retorno,ant,ind)=>{
        console.log(retorno,ant,ind);
        return ant;//retorno


    })
    
})