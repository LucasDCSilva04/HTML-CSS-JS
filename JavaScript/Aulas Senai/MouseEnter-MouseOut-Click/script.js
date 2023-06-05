// Busca por marca (tag html)

//var p = window.document.getElementsByTagName('p')[0];
//window.document.write(p.innerText);

// Busca por id

//var p = window.document.getElementById("p1")
//window.document.write(p.innerHTML)

// Busca por Classe / Nome
//var p = window.document.getElementsByClassName("p1")
//window.document.write(p.innerHTML)

//Busca por seletor

//var p = window.document.querySelector("p#p1")
//window.document.write(p.innerText)

//eventos do dom
//eventos do mouse

/* 
mouseenter
mouseout
mousedow
mouseup
click
mousemove
*/

var box = window.document.getElementById("click")

box.addEventListener("mouseenter", entrar)
box.addEventListener("mouseout", sair)
box.addEventListener("click", clicar)

function entrar(){
    box.style.background="yellow"
}
function sair(){
    box.style.background="green"
    box.innerText="Clique em mim"
}
function clicar(){
    box.innerText="Clicou"
}