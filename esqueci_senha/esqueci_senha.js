function cadastro(){
    const usuario = document.getElementById("user").value;
    const email = document.getElementById("email").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    if (email === '' || newpassword === '' || Password === ''){
        alert("Preencha os dados para seguir com nova senha.");
        return;
    }

    if (newpassword === ''){
        alert("Confirme a senha.");
        return;
    }

    if(newpassword !== Password){
        alert("As senhas estão divergentes, verifique.");
        return;
    }

    alert("Nova senha cadastrada.");

    location.href = "../tela_login/tela_login";
}