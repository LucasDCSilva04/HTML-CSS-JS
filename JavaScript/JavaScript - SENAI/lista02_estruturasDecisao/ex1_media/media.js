var btn = document.getElementById("btnCalcular")
btn.addEventListener("click",calcularMedia)

function calcularMedia(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    let media = ((n1+n2)/2)
    
    let result = document.getElementById("result")
    result.innerText = media

    if (media <= 4){
        alert("Reprovado")
    }
    else{
        alert("Aprovado")
    }
    
}
