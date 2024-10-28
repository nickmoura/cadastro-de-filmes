document.getElementById("movieform").addEventListener("submit", async (event) => {
    event.preventDefault();
  
    const moviename = document.getElementById("moviename").value;
    const director = document.getElementById("director").value;
    const seenon = document.getElementById("seenon").value;
    const rate = document.getElementById("rate").value;
  
    try {
        console.log({ moviename, director, seenon, rate });
      const response = await fetch("https://api-filmes-sepia-three.vercel.app/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ moviename, director, seenon, rate })
      });
  
      const result = await response.json();
      if (response.ok) {
        showToaster("Filme cadastrado com sucesso!");
      } else {
        showToaster(`Erro: ${result.message}`);
      }
    } catch (error) {
      showToaster("Erro ao cadastrar o filme. Tente novamente mais tarde.");
    }
  });
  
  function showToaster(message) {
    const toaster = document.getElementById("toaster");
    toaster.querySelector(".message").textContent = message;
    toaster.classList.add("show");
  
    setTimeout(() => {
      toaster.classList.remove("show");
    }, 3000);
  }
  

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