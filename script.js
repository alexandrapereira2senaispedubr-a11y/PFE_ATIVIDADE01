
const contador = document.querySelector('.contador');// está chamando o elemento do carrinho 
const botoesSoma = document.querySelectorAll('.produto-card button');// está chamndo todos os botões dentro dos cards de produtos
let totalItens = 0;


//Evento do
botoesSoma.forEach(botao => {
    botao.addEventListener('click', () => {
        // 1. Soma mais um ao total
        totalItens++;
        
        // 2. Atualiza o texto da bolinha rosa no HTML
        contador.innerText = totalItens;

        // 3. Feedback visual: Muda o botão temporariamente
        const textoOriginal = botao.innerText;
        botao.innerText = "Adicionado! ✓";
        botao.style.backgroundColor = "#2ecc71"; // Muda para verde suave

        // 4. Volta ao normal depois de 1 segundo (1000 milissegundos)
        setTimeout(() => {
            botao.innerText = textoOriginal;
            botao.style.backgroundColor = ""; // Volta para a cor do CSS
        }, 1000);
        // 5. Finalização e anulação dos itens do carrinho
        const btnFinalizar = document.getElementById('btn-Finalizar-todos');
        btnFinalizar.addEventListener('click', () => {
            alert(`Compra finalizada! Total de itens: ${totalItens}`);
            totalItens = 0;
            contador.innerText = totalItens;
        });

        botao.addEventListener('click', () => {
            if (totalItens > 0) {
                totalItens--;
                contador.innerText = totalItens;
            }
        });     
        
    });
});
