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

    if(metodoPagamento == '1') {
        resultado.value = valorCompra - (valorCompra * 0.05);
    } else if (metodoPagamento == '2') {
        resultado.value = valorCompra + (valorCompra * 0.08);
    } else if (metodoPagamento == '3') {
        resultado.value = valorCompra - (valorCompra * 0.10);
    } else if (metodoPagamento == '4') {
        resultado.value = valorCompra - (valorCompra * 0.02);
    } else {
        resultado.value = 0;
    }
}

// Função do exercício 3
function calcularSalario() {
    let salarioBruto = parseFloat(document.querySelector('#salarioBruto').value);
    let qtDependentes = parseInt(document.querySelector('#qtDependentes').value);
    let resposta = document.querySelector('#resposta');
    let vt = salarioBruto * 0.06;
    let vr = salarioBruto * 0.05;
    let inss = 0;
    let porcentagem = 0;

    if(salarioBruto != 0) {
        if(salarioBruto > 0 && salarioBruto <= 1045) {
            porcentagem = 7.5;
            inss = salarioBruto * (porcentagem / 100);
        } else if (salarioBruto > 1045 && salarioBruto <= 2089.6) {
            porcentagem = 9;
            inss = salarioBruto * (porcentagem / 100);
        } else if (salarioBruto > 2089.6 && salarioBruto <= 3134.4) {
            porcentagem = 12;
            inss = salarioBruto * (porcentagem / 100);
        } else {
            porcentagem = 14;
            inss = salarioBruto * (porcentagem / 100);
        }
    
        let convenio = qtDependentes * 60;
    
        let salarioLiquido = salarioBruto - vr - vr - inss - convenio;
    
        resposta.innerHTML = 'Salario bruto: R$' + salarioBruto.toFixed(2);
        resposta.innerHTML += '<br>Desconto VT (6%): R$' + vt.toFixed(2);
        resposta.innerHTML += '<br>Desconto VR (5%): R$' + vr.toFixed(2);
        resposta.innerHTML += '<br>Desconto INSS ('+ porcentagem +'%): R$' + inss.toFixed(2);
        resposta.innerHTML += '<br>Desconto Convenio (R$60 por dependente): R$' + convenio.toFixed(2);
        resposta.innerHTML += '<br>Salário Liquido: R$' + salarioLiquido.toFixed(2);
    } else {
        resposta.innerHTML += 'Preencha o valor de salário';
    }

}