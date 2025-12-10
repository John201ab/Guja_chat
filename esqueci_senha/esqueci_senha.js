function cadastro() {

    const email = document.getElementById("email").value;
    const newPassword = document.getElementById("newpassword").value;
    const confirmarSenha = document.getElementById("password").value;

    if (email === '' || newPassword === '' || confirmarSenha === '') {
        alert("Preencha os dados para seguir com nova senha.");
        return;
    }

    if (newPassword !== confirmarSenha) {
        alert("As senhas estão divergentes, verifique.");
        return;
    }

    alert("Nova senha cadastrada.");

    location.href = "../tela_login/tela_login.html";
}
