function continuar(){
    // const usuario = document.getElementById("user").value;
    const email = document.getElementById("email").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    if (email === '' || newPassword === ''){
        alert("Preencha os dados para seguir com nova senha.");
        return;
    }

    if (confirmarSenha === ''){
        alert("Confirme a senha.");
        return;
    }

    if(newPassword !== confirmarSenha){
        alert("As senhas estão divergentes, verifique.");
        return;
    }

    alert("Nova senha cadastrada.");

    location.href = "index.html";
}