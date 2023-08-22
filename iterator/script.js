const val = [10,9,8,5,15,16,7];
const it_val = val[Symbol.iterator]()

console.log(it_val)
console.log(it_val.next().value)
const done = it_val.next()
console.log(done.done)

const text = "Teste";
const it_tex = text[Symbol.iterator]();
console.log(it_tex)
console.log(it_tex.next())
console.log(it_tex.next())
console.log(it_tex.next())
console.log(it_tex.next())
console.log(it_tex.next())
const retorno = it_tex.next()
console.log(retorno.done)
