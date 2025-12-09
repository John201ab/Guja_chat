
function cadastro() {
    const nomeCompleto = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmaPassword = document.getElementById("confirmarPassword").value;

    if (nomeCompleto === '' || email === '' || password === '') {
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
    console.log("Nome:", nomeCompleto);
    console.log("E-mail:", email);
    
    location.href = "index.html";
}



