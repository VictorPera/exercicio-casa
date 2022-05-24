function pulaLinha(){
    document.write("<br>");
}
function mostra(text){
    document.write(text);
    pulaLinha();
}

var numeroPensado = Math.round(Math.random() * 10);
console.log(numeroPensado);//isso ajuda a testar o código,fazendo com que apareça a resposta no console
var chute = parseInt(prompt("faça seu chute!"));

if (chute == numeroPensado){
    mostra("Você acertou!");
}   else{
    mostra("Você errou!");
    mostra("O número pensado foi: " + numeroPensado);
}//"!=" significa diferente

