//atalho para que seja retornado um número aleatório na array
function sorteia(){

    return Math.round(Math.random() * 10);
} 

function sorteiaNumeros(quantidades){
    //essa função recebe a quantidades de numeros que irão ser sorteados
    var numeros = [];

    var sorteados = 1;

    while(sorteados <= quantidades){

        var numeroAleatorio = sorteia();

            if(numeroAleatorio !== 0){
                //isso tira a chance de vir 0 nos numeros aleatórios
                var achou = false;
                //achou faz com que não tenha a repetição de elementos como numeros iguais
                for(var posicao = 0; posicao < numeros.length; posicao++){

                    if(numeros[posicao] == numeroAleatorio){
                        achou = true;
                        break;
                    }
                }

                if(achou == false){
                numeros.push(numeroAleatorio);//.push adiciona/empurra elementos na array
                sorteados++;
            }
        }
    }

        return numeros; 
}

var numeros = sorteiaNumeros(5);
console.log(numeros);


//esses colchetes são arrays que imprimem vários valores para a variável começando pela posição 0

//query pega tags html e coloca no js para ser utilizada, e dentro dos parênteses vai o nome da tag//indexa o input nop html para o Js
var inputbox = document.querySelector("input");

//da foco no input "inputbox"
inputbox.focus();

//essa função pega o valor de input e compara com o numero aleatório 
function verifica(){

    var achou = false;
    for(var posicao = 0; posicao < numeros.length; posicao++){
        //.length pega o valor da array e mostra para a repetição a quantidade de numeros restantes sem ter que mostrar na tela como alert

        if(inputbox.value == numeros[posicao]){

            alert("Acertou");
            achou = true;
            break;
        }
    }

    if (achou == false){

        alert("Errou");
    }

    inputbox.value = "";
    inputbox.focus();//focus da um foco no input q esta sendo selecionado
}

var btn = document.querySelector("button");
btn.onclick = verifica;//quando não é colocado parênteses numa função quer dizer q eu pego e guardo a função em outro lugar, no caso a função verifica ficou guardada em onclick, pois a intenção é pegar verifica e só chamar quando apertamos o botão  
 