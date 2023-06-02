var btn = document.getElementById("btnCalcular")
btn.addEventListener("click",calcularKm)

function calcularKm(){
    let n1 = Number(document.getElementById("n1").value)

    let Km = n1*1.609

    let result = document.getElementById("result")
    result.innerText = Km
}