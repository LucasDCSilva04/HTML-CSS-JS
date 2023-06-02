var btn = document.getElementById("btnCalcular")
btn.addEventListener("click",multiplo)

function multiplo(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let result = document.getElementById("result")

    if(n1%n2 == 0){
        result.innerText = "É multiplo"
    }
    else{
        result.innerText = "Não é multiplo"
    }
}