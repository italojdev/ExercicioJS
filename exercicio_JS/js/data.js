var nome = window.prompt("Qual o seu nome?");
var dia = window.parseFloat(prompt(`${nome}, Digite um dia`));
var mes = window.parseFloat(prompt(`${nome}, Digite um mês`));

if(nome == "Celso Portiolli" && dia  == 11 && mes == 9){
    window.alert(" Celso Portiolli não tem nada a ver com o 11 de Setembro");
}
else if( dia == 4 && mes == 7 && nome === "Ítalo"){
   window.alert("Faça a prova com atenção");
}