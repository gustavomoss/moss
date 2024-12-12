document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Campos do formulário
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const mensagem = document.getElementById('mensagem');

    let formValid = true;

    // Validação Nome Completo
    if (!nome.value.trim() || nome.value.trim().split(' ').length < 2) {
        nome.classList.add('is-invalid');
        formValid = false;
    } else {
        nome.classList.remove('is-invalid');
    }

    // Validação Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
        email.classList.add('is-invalid');
        formValid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    // Validação Descrição da Mensagem
    if (!mensagem.value.trim() || mensagem.value.length < 30 || mensagem.value.length > 500) {
        mensagem.classList.add('is-invalid');
        formValid = false;
    } else {
        mensagem.classList.remove('is-invalid');
    }

    // Enviar se o formulário for válido
    if (formValid) {
        alert('Formulário enviado com sucesso!');
        document.getElementById('contactForm').reset();
    }
});