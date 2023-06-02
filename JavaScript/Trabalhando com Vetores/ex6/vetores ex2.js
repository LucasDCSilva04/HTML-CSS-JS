var vetor = [1,51,2,3,4,6,334,23,43,12]

console.log(pesquisar(1))
//pesquisar um número e se ele existir retornar sua posição, caso contrário exibir "Número não encontrado"

function pesquisar (n){
     for(let i = 0; i < vetor.length; i++){
          if (vetor[i]==n){
               return `Número ${n} encontrado na posição ${i}`
          }
     }
     return `Número ${n} não encontrado`
}