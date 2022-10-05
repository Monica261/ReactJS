//condicional idade
var idade = prompt('Sua idade?');
if(idade >= 18){
    alert(`${idade} - maior de idade`);
}else{
    alert(`${idade} - menor de idade`);
};

document.write(`${idade} - Idade do candidato`);

//funcoes
function entrar(){
    var area = document.getElementById('area');
    var texto = prompt('digite seu nome');

    if(texto == '' || texto == null){
    alert('Digite seu nome novamente');
    area.innerHTML = 'Bem vindo...';
    }else{
    area.innerHTML =(`${texto} seja bem vindo`);
    }
}

function entrada(idade, nome){
    var call = document.getElementById('retorno');
    var idade = prompt('digite sua idade');

    call.innerHTML = idade + ' ' + nome;
}

function cor(parametroCor){
    window.document.body.style.backgroundColor = parametroCor;
}
cor('teal');

//cor de fundo escolha do usuario
function cor(){
    const parametroCor = prompt('cor do background em ingles?');
    window.document.body.style.backgroundColor = parametroCor;
}

//array
var lista = ['melão', 'maça', 'manga', 'banana', 'uva'];
console.log(lista.length); //quantidade de itens na lista
console.log(lista[1]); //retorno somente o item que desejo
lista.concat('pera'); //incrementar a lista
lista.indexOf('manga'); //encontrar a posição do item no array
console.log(lista.join('/')); //juntar a lista com algo
lista.pop; //remove o ultimo item
lista.shift; //remove o primeiro