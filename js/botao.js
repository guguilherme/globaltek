const botaoForm = document.querySelector('#botaosub');

        botaoForm.addEventListener('click', () => {
            // Permitir que o formulário seja enviado
            setTimeout(() => {
                window.location.href = 'obrigado.html';
            }, 1000); // Ajuste o tempo conforme necessário para garantir que o formulário seja enviado antes do redirecionamento
        });