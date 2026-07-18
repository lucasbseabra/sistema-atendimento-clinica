let consulta = 0;
let exames = 0;
let preferencial = 0;
let retorno = 0;
let jaPegouSenha = false;
let senhaAtual = senha;

function gerarSenha(tipo) {
    if (jaPegouSenha) {
    alert("Você já pegou uma senha. Aguarde a próxima vez para pegar outra."); return;
    }
    let senha = "";
    switch (tipo) {
        case "Consulta":
            consulta++;
            senha = "C" + consulta.toString().padStart(3, "0");
            break;
        case "Exames":
            exames++;
            senha = "E" + exames.toString().padStart(3, "0");
            break;
        case "Preferencial":
            preferencial++;
            senha = "P" + preferencial.toString().padStart(3, "0");
            break;
        case "Retorno":
            retorno++;
            senha = "R" + retorno.toString().padStart(3, "0");
            break;
    }
    document.getElementById("senha").innerText = "Sua senha é: " + senha;
    document.getElementById("btnConsulta").innerHTML = "Senha Gerada";
    document.getElementById("btnExames").innerHTML = "Senha Gerada";
    document.getElementById("btnPreferencial").innerHTML = "Senha Gerada";
    document.getElementById("btnRetorno").innerHTML = "Senha Gerada";

    jaPegouSenha = true
}
 
 

