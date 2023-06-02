var btn = document.getElementById("btnCalcular")
btn.addEventListener("click",calcularTemp)

function calcularTemp(){
    let n1 = Number(document.getElementById("n1").value)

    let temp = (n1*(9/5))+32

    let result = document.getElementById("result")
    result.innerText = temp

}