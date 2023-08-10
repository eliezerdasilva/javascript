const caixaCursos=document.querySelector("#caixaCursos")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursos=["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]
const btnCursoSelecionado=document.getElementById("btnCursoSelecionado")
const btnRemoverCurso=document.getElementById("btnRemoverCurso")
const btnAdicionarNovoCursoAntes=document.getElementById("btnAdicionarNovoCursoAntes")
const btnAdicionarNovoCursoDepois=document.getElementById("btnAdicionarNovoCursoDepois")
const nomeCurso=document.getElementById("nomeCurso")

let indice = 0
let  divSelecionada;
 
const criarNovoCurso=(curso)=>{

    const novoElemento=document.createElement("div")

    novoElemento.setAttribute("id","c"+ indice)
    novoElemento.setAttribute("class","conhecimentos")
    novoElemento.innerHTML=curso

    const comandos=document.createElement("div")
    comandos.setAttribute("class","comandos")
    
    novoElemento.appendChild(comandos)

    indice++ ;
    return novoElemento;
};

cursos.map((el,chave)=>{
    const novoElemento=criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
});

const radioSelecionado=()=>{
    const todosRadios=[...document.querySelectorAll("input[type=radio]")]
    const radioSelecionado=todosRadios.filter((ele,ind,arr)=>{
        return ele.checked
    })
    return radioSelecionado[0]
};



btnRemoverCurso.addEventListener("click",(evt)=>{

    const divParaRemover = document.getElementById(divSelecionada);
    divParaRemover.remove();
   
});

btnAdicionarNovoCursoAntes.addEventListener("click",(evt)=>{
    const divParaRemover = document.getElementById(divSelecionada);
    try{
        
            const novoCurso=criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,divParaRemover)
       
    }catch(ex){
        alert("Selecione um curso")
    }
});

btnAdicionarNovoCursoDepois.addEventListener("click",(evt)=>{
    const divParaRemover = document.getElementById(divSelecionada);
    try{
       
        
            const novoCurso=criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,divParaRemover.nextSibling)
     
    }catch(ex){
        alert("Selecione um curso")
    }
});

const divs = document.querySelectorAll('.conhecimentos');

divs.forEach(function(div) {
    div.addEventListener('click', function() {
        pegarID(this);
        div.classList.toggle("mudou-cor");
    });
});


function pegarID(divClicada) {
    
    divSelecionada = divClicada.getAttribute("id");
    console.log("O ID da div clicada é: " +divSelecionada );
}

btnCursoSelecionado.addEventListener("click", (evt) => {
    const divSelc = document.getElementById(divSelecionada);
    try {
        if (divSelc) { // Verifica se a div selecionada existe
            
            alert(divSelc.textContent);
            divSelc.classList.toggle("mudou-cor");
           
         
        } else {
            alert("Selecione um curso");
        }
    } catch(ex) {
        console.error(ex);
    }
});
