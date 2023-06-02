var btn = document.getElementById("btnCalcular")
btn.addEventListener("click",imparPar)

function imparPar(){
    let n1 = Number(document.getElementById("n1").value)
    let result = document.getElementById("result")

    if(n1%2 == 0){
        result.innerText = "Par"
    }
    else{
        result.innerText = "Ímpar"
    }
}