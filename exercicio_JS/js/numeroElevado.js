var nome = window.prompt("Qual o seu nome?");
var num1 = window.parseFloat(prompt(`${nome}, Digite um número`));
var num2 = window.parseFloat(prompt(`${nome}, Digite mais um número`));

var elevado = num1 ** num2
window.alert(`${nome}, O número ${num1} elevado a ${num2} é igual a ${elevado}`)