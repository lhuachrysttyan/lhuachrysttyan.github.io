// --- JavaScript ---

        const textElement = document.getElementById('typing-text');
        const textToType = "SITE EM BREVE...";
        let index = 0;

        // Função que cria o efeito de digitação
        function typeWriter() {
            if (index < textToType.length) {
                // Adiciona uma letra por vez
                textElement.innerHTML += textToType.charAt(index);
                index++;
                // Define o tempo de espera entre cada letra (em milissegundos)
                setTimeout(typeWriter, 150); 
            } else {
                // Opcional: Reiniciar a animação após um tempo
                // setTimeout(() => {
                //     textElement.innerHTML = "";
                //     index = 0;
                //     typeWriter();
                // }, 3000); // Espera 3 segundos antes de reiniciar
            }
        }

        // Inicia a função assim que a página carrega
        window.onload = typeWriter;