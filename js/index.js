function geral() {
    const tela = document.querySelector('.tela');
    const calculadora = document.querySelector('.calculadora');
    // pega todos os cliques na tela
    document.addEventListener('click', e => {
        const btn = e.target;
        if (btn.classList.contains('btnNum')) {
            display(btn.innerText)
            tela.focus();
        }
        if (btn.classList.contains('limpar')) {
            limpar();
        }
        if (btn.classList.contains('voltar')) {
            voltar();
        }
        if (btn.classList.contains('igual')) {
            resultado();
        }
        tela.focus();
    })
    // adiciona valores no display
    function display(valor) {
        tela.innerText += valor
        tela.focus();
    }
    // limpa o display
    function limpar() {
        tela.innerText = '';
    }
    // apaga uma casa
    function voltar() {
        tela.innerText = tela.innerText.slice(0, -1);
    }
    // resolve a conta
    function resultado() {
        tela.innerText = eval(tela.innerText).toFixed(2);
    }
}
geral();