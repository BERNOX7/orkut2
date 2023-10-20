    function enviar(){

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const data = document.getElementById('data').value;

        let accounts = localStorage.getItem('accounts') ? localStorage.getItem('accounts') : [];

        console.log(nome)

        let account = {
            nome: nome,
            email: email,
            senha: senha,
            data: data 
        }

        let newAccounts = accounts.push(account)

        console.log(newAccounts)

        console.log(obj)

        // if(nome == "admin" && senha == "admin" && email == "admin@gmail.com" && data == "admin"){
        //     location.href = "paginainicial.html";
        //     alert('sucesso');
        // }else{
        //     alert('usuario ou senha incorretos');
        // }
    }    
    
    localStorage.setItem("nome", "email", "senha", "data");   

       