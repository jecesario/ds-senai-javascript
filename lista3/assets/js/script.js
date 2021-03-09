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