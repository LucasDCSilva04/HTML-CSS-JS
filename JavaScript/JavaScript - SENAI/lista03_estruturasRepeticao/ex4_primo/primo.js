var btn = document.getElementById("btnCalcular")
btn.addEventListener("click", primo)

function primo(){
    let n1 = Number.parseInt(document.getElementById("n1").value)
    let primo = "é primo"

    for ( var i=2; i < n1; i++){
        let rest = (n1%i)
            if(rest === 0){
                primo = "não é primo"
                break;
            }
    }
    document.getElementById("result").innerHTML = "Este número " + primo
}