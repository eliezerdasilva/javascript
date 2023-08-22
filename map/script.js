const fundo = document.querySelector("#fundo")

let map = new Map();

map.set(1, "teste");
map.set(2, "teste2");
map.set(3, "teste3");
map.set("teste", "teste4"); 
console.log(map)
//Has verifica se existe na colecao map
if(map.has(1))
{
    fundo.innerHTML = "A Chave existe na coleção "+map.size;
}else{
    fundo.innerHTML = " Não existe essa chave";
}
//puxa uma chava e mostra o valor
//fundo.innerHTML=map.get("teste");

map.forEach((el)=>{
    console.log(el)
})

map.delete("teste")


map.forEach((el)=>{
    console.log(el)
})