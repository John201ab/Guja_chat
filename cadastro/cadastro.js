
function cadastro() {  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmaPassword = document.getElementById("confirmarPassword").value;

    if (email === '' || password === '' || confirmaPassword === '') {
        alert("Preencha os dados obrigatórios: Nome, E-mail e Senha.");
        return;
    }

    if (confirmaPassword === ''){
        alert("Confirme a senha.");
        return;
    }

    if (password !== confirmaPassword) {
        alert("As senhas são diferentes! Por favor, verifique.");
        return;
    }

    alert("Dados enviados com sucesso, cadastro realizado.")
    
    console.log("--- Dados do Cadastro ---");
    console.log("email:", email);
    console.log("senha:", password);
    console.log("funciona plmds");
    location.href = "../tela_login/tela_login.html";
 }



