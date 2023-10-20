function entrar(){

    
    const email = document.getElementById('email')?.value;
    const senha = document.getElementById('senha')?.value;
    

    let accounts = localStorage.getItem('accounts') ? localStorage.getItem('accounts') : [];

    console.log(nome)

    console.log(obj)

    // if(nome == "admin" && senha == "admin" && email == "admin@gmail.com" && data == "admin"){
    //     location.href = "paginainicial.html";
    //     alert('sucesso');
    // }else{
    //     alert('usuario ou senha incorretos');
    // }
}    

localStorage.setItem("nome", "email", "senha", "data");   

   