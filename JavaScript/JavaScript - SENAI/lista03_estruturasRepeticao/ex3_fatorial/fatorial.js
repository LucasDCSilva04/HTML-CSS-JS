var btn = document.getElementById("btnCalcular")
btn.addEventListener("click",fatorial)

function fatorial() {
    let n1 = Number(document.getElementById("n1").value)
    let f = n1
    let result = document.getElementById("result")

    while (n1 > 1){
        f = f *(n1-1)
        n1--
        result.innerText = "Resultado: " + f
    }
}   