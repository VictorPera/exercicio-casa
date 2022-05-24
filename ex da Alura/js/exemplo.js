function pulaLinha()
{
    document.write("<br><br>");
}
 
function mostra(text)
{
    document.write(text);
    pulaLinha();
}

function carteira()

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");
var semCarteiraMaiorDeIdade = ("")
var comCarteiraMaiorDeIdade = ("")   

if (idade >= 18){
    temCarteira;
}


if (idade < 18){
    mostra("não pode dirigir");
}

