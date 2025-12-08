
function logar(){
    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    if(email === ''){
        alert("Digite o E-mail");
        return;
    }

    if(senha === ''){
        alert("Digite a Senha");
        return;
    }

    if (email == 'teste@gmail.com' && senha == '12345'){
        alert("Sucesso!")
        location.href = "../"
    }
    else{
        alert("E-mail ou senha incorretos!");
    }
}


 