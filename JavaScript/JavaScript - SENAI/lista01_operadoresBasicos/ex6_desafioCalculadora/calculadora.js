var btnSomar = document.getElementById("btnSomar")
var btnSub = document.getElementById("btnSub")
var btnMult = document.getElementById("btnMult")
var btnDiv = document.getElementById("btnDiv")

btnSomar.addEventListener("click",somar)
btnSub.addEventListener("click",sub)
btnMult.addEventListener("click",mult)
btnDiv.addEventListener("click",div)

function somar(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    let somar = n1+n2
    let result = document.getElementById("result")
    result.innerText = somar
}

function sub(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    let somar = n1-n2
    let result = document.getElementById("result")
    result.innerText = somar
}

function mult(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    let somar = n1*n2
    let result = document.getElementById("result")
    result.innerText = somar
}

function div(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    let somar = n1/n2
    let result = document.getElementById("result")
    result.innerText = somar
}