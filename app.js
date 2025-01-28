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
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute = prompt('Tente acertar o número: ');

if (chute == numeroSecreto){
    alert('Você acertou!')
}
else {
    alert('Você errou!')
}