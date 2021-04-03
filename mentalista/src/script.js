// alert - document.write - console.log
var numeroSecreto = parseInt(Math.random() * 15)
var tentativas = 5
var chute = 0

while (tentativas > 0) {
  chute = parseInt(prompt("Digite um número entre 0 e 15"))

  if (numeroSecreto == chute) {
    alert("Acertou! O número secreto era " + numeroSecreto + " mesmo!")
    break
  } else if (chute > numeroSecreto) {
    tentativas -= 1
    if (tentativas >= 1) {
    alert("O número secreto é menor. Você tem mais " + tentativas + " tentativa(s)!")
    }
  } else if (chute < numeroSecreto) {
    tentativas -= 1
    if (tentativas >= 1) {
      alert("O número secreto é maior. Você tem mais " + tentativas + " tentativa(s)!")
    }
  }
}

if (chute != numeroSecreto) {
  alert("Suas tentativas acabaram! O número secreto era " + numeroSecreto)
}