/*
Exemplo 1

const nomes = ['Gabriel','Rafael','Victor','Renan','Aguinaldo','Samuel','Lucas','Gabriel','Jhonatan','Amabile','Camila']

//Quero que percorra cada nome e mostre no console!
for(cada_nome = 0; cada_nome <= 10; cada_nome++){
    console.log(nomes[cada_nome])
}

//Exemplo 2

for(contador = 0; contador <= 10; contador++){

    if((contador%2) == 0)
    console.log(contador)
}

*/

/*

 Array - VETOR (MATRIZ 1D) - Linha
 Array - VETOR (MATRIZ 2D) - Linha e Coluna
 Array - VETOR (MATRIZ 3D) - Linha, Coluna, Camada

 Armazena uma sequência de valores
 No mesmo Array armazenar diferentes valores
 SINTAXE: []

*/

/* Exemplo 3 - Declaração

const array = [1,2,3,4,5,6,7,8,9,10]

console.log (array)
*/

//exemplo 4

/*

const numeros = [1,2,3,4,5,6,7,8,9,10]

 Acessando array
    Forma 1: Acessar pela posição do ITEM
[0] -> trás o primeiro item do Array.
    Forma 2: acessar pelo valor do ITEM
["1"] -> Busca e retorna o valor com o nome.

console.log(numeros[])


*/

//iterar cada nome e mostrar o nome na tela.

//1° Atributo - lenght (comprimento) atualiza o maximo de itens dentro da variável

/*
const aluno = ['Lucas', 'Gabriel', 'Jonathan']
console.log(nomes.length)

for(aluno = 0; aluno <nomes.length; aluno++){
    console.log(nomes[aluno])
}
*/

// adicionar itens .push

//nomes.push('valor manual)    -> antes do for

//retirar itens

//nomes.pop('valor manual)   último                                 -> antes do for  
//nomes.splice('valor manual)  posição de início, quant. de itens   -> antes do for
//nomes.shift('valor manual)  primeiro                              -> antes do for

// separar string de number

/* if(typeof nomes[aluno] == 'string'){
        console.log('é aluno!')
}
    else{
        numeros.push(nomes[aluno])
        nomes.splice(aluno,1)
}

console.log(nomes)
console.log(numeros)

*/