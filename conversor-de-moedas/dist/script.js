var valorEmDolarTexto = prompt("Qual o valor em dólar que você quer converter?")

var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolarNumero * 5.50
valorEmReal = valorEmReal.toFixed(2)

alert(valorEmDolarNumero + " em BRL dá " + valorEmReal)