var primeiroValor = parseInt(prompt("Digite o primeiro valor:"));
var segundoValor = parseInt(prompt("Digite o segundo valor:"));
var operacao = prompt("Digite a operação que você quer fazer:");
var op = "";
var resultado = 0;
var checkop = true;

if (operacao == "*") {
  resultado = primeiroValor * segundoValor;
  op = " x ";
} else if (operacao == "+") {
  resultado = primeiroValor + segundoValor;
  op = " + ";
} else if (operacao == "-") {
  resultado = primeiroValor - segundoValor;
  op = " - ";
} else if (operacao == "/") {
  resultado = primeiroValor / segundoValor;
  op = " / ";
} else if (operacao == "POWER"){
  resultado = primeiroValor ** segundoValor;
  op = " ^ ";
} else {
  checkop = false;
}

if (checkop) {
  document.write(
    "<h2>" + primeiroValor + op + segundoValor + " = " + resultado + "</h2>"
  );
} else {
  document.write("<h2>DEU RUIM</h2>");
}