var num = [3,4,1,5,9]
var aux;

for (var controle = 0; controle < num.length / 2; controle++){
     aux = num [num.length-1-controle]
     num[num.length-1-controle] = num[controle]
     num[controle] = aux
}

console.log(num)