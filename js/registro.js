document.addEventListener('DOMContentLoaded', function () {
    
    let form = document.getElementById('registrationForm');

    
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        
        let nome = document.getElementById('nome').value;
        let email = document.getElementById('email').value;
        let senha = document.getElementById('senha').value;
        let data = document.getElementById('data').value;

        
        let usuario = {
            nome: nome,
            email: email,
            senha: senha
        };

       
        console.log('Informações do usuário:', usuario);

       
    });
});
