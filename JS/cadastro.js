document.addEventListener('DOMContentLoaded', () => { 
    document.getElementById('cadastro').addEventListener('submit', (e) => {
        e.preventDefault();
        const numeroLoja = '5511968815255';
        //Variáveis dos dados pessoais:
        const nome = document.getElementById('txt_nome').value;
        const idade = document.getElementById('txt_idade').value;
        const genero = document.getElementById('cmb_genero').value;
        const email = document.getElementById('txt_email').value;
        const telefone = document.getElementById('txt_telefone').value;
        const dataNasc = document.getElementById('txt_data').value;
        //Variáveis do endereço:
        const cep = document.getElementById('txt_cep').value;
        const estado = document.getElementById('txt_estado').value;
        const cidade = document.getElementById('txt_cidade').value;
        const rua = document.getElementById('txt_rua').value;
        const numero = document.getElementById('txt_number').value;
        const complemento = document.getElementById('txt_compl').value;

        //Validar Gênero:
        if (genero === "") {
            alert("Você não selecionou um gênero!");
            return; //interrompe a função
        }

        //Validar estado
        if (estado === "") {
            alert("Você não selecionou um estado válido!");
            return;
        }

        //Máscara para data:
        let dataMasc = "";
        const partes = dataNasc.split("-");
        dataMasc = `${partes[2]}/${partes[1]}/${partes[0]}`;

        //Mensagem pro whatsapp:
        let mensagem = `*Temos um novo cadastro!*\n`;
        mensagem += `Nome: ${nome}\nIdade: ${idade}\nGênero: ${genero}\nE-mail: ${email}\nTelefone: ${telefone}\nData de nascimento: ${dataMasc}\n`;
        mensagem += '\n*Endereço:*\n';
        mensagem += `CEP: ${cep}\nEstado: ${estado}\nCidade: ${cidade}\nRua: ${rua}\nNúmero de moradia: ${numero}\nComplemento: ${complemento}`;

        const url = `https://wa.me/${numeroLoja}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, '_blank');
    });
});