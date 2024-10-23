document.getElementById('filmeForm').addEventListener('submit', function(event) {
    const nome = document.getElementById('nome').value;
    const diretor = document.getElementById('diretor').value;
    const avaliacao = document.getElementById('avaliacao').value;

    if (nome === '' || diretor === '' || avaliacao === '') {
        event.preventDefault();
        document.getElementById('mensagem').textContent = 'Preencha todos os campos!';
        document.getElementById('mensagem').style.color = 'red';
    } else {
        document.getElementById('mensagem').textContent = 'Filme cadastrado com sucesso!';
        document.getElementById('mensagem').style.color = 'green';
    }
});
