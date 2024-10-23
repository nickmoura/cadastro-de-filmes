document.getElementById('filmeForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const diretor = document.getElementById('diretor').value;
    const vistoem = document.getElementById('vistoem').value;
    const avaliacao = document.getElementById('avaliacao').value;
    const mensagemElement = document.getElementById('mensagem');

    if (nome === '' || diretor === '' || avaliacao === '') {
        mensagemElement.textContent = 'Preencha todos os campos!';
        mensagemElement.style.color = 'red';
    } else {
        // Cria um objeto FormData para enviar os dados ao PHP
        const formData = new FormData();
        formData.append('nome_filme', nome);
        formData.append('diretor', diretor);
        formData.append('vistoem', vistoem);
        formData.append('avaliacao', avaliacao);

        try {
            // Envia os dados via fetch
            const response = await fetch('http://nickmoura.free.nf/back_end/api/api.php', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (result.status === 'sucesso') {
                mensagemElement.textContent = 'Filme cadastrado com sucesso!';
                mensagemElement.style.color = 'green';
            } else {
                mensagemElement.textContent = 'Erro ao cadastrar: ' + result.message;
                mensagemElement.style.color = 'red';
            }
        } catch (error) {
            mensagemElement.textContent = 'Erro ao enviar dados: ' + error.message;
            mensagemElement.style.color = 'red';
        }
    }
});
