const imagens = [ 
    //Deixando string's com o caiminho do src já pronto:  
    "./img/fundoPadaria2.jpg",
    "./img/fundoPadaria3.jpg",
    "./img/fundoPadaria4.jpg",
    "./img/fundoPadaria5.jpg",
    "./img/fundoPadaria6.jpg",
    "./img/fundoPadaria1.jpg"
];
  
let indiceAtual = 0; //Vai armazenar o índice do vetor de imagens
const imagem = document.getElementById("img");
const btnEsquerda = document.querySelector(".btn.esquerda");
const btnDireita = document.querySelector(".btn.direita");

//Função para atualizar imagem:
function atualizarImagem() {
    imagem.style.opacity = 0; //Fazendo efeito de Fade-In
    setTimeout(() => {
        imagem.src = imagens[indiceAtual];
        imagem.style.opacity = 1; //Após a troca de imagens retorna a opacidade
    }, 200);
    //Transição da opacidade já feita no CSS
}

//Altera o Índice de forma positiva pela direita:
btnDireita.addEventListener("click", () => {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    atualizarImagem();
});

//Altera o Índice de forma negativa pela esquerda:
btnEsquerda.addEventListener("click", () => {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    atualizarImagem();
});
//--------------------------------

//------- Carrinho: -------------
let carrinho = [];
let totalCompra = 0; //Guarda o valor total da compra
const listaCarrinho = document.getElementById('listaCarrinho');
const totalCarrinho = document.getElementById('totalCarrinho');
const comprar = document.querySelectorAll('.btn_comprar');

comprar.forEach(btn => {
    btn.addEventListener('click', () => {
        let produto = btn.dataset.produto;
        let preco = parseFloat(btn.dataset.preco);
        
        carrinho.push([produto, preco]);
        totalCompra += preco;

        let li = document.createElement('li');
        li.textContent = `${produto} - R$ ${preco.toFixed(2)}`;

        listaCarrinho.appendChild(li);
        totalCarrinho.innerHTML = totalCompra.toFixed(2);
    });
});

const btnLimparCarrinho = document.getElementById('limparCarrinho');
btnLimparCarrinho.addEventListener('click', () => {
    carrinho = [];
    totalCompra = 0;
    listaCarrinho.innerHTML = "";
    totalCarrinho.innerHTML = "0,00";
});
//--------------------------------

//----------- Calculadora de Itens: -------------
function calcularItem(nome, precoItem, idInput, idResultado) {
    let qtd = parseInt(document.getElementById(idInput).value);
    let subTotal = qtd * precoItem;
    let desconto = (nome === 'Pão' && qtd > 5) ? subTotal * 0.1 : 0;
    let total = subTotal - desconto;
    let taxaEntrega1 = 5.00;
    let totalComTaxa = total + taxaEntrega1;
    document.getElementById(idResultado).innerHTML = `${nome} : ${qtd} x R$${precoItem.toFixed(2)} | Desconto = R$${desconto.toFixed(2)} | Total R$${total.toFixed(2)} | Taxa de Entrega: R$${taxaEntrega1.toFixed(2)} | Total com Entrega: R$${totalComTaxa.toFixed(2)}`;
}
//--------------------------------

//------ Botão Voltar ao Topo: ------------
const btnTopo = document.getElementById('btn_voltarTopo');
btnTopo.addEventListener('click', () => {
    window.scrollTo(0, 0);
});