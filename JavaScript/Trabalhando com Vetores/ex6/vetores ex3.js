var vetor = [1,6,51,2,3,4,6,334,23,43,12,6]

console.log(pesquisar(6))
//pesquisar um número e se ele existir retornar sua posição, caso contrário exibir "Número não encontrado"

function pesquisar (n){
     let aux = []
     for(let i = 0; i < vetor.length; i++){
          if (vetor[i]==n)
               aux.push(i)
     }
     if(aux.length==0)
          return `O número ${n} não foi encontrado`
     return `O número ${n} foi encontrado na(s) posição(ões) ${aux}`
}