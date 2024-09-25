function verificarLetraA(textoDigitado) {
  const expressaoRegular = /a/gi;
  const ocorrencias = [...textoDigitado.matchAll(expressaoRegular)];

  alert(
    `O texto '${textoDigitado}' possui ${ocorrencias.length} letra(s) 'a' (contando maiúsculas e minúsculas).'`,
  );
}

textoPrompt = prompt('Digite qualquer coisa.');
verificarLetraA(textoPrompt);
