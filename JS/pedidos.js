const btnCalcular = document.getElementById('btnOrcamento');
const orcamentoFinal = document.getElementById('resOrcamento');

btnCalcular.addEventListener('click', () => {
    const produtoSelecionado = document.querySelector("input[name='pedido']:checked");
    const qtd = parseInt(document.getElementById('txt_qtd').value);
    const tipoPgmt = document.querySelector("input[name='pgmt']:checked").value;
    const precoUnitario = parseFloat(produtoSelecionado.dataset.preco);

    let taxaEntrega = 5;
    let total = precoUnitario * qtd + taxaEntrega;

    let desconto = tipoPgmt === "Pix" ? 0.95 : 1; // 5% de desconto
    total *= desconto;
    let acrescimo = tipoPgmt === "Cartão Cred" ? 1.05 : 1; // paga 5% a mais
    total *= acrescimo;

    orcamentoFinal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
});


//------ Enviar Pedido: -------------
document.addEventListener('DOMContentLoaded', () => { //Serve para quando o navegador termina de carregar o HTML
    document.getElementById('pedidos').addEventListener('submit', (e) => {
        e.preventDefault(); //Evita que o form seja enviado de forma tradicional (recarregando a página)
        const numeroLoja = '5511968815255';
        const nome = document.getElementById('txt_nome').value;
        const email = document.getElementById('txt_email').value;
        const telefone = document.getElementById('txt_telefone').value;
        const endereco = document.getElementById('txt_local').value;
        const tipo = document.querySelector("input[name='pedido']:checked").value;
        const qtd = document.getElementById('txt_qtd').value;
        const dataEntregaInput = document.querySelector("input[name='data_entrega']").value;
        const observacoes = document.getElementById("txt_detalhes").value;

        let dataEntrega1 = "";
        const partes = dataEntregaInput.split("-");
        dataEntrega1 = `${partes[2]}/${partes[1]}/${partes[0]}`;

        let mensagem = `*Novo pedido chegando!*\n\n`;
        mensagem += `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nEndereço: ${endereco}\nPedido: ${tipo}\n`;
        mensagem += `Quantidade: ${qtd}\nData de Entrega: ${dataEntrega1}\nObservações: ${observacoes}\n`;

        const url = `https://wa.me/${numeroLoja}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, '_blank');  //Abre a tela do whatsapp em outra aba
    });
});

