const pessoa = {
  nome: 'Maria',
  altura: 1.76,
  cidade: 'São Paulo',
  end: {
    rua: 'Jamal'
  }
}

// const pessoa = Object.freeze({
//   nome: 'Maria',
//   altura: 1.76,
//   cidade: 'São Paulo',
//   end: Object.freeze({
//     rua: 'Jamal'
//   })
// })


const outraPessoa = pessoa;

// Passagem por referencia
function alteraPessoa(pessoa) {
  const novaPessoa = { ...pessoa }
  novaPessoa.nome = 'João';
  novaPessoa.end.rua = 'ABC'

  return novaPessoa
}

const novaPessoa = alteraPessoa(pessoa);

console.log(pessoa);
console.log(novaPessoa);

let a = 3;
let b = a // atribuicao referencia (copia)

a++

console.log(a)
console.log(b)