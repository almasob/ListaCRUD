var nome = document.querySelector('#nm')
var n1 = document.querySelector('#n1')
var n2 = document.querySelector('#n2')
var n3 = document.querySelector('#n3')
var lista = document.getElementById('lista')

var btAd = document.querySelector('#btn-add')

btAd.addEventListener('click',()=>{

    var linha = document.createElement('p')
    linha.innerHTML = `${nome.value}    \   ${n1.value} ${n2.value} ${n3.value}`
    lista.appendChild(linha)
})