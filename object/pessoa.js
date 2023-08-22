class Pessoa{
    constructor(nome,tipo){
        this.nome = nome;
        if(tipo==1){
            this.tipo= "Verde"
        }else{
            this.tipo = "Amarelo"
        }
    }
    indexOf(){
        console.log("nome "+ this.nome)
        console.log("tipo "+this.tipo)
    }
    getNome(){
        return this.nome;
    }
    getTipo(){
        return this.tipo;
    }
    setNome(nome){
        return this.nome = nome;
    }
    setTipo(tipo){
        return this.tipo = tipo;
    }
}
let p1 = new Pessoa("TEste",1 )
p1.indexOf();
console.log(p1.getNome());
p1.setNome( "teste2") ;
p1.indexOf();