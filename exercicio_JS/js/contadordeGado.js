
var numeros = []
var input
var maior = 0
var menor = 0

do{
    input = window.parseFloat(prompt("Diga o peso do seu gado"))
    if(input !== 0){
        numeros.push(input)
        menor = input
    }
}
while(input !== 0)

for(var i = 0 ; i < numeros.length ; i++)
{
    if(numeros[i] > maior){
        maior = numeros[i]
    }
    if(numeros[i] < menor){
        menor = numeros[i]
    }
}

var soma = 0
for(var j = 0 ; j < numeros.length; j++){
    soma += numeros[j]
}
var media = soma / numeros.length

window.alert(`O seu maior gado pesa ${maior}`)
window.alert(`o seu menor gado pesa ${menor}`)
window.alert(`A media de peso do seu gado é ${media}`)

