var memoria = []
var numbers = '';
var res = 0
var sinal_soma = 0
var sinal_sub = 0
var sinal_mult = 0
var sinal_div = 0
function addNumber(num) {
	numbers+= num;
	console.log(numbers);
}
function soma() {
	sinal_soma+=1
	numbers = parseInt(numbers);
	memoria.push(numbers, '+');
	numbers = '';
}
function sub() {
	sinal_sub+=1
	numbers = parseInt(numbers);
	memoria.push(numbers, '-');
	numbers = '';
}
function mult() {
	sinal_mult+=1
	numbers = parseInt(numbers);
	memoria.push(numbers, '*');
	numbers = '';
}
function div() {
	sinal_div+=1
	numbers = parseInt(numbers);
	memoria.push(numbers, '/');
	numbers = '';
}
function calcular() {
	var j = 0
	var total_sinais = sinal_soma + sinal_sub + sinal_mult + sinal_div;
	numbers = parseInt(numbers);
	memoria.push(numbers);
	while (j < total_sinais) {
		for (i = 0; i < memoria.length; i++) {
			if (memoria[i] == '/' || memoria[i] == '*' || memoria[i] == '+' || memoria[i] == '-') {
				if (memoria[i] == '/' && sinal_div > 0) {
					res = memoria[i - 1] / memoria[i + 1];
					memoria.splice(i -1, 3, res);
					sinal_div-=1;
					console.log(res);
					console.log(memoria);
					break;
				} else if(memoria [i] == '*' && sinal_mult > 0 ) {
					res = memoria[i - 1] * memoria[i + 1];
					memoria.splice(i -1, 3, res);
					sinal_mult-=1;
					console.log(res);
					console.log(memoria);
					break;
				} else if (sinal_div == 0 && sinal_mult == 0 && memoria [i] == '-' && sinal_sub > 0) {
					res = memoria[i - 1] - memoria[i + 1];
					memoria.splice(i -1, 3, res);
					sinal_sub-=1;
					console.log(res);
					console.log(memoria);
					break;
				} else if (sinal_div == 0 && sinal_mult == 0 && memoria [i] == '+' && sinal_soma > 0) {
					res = memoria[i - 1] + memoria[i + 1];
					memoria.splice(i -1, 3, res);
					sinal_soma-=1;
					console.log(res);
					console.log(memoria);
					break;
				}
			}
		} j+=1
	}
	document.getElementById('display').innerHTML = res;
}