function puloLinha(){
    document.write("<br><br>");
}

function mostra(frase){
    document.write(frase);
    puloLinha();
}
//prompt sempre retorna como texto o que lhe for escrito e faz contas matemáticas com "* e /"//usando o parseInt podemos traduzir strings do prompt por exemplo em números //parseInt é uma função //
alert("Placares do ano");

var vitorias = parseInt(prompt("Entre com o números de vitórias: "));

var empates = parseInt(prompt("Entre com o números de empates: "));

var pontos = vitorias * 3 + empates;

mostra("O time obteve " + pontos + " pontos.");

if (pontos > 30){ // ">" significa maior que
    mostra("Seu time está melhor do que o ano passado. ");
    mostra("Seu time é FLAMENGOOO");
} 

if (pontos < 30){ // "<" significa menor que 

    mostra("Seu time está pior do que o ano passado. ");
    mostra("Seu time é São Paulo");
}

if (pontos == 30){ //"==" serve para atribuir igualdade

    mostra("Seu time está igual ao ano passado. ");
    mostra("Seu time é Corinthians");
}
//"if" só mostra os resultados dos pontos se receber true da sentença 

mostra("FIM!")