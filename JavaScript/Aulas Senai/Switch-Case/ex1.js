
var data = new Date()
var dia = data.getDay()
var hora = data.getHours()
var min = data.getMinutes()

switch(hora){
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("É madrugada")
        break

    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        console.log("Bom Dia")
        break

    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        console.log("Boa Tarde")
        break

    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        console.log("Boa Noite")
        break

    default:
        console.log("error")
        break
}

switch(dia){
    case 0:
    console.log("Hoje é Domingo-Feira")
    break

    case 1:
    console.log("Hoje é Segunda-Feira")
    break

    case 2:
    console.log("Hoje é Terça")
    break

    case 3:
    console.log("Hoje é Quarta-Feira")
    break

    case 4:
    console.log("Hoje é Quinta-Feira")
    break

    case 5:
    console.log("Hoje é Sexta-Feira")
    break

    case 6:
    console.log("Hoje é Sabado")
    break
}

console.log(`${hora}:${min}`);


/* outra forma de corrigir a hora
var dataManual = (new Date()).toLocaleTimeString('pt-BR', {timeZone: 'America/Sao_Paulo'})

console.log(dataManual)
*/

