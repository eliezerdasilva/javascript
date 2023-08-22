// Exemplos simples
const fundo = document.querySelector("#fundo")
let text = ["Teste1","Teste2"]
let text1 = ["Teste5","Teste6",text]

console.log(text1[2][1])

text.push("Text3");
//inseri antes da primeira posição 
text.unshift("Text4")
//Remove o primeiro elemento
text.shift();

text1.map((el)=>{
    let p = document.createElement("p");
    p.innerHTML =el;
    fundo.appendChild(p)
})

//
