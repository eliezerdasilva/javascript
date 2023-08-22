const Produto=function(name){
    this.name = name;
    this.price = 100;

}
const pr = new Produto("CEbola");
Produto.prototype.peso = 5.3;
Produto.prototype.vender=function(){
        if(this.price >= 100){
            this.price = 0;
        }
}
pr.vender();
console.log(pr)