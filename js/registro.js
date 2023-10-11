document.addEventListener('DOMContentLoaded', function () {
    
    var form = document.getElementById('registrationForm');

    
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        
        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var senha = document.getElementById('senha').value;
        var data = document.getElementById('data').value;

        
        var usuario = {
            nome: nome,
            email: email,
            senha: senha
        };

       
        console.log('Informações do usuário:', usuario);

       
    });
});
