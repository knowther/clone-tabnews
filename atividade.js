const marizBidimensional = [];

// loop que vai iterar pra cara número base que será multiplicado, como definido na questão os números: 2,3,4,5
for (let i = 0; i < 4; i++) {
  const linha = [];
  // aqui faz a soma pra cada iteração do loop do número + 2 ex: 0+ 2 = 2, 0 + 3 = 3, 0 + 4 = 0, 0 + 5 = 5
  const numero = i + 2;

  // aqui eu defino outro loop que faz a tabuada do número atual do loop até o 5, fazendo assim ser possível pegar os múltiplos
  for (let m = 1; m <= 5; m++) {
    // aqui eu multiplico o número atual do primeiro loop com o número atual do segundo, iniciando em 1 e indo até 5, fazendo assim a tabuada de múltiplos;
    // esse número da iteração atual é adicionado em um novo array/matriz que comportará todos os números que são múltiplos de 1 até 5
    linha.push(numero * m);
  }

  // aqui é o método que é chamado no fim de cada iteração do loop de números base que adicionará toda tabuada do número de 1 até 5 em uma linha do array de matriz bidimensional
  marizBidimensional.push(linha);
}

//aqui é printado o array bidimensional
console.log(marizBidimensional);
