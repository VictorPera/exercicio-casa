//atividade IMC
function puloLinha()
{
    document.write("<br><br>");
}

function mostra(frase)
{
    document.write(frase);
    puloLinha();
}
                     //x     y//
function calculaImc(peso, altura)
{
    return imc = peso / Math.round(altura * altura);
    //return pega o valor da função e devolve o resultado na variável
}

var nome = prompt(" Informe seu nome ");
var alturaInformada = prompt(nome + " Informe sua altura ");
var pesoInformada = prompt(nome + " Informe seu peso ");
//prompt seria um alert com return
var imc = calculaImc(pesoInformada, alturaInformada);

mostra(nome + " seu IMC é: " + imc);

if(imc < 18.5)
{
    mostra(nome + " você está abaixo do recomendado.");
}

if(imc > 35)
{
    mostra(nome + " você está acima do recomendado.");
}

if(imc >= 18.5 && imc <= 35)//"&&" significa "e" alguma coisa 
{   
    mostra(nome + " seu IMC está excelente!");   
}
//