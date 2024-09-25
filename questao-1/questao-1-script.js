function calcularFibonacci(numeroDigitado) {
  let sequenciaFibonacci = [0, 1];
  let numeroLimite = 34;
  let ultimoIndice = null;
  let novoElemento = null;

  if (
    parseInt(numeroDigitado) !== NaN &&
    parseInt(numeroDigitado) > numeroLimite
  ) {
    numeroLimite = parseInt(numeroDigitado);
  }

  do {
    ultimoIndice = sequenciaFibonacci.length - 1;
    novoElemento =
      sequenciaFibonacci[ultimoIndice] + sequenciaFibonacci[ultimoIndice - 1];
    sequenciaFibonacci.push(novoElemento);
  } while (novoElemento < numeroLimite);

  mensagem = sequenciaFibonacci.includes(parseInt(numeroDigitado))
    ? `O número ${numeroDigitado} pertence à sequência Fibonacci.`
    : `O número ${numeroDigitado} não pertence à sequência Fibonacci.`;

  alert(`Sequência Fibonacci: ${sequenciaFibonacci}. ${mensagem}`);
}

let numeroPrompt = prompt('Digite um número.');
calcularFibonacci(numeroPrompt);
