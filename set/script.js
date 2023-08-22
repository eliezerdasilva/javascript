const fundo = document.querySelector("#fundo");
let texto = new Set(["texto1","texto2","texto3"]);

texto.add("texto4");
texto.add("texto1");

console.log(texto)

texto.forEach((el)=>{
    fundo.innerHTML+= el+"<br>"
})
