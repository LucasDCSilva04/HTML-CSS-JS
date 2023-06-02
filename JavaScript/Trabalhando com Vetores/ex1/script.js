    
    var btn = document.getElementById("btnCalcular")
	btn.addEventListener('click', calcular)

	function calcular(){
	
	let n1 = parseInt(document.getElementById("n1").value)
	let n2 = parseInt(document.getElementById("n2").value)

        if (n1 == n2){
            let result = document.getElementById("result")
            result.innerText = n1
        }
        else{
            let ctrl

            n1>n2? ctrl = n2 : ctrl = n1

            while (n1%ctrl != 0 && n2%ctrl == 0)
                ctrl--
            
            result.innerText = ctrl

        }
    }