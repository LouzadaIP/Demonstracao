function calcular(n1, n2, operador){
    if(operador === '+'){
    return n1 + n2
    }
    if(operador === '-')
    return n1 - n2
}
console.log(calcular(5,5, -))

function calculadora(n1, n2, operador){
    let soma = 0
    for(n1; n1 < n2; n1++){
    soma += n1
}
return soma
}
console.log(calculadora(1,10))