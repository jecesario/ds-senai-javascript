// Script do exercício 1
function copa() {
    let text = document.querySelector('.text');
    text.innerHTML = 'Anos de copa: <br>';
    for(let i=1930; i<=2050; i=i+4) {
        text.innerHTML += i + '<br>';
    }
}