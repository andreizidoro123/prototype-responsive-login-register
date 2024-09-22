function mudarParaRegister() {
    var trocarDiv = document.querySelector('.trocar');
    var formularioDiv = document.querySelector('.formulario');
    var botao = document.querySelector('.troca');

    // Mova a div "trocar"
    trocarDiv.classList.toggle('right');

    // Use setTimeout para atrasar a mudança do formulário e do título
    setTimeout(function() {
        formularioDiv.classList.toggle('right');

        if (trocarDiv.classList.contains('right')) {
            botao.textContent = "LOGIN"; // Texto quando a div está à direita
            document.title = "Registrar"; // Muda o título do site
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('registerForm').style.display = 'block';
        } else {
            botao.textContent = "REGISTRAR"; // Texto quando a div está à esquerda
            document.title = "Login"; // Muda o título do site
            document.getElementById('loginForm').style.display = 'block';
            document.getElementById('registerForm').style.display = 'none';
        }
    }, 225); // Atraso de 500ms
}
document.querySelectorAll('input').forEach(input => {
    // Salva o texto original do placeholder
    const originalPlaceholder = input.getAttribute('placeholder');

    input.addEventListener('focus', function() {
        this.placeholder = ''; // Remove o placeholder ao focar
    });

    input.addEventListener('blur', function() {
        if (this.value === '') {
            this.placeholder = originalPlaceholder; // Restaura o placeholder se não houver valor
        }
    });
});
