document.write("olá pessoas <br> haha <br>" + (10 + 10 + 20));
document.write("<br>" + (15 + 15 + 30)/3 );//contas são feitas sem áspas, e quando fazemos soma de texto ("10" + "20") o resultado é "1020" pois o js faz concatenação do texto e tbm quando temos "texto" com número ocorre a concatenação. 
document.write("<br>")
document.write("eu acertei " + 15/50*100 + "% das questões!! <br><br>");//aparentemente temos que colocar um "+" para conectar um número em um texto.

var ano = 2022;//var server para vairar coisas no código facilitar a vida //sinal de "=" tem nome de recebe

document.write("Felipe tem " + (ano-1997) + " anos <br>");
document.write("Tiago tem " + (ano-1998) + " anos <br>");

ano = 2019;//novo valor da variável não precisa usar "var"
document.write("Pedro tem " + (ano-1985) + " anos <br>");
document.write("Matheus tem " + (ano-1960) + " anos <br>");

var n = 5;
document.write("O resultado da fórmula é : " + n * (10 / 20) + "<br><br>" );

//exercício
document.write("5 x 1 = " + 5 * 1 + "<br>");
document.write("5 x 2 = " + 5 * 2 + "<br>");
document.write("5 x 3 = " + 5 * 3 + "<br>");
document.write("5 x 4 = " + 5 * 4 + "<br>");
document.write("5 x 5 = " + 5 * 5 + "<br>");
document.write("5 x 6 = " + 5 * 6 + "<br>");
document.write("5 x 7 = " + 5 * 7 + "<br>");
document.write("5 x 8 = " + 5 * 8 + "<br>");
document.write("5 x 9 = " + 5 * 9 + "<br>");
document.write("5 x 10 = " + 5 * 10 + "<br><br>");

var tabuada = 8;
document.write(tabuada + " x 1 = " + (tabuada) * 1 + "<br>");
document.write(tabuada + " x 2 = " + (tabuada) * 2 + "<br>");
document.write(tabuada + " x 3 = " + (tabuada) * 3 + "<br>");
document.write(tabuada + " x 4 = " + (tabuada) * 4 + "<br>");
document.write(tabuada + " x 5 = " + (tabuada) * 5 + "<br>");
document.write(tabuada + " x 6 = " + (tabuada) * 6 + "<br>");
document.write(tabuada + " x 7 = " + (tabuada) * 7 + "<br>");
document.write(tabuada + " x 8 = " + (tabuada) * 8 + "<br>");
document.write(tabuada + " x 9 = " + (tabuada) * 9 + "<br>");
document.write(tabuada + " x 10 = " + (tabuada) * 10 + "<br><br>");
//

//exercício
var idadeMatheus = 31;
var idadePedro = 35;
var idadeVictor = 43;

var media = (idadeMatheus + idadePedro + idadeVictor)/5;
document.write("A média das idades é: " + Math.round(media) + "<br>"); //"Math.round" arredonda valores

var nome = "Matheus";
document.write("A idade de " + nome + " é: " + idadeMatheus + "<br><br>");
//

//exercício 
var nome = "Linda, Guaraciara e Pérola ";

var idadeLinda = 12;
var idadeGuaraciara = 15;
var idadePerola = 13;

var media = (idadeLinda + idadeGuaraciara + idadePerola)/3;

document.write("A média das idades de " + nome + " é " + Math.round(media) + "<br><br>");
//

//exercício 
var tanque = 40;
var caminhoComGasolina = 480;
var consumoComGasolina = caminhoComGasolina/tanque;

document.write("Consumo com gasolina é de: " + consumoComGasolina + " km/L <br>");

var caminhoComAlcool = 300;
var consumoComAlcool = caminhoComAlcool/tanque;

document.write("Consumo com Álcool é de: " + consumoComAlcool + " km/L");
//

var puloLinha = ("<br>") //exemplo de que a tag <br> serve para ser var

document.write("testetesteteste" + puloLinha)
document.write("testetesteteste" + puloLinha)
document.write("testetesteteste" + puloLinha)
document.write("testetesteteste" + puloLinha)
document.write("testetesteteste" + puloLinha)
document.write("testetesteteste" + puloLinha)
document.write("testetesteteste" + puloLinha)