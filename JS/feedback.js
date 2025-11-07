document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('feedback').addEventListener('submit', (e) => {
        e.preventDefault();

        const numeroLoja = '5511968815255';
        const nome = document.getElementById('txt_nome').value;
        const idade = document.getElementById('txt_idade').value;
        const estrelas = document.getElementById('rng_star').value;
        const mensagem = document.getElementById('txt_mnsg').value;

        const emjStar = "\u2605";
        let notificacao = "*A padaria recebeu um feedback!*\n\n";
        notificacao += `Nome: ${nome}\nIdade: ${idade}\nNota: ${estrelas}${emjStar} estrelas!\nMensagem: ${mensagem}`;

        const url = `https://wa.me/${numeroLoja}?text=${encodeURIComponent(notificacao)}`;
        window.open(url, '_blank');
    });
});