//trabalhando com loops
x = 0;
while(x < 10){
    document.write(`o valor do x é: ${x} <br />`);

    x++;
}

document.write('<br />');

//for
for(a = 0; a < 10; a++){
    document.write(`utilizando o for em loop: ${a} <br />`);
}

document.write('<br />');

//forEach
const frutas = ['melao', 'manga', 'maca', 'banana'];

frutas.forEach((index, item)=>{
    document.write('percorrendo todas as frutas do array com forEach ' + index + ' - ' + item +'<br />');
})

const ganhadores = ['João', 'Pedro', 'Felipe', 'Bianca', 'Gabriel', 'Natalia']

ganhadores.forEach((item)=>{
    console.log(`O e-mail será enviado para: ${item}`)
})


//switch
function pedir(){
    document.write('1 - azul | 2 - rosa <br/> 3- preto | 4 - roxo')

    x = prompt('oq deseja saber?');

    switch(x){
        case '1':
            alert('O escolhido foi azul');
        break;
        case '2':
            alert('O escolhido foi rosa');
        break;
        case '3':
            alert('O escolhido foi preto');
        break;
        case '4':
            alert('O escolhido foi roxo');
        break;
        default:
            alert('nenhuma das opções');
        break;
    }
}

//temporizacao
function acao(){
   console.log('Executando...');
}

var timer = setInterval(acao, 3000);

function stop(){
    console.log(clearInterval(timer) + ' parou');
}

//webStorage
/*localStorage.nome = 'Mônica';

console.log(nome)*/

//uso de variavel em string
let nome = prompt('Qual o seu nome?');
alert(`Seja bem vinda ${nome}`)

//desconstrucao de objts e arrays
const pessoa = {
    nome2: 'Mônica',
    sobrenome: 'Torres',
    idade: 22,
    profissao: 'desenvolvedora'
};

console.log(pessoa.nome2)

let {sobrenome} = pessoa;
console.log(sobrenome)

let nomes = ['Mônica', 'Pedro', 'Andre'];

let {1:primeironome} = nomes; //posso definir a posição que eu desejo pegar

console.log(primeironome)