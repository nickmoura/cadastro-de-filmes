document.getElementById('movieform').addEventListener('submit', async function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const moviename = document.getElementById('moviename').value;
    const director = document.getElementById('director').value;
    const seenon = document.getElementById('seenon').value;
    const rate = document.getElementById('rate').value;

    if (moviename === '' || director === '' || rate === '') {
        showToast('Preencha todos os campos!', '#eec5c5', '#6b0202');
    } else {    
        const formData = new FormData();
        formData.append('moviename', moviename);
        formData.append('director', director);
        formData.append('seenon', seenon);
        formData.append('rate', rate);

        try {
            const response = await fetch('https://nickmoura.free.nf/back_end/api/api.php', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (result.status === 'sucesso') {
                showToast('Filme cadastrado com sucesso!', 'green');
            } else {
                showToast('Erro ao cadastrar: ' + result.message, 'red');
            }
        } catch (error) {
            showToast('Erro ao enviar dados: ' + error.message, 'red');
        }
    }
});

// Função para fechar o toaster manualmente
function closeToast() {
    const toaster = document.getElementById('toaster');
    const timebar = toaster.querySelector('.timebar');

    // Esconde o toaster e reseta a barra de progresso
    toaster.classList.remove('show');
    toaster.classList.add('hide');
    timebar.style.width = '0';
    
    // Limpa a classe de ocultação após a animação
    setTimeout(() => {
        toaster.classList.remove('hide');
    }, 500); // Duração da animação de saída
}

// Função para exibir o toaster com timebar e botão de fechar
function showToast(message, color, textColor = '#fff') {
    const toaster = document.getElementById('toaster');
    const timebar = toaster.querySelector('.timebar');
    
    // Define a cor do fundo e do texto do toaster
    toaster.style.backgroundColor = color;
    toaster.style.color = textColor; // Adiciona a cor do texto
    toaster.querySelector('.message').textContent = message;

    // Reinicia o estado da barra de progresso
    timebar.style.width = '0%';

    // Exibe o toaster
    toaster.classList.add('show');
    
    // Inicia a animação da barra de progresso com um pequeno delay para a transição funcionar
    setTimeout(() => {
        timebar.style.width = '100%'; // Preenche a barra
    }, 100); // Delay para garantir que o width 0% seja processado

    // Remove o toaster após 3 segundos
    const autoHideTimeout = setTimeout(() => {
        closeToast();
    }, 3000);

    // Quando o botão de fechar é clicado, cancela o timeout da auto remoção
    document.querySelector('.close-btn').addEventListener('click', () => {
        clearTimeout(autoHideTimeout);
        closeToast(); // Fecha o toaster manualmente
    });
}

// Lógica dos placeholders (mantém a mesma)
const elementos = document.querySelectorAll('#moviename, #director, #seenon, #rate');
elementos.forEach(elemento => {
  elemento.dataset.placeholderOriginal = elemento.placeholder;
  elemento.addEventListener('focus', function() {
    this.placeholder = '';
  });
  elemento.addEventListener('blur', function() {
    this.placeholder = this.dataset.placeholderOriginal;
  });
});