document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('contato-avaliativo').addEventListener('submit', (e) => {
        e.preventDefault();

        //Variáveis:
        const numeroLoja = '5511968815255';
        const nome = document.getElementById('txt_nome').value;
        const email = document.getElementById('txt_email').value;
        const telefone = document.getElementById('txt_tel').value;
        const assunto = document.getElementById('slc_assunto').value;
        const mensagem = document.getElementById('txt_mensagem').value;

        //Mensagem:
        let notificacao = `*Entraram em contato conosco!*\n\n`;
        notificacao += `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nAssunto: ${assunto}\nMensagem: ${mensagem}`;

        //Enviando a mensagem:
        const url = `https://wa.me/${numeroLoja}?text=${encodeURIComponent(notificacao)}`;
        window.open(url, '_blank');
    });
});