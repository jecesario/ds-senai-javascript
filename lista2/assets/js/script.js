// Função do exercício 1
function alterarImagem() {
    let imagem = document.querySelector('#imagem');
    imagem.setAttribute('src', 'assets/img/pug2.jpg');
}

// Função do Exercício 2
function pagar() {
    let valorCompra = parseFloat(document.querySelector('#valorCompra').value);
    let metodoPagamento = document.querySelector('#metodoPagamento').value;
    let resultado = document.querySelector('#resultado');
    switch(metodoPagamento) {
        case '1':
            resultado.value = valorCompra - (valorCompra * 0.05);
            break;
        case '2':
            resultado.value = valorCompra + (valorCompra * 0.08);
            break;
        case '3':
        resultado.value = valorCompra - (valorCompra * 0.10);
        break;
        case '4':
            resultado.value = valorCompra - (valorCompra * 0.02);
            break;
        default:
            resultado.value = 0;
            break;
    }
}