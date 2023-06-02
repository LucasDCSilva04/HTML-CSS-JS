var btn = document.getElementById("btnCalcular")
btn.addEventListener("click",contagem)

function contagem(){
    let n1 = Number.parseInt(document.getElementById("n1").value)
    let resultado = "Resultado: "

    while(n1>0){
        resultado+= n1 + ', '
        n1--
    }
    document.getElementById("result").innerText = resultado

    while(n1<0){
        resultado+= n1 + ', '
        n1++
    }
    document.getElementById("result").innerText = resultado
}