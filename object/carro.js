class Carro {
    constructor(nome,portas){
        this.nome = nome;
        this.portas=portas;
        this.lidado = false;
        this.vel = 0;
        this.cor= undefined;
    }
    ligar=function(){
        this.ligado=true;
    }
    desligar=function(){
        this.lidado = false;
    }
    setCor = function(cor){
        this.cor = cor;
    }
}
//classe filha
class Militar extends Carro{
    constructor(nome,portas,blindagem,municao){
        super(nome,portas);
        this.blindagem = blindagem;
        this.municao = municao;
        this.cor = "verde";
        
    }
    atirar=function(){
        if(this.municao>0){
            this.municao--;
        }
    }
}

const carro1 = new Militar("Norma",3,100,50)
carro1.ligar();
console.log(carro1.nome, carro1.municao)


//Object => Json
const s_json =JSON.stringify(carro1);
console.log(s_json)


//Json => Objeto
const objeto = '{"nome":"Norma","portas":3,"lidado":false,"vel":0,"cor":"verde","blindagem":100,"municao":50,"ligado":true}';
const ob = JSON.parse(objeto);
console.log(ob)