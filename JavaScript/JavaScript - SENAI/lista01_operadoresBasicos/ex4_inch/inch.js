var btn = document.getElementById("btnCalcular")
btn.addEventListener("click",calcularDist)

function calcularDist(){
    let n1 = Number(document.getElementById("n1").value)

    let Dist = n1/25.4

    let result = document.getElementById("result")
    result.innerText = Dist + `"`
}