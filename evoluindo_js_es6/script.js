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

//spread operator realiza a junção

let primeiros = [1,2,3];

let numeros = [...primeiros, 4,5,6];
console.log(numeros);

//caso real reutilizando dados com spread
let humano = {
    nome3: 'Ester',
    idade: 23,
    cargo: 'Engenheira'
};

let novaPessoa = {
    ...humano,
    anoAtual: 2030,
    cidade: 'São José dos Campos'
};

console.log(novaPessoa);

/*-----------------------------*/

function cadastroPessoa(info){
    let novosDados = {
    ...info,
    codigo: 1,
    status: 'ativo'
    };

    return novosDados;
}

console.log(cadastroPessoa({
    nome: 'Mônica Torres',
    idade: 22,
    cargo: 'Desenvolvedora'
}));

/*-----------------------------*/

function pedidoComida(alimentos){
    let itensPedido = {
        ...alimentos,
        codigoPedido: 3056,
        statusPedido: 'Preparando',
        qntd: '4 itens'
    }

    return itensPedido;
};

console.log(pedidoComida({
    hamburguer: '1 xburguer',
    batataFrita: '1 batata grande com sal',
    coca: '1 copo sem gelo',
    sobremesa: '1 casquinha de chocolate'
}))

/*-----------------------------*/

//rest operator

function cadastrar(usuarios, ...novosUsuarios){
    let totalUsuarios = [
        ...usuarios,
        ...novosUsuarios
    ]

    return console.log(totalUsuarios);
}


let usuarios = ['Matheus', 'João'];

let novosUsuarios = cadastrar(usuarios, 'Pablo', 'Maria', 'Agatha');

/*-----------------------------*/

//operação em array
//map - percorre todos os itens e retorna algo
const lista = [5, 5, 2, 4, 2, 1];

const novaLista = lista.map(function(item){
    return item * 5;
});
console.log(novaLista)

//reduce - soma os itens da lista
const soma = lista.reduce(function(total, proximo){
    return total + proximo;
})
console.log(soma)

//achar item atraves do find
const procurarLista = lista.find(function(item){
    return item === 4
});
console.log(procurarLista);

/*-----------------------------*/

//funções anonimas - quando eu declaro uma função dentro de outra de forma natural
function adicionar(...numeros){
    let total = numeros.reduce((total, proximo)=>{
        let soma = total + proximo;
        return soma;
    })
    console.log(total)
}

console.log(adicionar(1,2,3,4,5));

/*-----------------------------*/

//includes
//endWith
//startsWith

//includes pode servir para verificação
let colegas = ['monica', 'guilherme', 'thiago', 'fabio', 'gustavo', 'bahij'];

let func = prompt('nome do func?');

if(colegas.includes(func)){
    document.write(`</br></br>${func} trabalha conosco </br></br>`)
}else{
    document.write(`</br></br>${func} NÃO trabalha conosco</br></br>`)
}

//startsWith verifica se a string esta começando com oq estou passando
let palavra = 'planeta';
console.log(palavra.startsWith('p')); //me retorna true ou false

//endWith verifica se a string esta terminando com oq estou passando
let frase = 'the life snake';
console.log(frase.endsWith('e'));

/*-----------------------------*/

//some - funciona como um boolean
let funcionario = ['pedro', 'carlos', 'antonio'];

console.log(funcionario.some(nome => nome === 'pietro'));

//every - todos precisam passar na condição
let estudantes = [
    {nome: 'Caio', idade: 20},
    {nome: 'Antonio', idade: 15},
    {nome: 'Maria', idade: 19}
]

if(estudantes.every(estudantes => estudantes.idade >= 18)){
    console.log('todos sao maiores de idade')
}else{
    console.log('alguem é de menor')
}