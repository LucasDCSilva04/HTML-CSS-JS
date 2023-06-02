var btn = document.getElementById("btnCalcular")
btn.addEventListener("click",maiorMenor)

function maiorMenor(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = 0
    let result = document.getElementById("result")
    
    if(n1 < n2){
        n3 = n2
    }
    else{
        n3 = n1
    }
    result.innerText = n3
}