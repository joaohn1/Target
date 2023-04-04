// 2
function sequencia(n) {
  let a = 0;
  let b = 1;
  let sequence = [a, b];
  while (b < n) {
    [a, b] = [b, a + b];
    sequence.push(b);
  }
  return sequence;
}

function verifica(n) {
  let sequence = sequencia(n);
  if (sequence.includes(n)) {
    console.log(`${n} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${n} não pertence à sequência de Fibonacci.`);
  }
}


verifica(3);
verifica(1); 



// 3
const faturamentoMensal = {
    "2022-04-01": 22174.1664,
    "2022-04-02": 24537.6698,
    "2022-04-03": 26139.6134,
    "2022-04-04": 0,
    "2022-04-05": 0,
    "2022-04-06": 26742.6612,
    "2022-04-07": 0,
    "2022-04-08": 42889.2258,
    "2022-04-09": 46251.174,
    "2022-04-10": 11191.4722,
    "2022-04-11": 0,
    "2022-04-12": 0,
    "2022-04-13": 3847.4823,
    "2022-04-14": 373.7838,
    "2022-04-15": 2659.7563,
    "2022-04-16": 48924.2448,
    "2022-04-17": 18419.2614,
    "2022-04-18": 0,
    "2022-04-19": 0,
    "2022-04-20": 35240.1826,
    "2022-04-21": 43829.1667,
    "2022-04-22": 18235.6852,
    "2022-04-23": 4355.0662,
    "2022-04-24": 13327.1025,
    "2022-04-25": 0,
    "2022-04-26": 0,
    "2022-04-27": 25681.8318,
    "2022-04-28": 1718.1221,
    "2022-04-29": 13220.495,
    "2022-04-30": 8414.61
  };
  
  const valores = Object.values(faturamentoMensal);
  const menorValor = Math.min(...valores);
  const maiorValor = Math.max(...valores);
  const diasComFaturamento = valores.filter(valor => valor > 0);
  const mediaMensal = diasComFaturamento.reduce((total, valor) => total + valor) / diasComFaturamento.length;
  const AcimaDaMedia = diasComFaturamento.filter(valor => valor > mediaMensal).length;
  
  console.log(`Menor valor de faturamento: ${menorValor}`);
  console.log(`Maior valor de faturamento: ${maiorValor}`);
  console.log(`Número de dias com faturamento acima da média mensal: ${AcimaDaMedia}`);


// 4  
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const totalFaturamento = Object.values(faturamento).reduce((acc, cur) => acc + cur, 0);

const percentual = {};
for (let estado in faturamento) {
    percentual[estado] = (faturamento[estado] / totalFaturamento) * 100;
}

for (let estado in percentual) {
    console.log(`${estado}: ${percentual[estado].toFixed(2)}%`);
}
 
  
// 5 
function MeuReverse(str) {
let novaString = '';
for (let i = str.length - 1; i >= 0; i--) {
    novaString += str[i];
}
return novaString;
}

const String = 't@rge!';
console.log(MeuReverse(String));
  
  
