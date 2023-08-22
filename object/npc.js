class Npc{
    static alerta = false;
    constructor(energia){
        this.energia = energia;
        this.alerta= false;
    }
    info = function(){
        console.log(`Energia : ${this.energia}`)
        console.log(`Alerta : ${Npc.alerta}`)
    }
    static setAlerta=function(){
        Npc.alerta = true;
    }
    

}
//Npc.alerta=true
const npc = new Npc(10);
npc.info();
Npc.setAlerta();
npc.info();