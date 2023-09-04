function abrirCarrinho() {
    document.getElementById("carrinho").classList.add("carrinho-geral");
    document.getElementById("carrinho").classList.remove("carrinho-geral-fechado");
}

function fecharCarrinho() {
    document.getElementById("carrinho").classList.remove("carrinho-geral");
    document.getElementById("carrinho").classList.add("carrinho-geral-fechado");
}

export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
}