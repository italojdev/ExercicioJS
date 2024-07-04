var nome
var nota1
var nota2
var nota3
var media

nome = window.prompt("Qual o seu nome?")
nota1 = window.parseFloat(prompt(`${nome}, qual foi sua primeira nota`))
nota2 = window.parseFloat(prompt(`${nome}, qual foi sua segunda nota`))
nota3 = window.parseFloat(prompt(`${nome}, qual foi sua terceira nota`))

media = (nota1 + nota2 + nota3)/3;

if(media >= 60)
{
    window.alert(`${nome} você foi aprovado`)
}
else{
    window.alert(`${nome} você foi reprovado`)
}

