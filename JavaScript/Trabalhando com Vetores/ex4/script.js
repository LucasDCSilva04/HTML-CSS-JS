var btn = document.getElementById("btnCalcular")
btn.addEventListener('click', executar)

var result = document.getElementById('result')

function executar(){
    let n1 = parseInt(document.getElementById("n1").value)
    let n2 = parseInt(document.getElementById("n2").value)
    
    if (n1>n2){
        result.innerText = mdc(n1, n2)
    }
    else{
        result.innerText = mdc(n2, n1)
    }
}

function mdc(maior, menor){
    if(menor==0)
        return maior

    return mdc(menor,maior%menor)
}