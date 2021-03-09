// Script do exercício 1
function copa() {
    let text = document.querySelector('.text');
    text.innerHTML = 'Anos de copa: <br>';
    for(let i=1930; i<=2050; i=i+4) {
        text.innerHTML += i + '<br>';
    }
}

// Script do exercício 2
function rodar() {
    let n1 = document.querySelector('#n1').value;
    let n2 = document.querySelector('#n2').value;
    let resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    if(n1 > n2) {
        for(n2; n2<=n1; n2++) {
            resultado.innerHTML += n2 + '<br>'; 
        }
    } else if (n2 > n1) {
        for(n1; n1<=n2; n1++) {
            resultado.innerHTML += n1 + '<br>'; 
        }
    } else {
        resultado.innerHTML = n1;
    }
}

// Script do exercício 3
function promptFeio() {
    let c = 0;
    let nomes = document.querySelector('.nomes');
    while(c < 3) {
        nomes.innerHTML += prompt('Informe o ' + (c+1) + '° nome: ', 'Fer Ponte Preta') + '<br>';
        c++;
    }
}

// Script do exercício 4
//Gerando numero pra não ficar gerando um novo ao clicar no botão
var random = Math.random() * (1 - 60) + 60;
random = Math.floor(random);
var c = 0;

console.log(random);
function verificar() {

    var n = document.querySelector('#n').value;
    console.log(n);
    
    if(n == random) {
        alert("Acertou!");
        n.value = 0;
        c = 0;
    } else {
        alert("Tente outra vez!");
        c++;
    }

    if(c == 3) {
        alert("Acabaram as chances!");
    }
}