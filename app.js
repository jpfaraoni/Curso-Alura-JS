// alert('Boas vindas ao nosso site!');
//  let nome = "Lua";
// // let idade = 25;
// let numeroDeVendas = 50;
// let saldoDisponivel = 1000;
// let mensagemDeErro = 'Erro! Preencha todos os campos';

// alert(mensagemDeErro);

// let nome = prompt('Nome: ')
// let idade = prompt('Idade: ')

// if (idade >= 18) {
//     alert('Pode tirar a habilitação!');
// }
// else {
//     alert('Não pode tirar a habilitação!');
// }
alert('Boas vinda ao jogo do número secreto!')
let numeroSecreto = 10;
console.log(numeroSecreto)
let chute = prompt('Tente acertar o número: ');

while (chute != numeroSecreto){
    if (chute < numeroSecreto) {
        alert('Seu número é menor que o número secreto.')
    }
    else if (chute > numeroSecreto) {
        alert('Seu número é maior que o número secreto.')
    }
    chute = prompt('Tente acertar o número: ');}
alert(`Você acertou o número secreto ${numeroSecreto}`)
