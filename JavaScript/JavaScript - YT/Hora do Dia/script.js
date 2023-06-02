function carregar(){
    var txt = document.getElementById("texto")
    var img = document.getElementById("imagem")

    var corpo = document.getElementById("corpo")

    var agora = new Date()
    var horas = agora.getHours()
    var minutos = agora.getMinutes()
    txt.innerHTML = `Agora são ${horas}:${minutos} horas.`

    if(horas<6){
        img.innerHTML = '<img src="./imagens/noite.jpg"></img>'
        corpo.style.backgroundColor = 'rgb(70, 70, 70)'
    }else if(horas<12){
        img.innerHTML = '<img src="./imagens/manhã.jpg"></img>'
        corpo.style.backgroundColor = 'rgb(37, 164, 255)'
    }else if(horas<18){
        img.innerHTML = '<img src="./imagens/tarde.jpg"></img>'
        corpo.style.backgroundColor = 'rgb(255, 172, 48)'
    }else if(horas<=23){
        img.innerHTML = '<img src="./imagens/noite.jpg"></img>'
        corpo.style.backgroundColor = 'rgb(70, 70, 70)'
    }
}