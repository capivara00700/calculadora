function numero(num){
    let numero = document.getElementById('resultados').value
    document.getElementById('resultados').value = numero + num
}
function clean(){
    document.getElementById('resultados').value = null
}
function calcular(){
    let numero = document.getElementById('resultados').value
    document.getElementById('resultados').value = eval(numero)
}
function voltar(){
    let resultado = document.getElementById('resultados').value
    document.getElementById('resultados').value = resultado.substring(0, resultado.length -1)
}