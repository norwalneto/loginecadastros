document.addEventListener('DOMContentLoaded', function () {

    // Referências aos elementos do DOM para login
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Referências aos elementos do DOM para cadastro
    const signupForm = document.getElementById('signup-form');
    const signupEmailInput = document.getElementById('signup-email');
    const signupPasswordInput = document.getElementById('signup-password');
    const signupUsernameInput = document.getElementById('signup-username');

    // Evento de submissão do formulário de Login
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Coleta os valores dos inputs
        const email = emailInput.value;
        const password = passwordInput.value;

        // Envio dos dados para o backend (processo de login)
        fetch('http://localhost:8080/api/usuarios/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then((response) => response.json()) // Espera a resposta em formato JSON
            .then((data) => {
                if (data.status === 'sucesso') {
                    alert(data.mensagem); // Exibe mensagem de sucesso
                    window.location.href = '/dashboard'; // Redireciona para a página principal
                } else {
                    alert(data.mensagem); // Exibe a mensagem de erro do backend
                }
            })
            .catch((error) => {
                console.error('Erro na requisição de login:', error);
                alert('Erro ao tentar realizar o login. Tente novamente.');
            });
    });

    // Evento de submissão do formulário de Cadastro
    signupForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Coleta os valores dos inputs
        const email = signupEmailInput.value;
        const password = signupPasswordInput.value;
        const username = signupUsernameInput.value;

        // Verifica se a resposta está no formato esperado
        fetch('http://localhost:8080/api/usuarios/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, username })
        })
            .then((response) => response.json()) // Espera a resposta em formato JSON
            .then((data) => {
                if (data.status === 'sucesso') {
                    alert(data.mensagem); // Exibe mensagem de sucesso
                    window.location.href = '/login'; // Redireciona para a página de login
                } else {
                    alert(data.mensagem); // Exibe a mensagem de erro do backend
                }
            })
            .catch((error) => {
                console.error('Erro na requisição de cadastro:', error);
                alert('Erro ao tentar realizar o cadastro. Tente novamente.');
            });
    });
});
