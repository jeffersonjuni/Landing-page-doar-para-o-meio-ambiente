document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        alert('O comprovante foi enviado para o email e agradecemos a doação!');
        location.reload(); // Recarrega a página
    });
});