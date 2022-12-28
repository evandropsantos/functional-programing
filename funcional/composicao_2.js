function composicao(...fns) {
  return function(valor) {
    return fns.reduce(async (acc, fn) => {

      if (Promise.resolve(acc) === acc) {
        return fn(await acc);
      }

      return fn(acc);
    }, valor);
  }
}

//  Validando promise
// const p = new Promise(() => 'p');
// console.log(Promise.resolve(2) === 2) 
// console.log(Promise.resolve(p) === p) 

function gritar(texto) {
  return texto.toUpperCase()
}

function enfatizar(texto) {
  return `${texto}!!!!`
}

const umPoucoMenosExagerado = composicao(
  gritar,
  enfatizar
)

umPoucoMenosExagerado('Cuidado com o buraco!!!')
    .then(console.log)