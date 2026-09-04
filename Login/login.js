//Print JS
// console.log("Hello World!"); 

//Cria uma alerta do tipo POP-UP
// alert("Santos FC");

// TIPOS DE VARIAVEIS NO JS
// var nome = "neymar"; Não será utilizado
// let nome = "neymar"; 
// const nome = "Neymar";

const campoSenha = document.getElementById("senha");
const botaoMostrarSenha = document.querySelector("#mostrar-senha");

botaoMostrarSenha.addEventListener("click", function () {

    // if (campoSenha.type == "password") 
    // {
    //     campoSenha.type = "text"
    // }
    // else 
    // {
    //     campoSenha.type = "password"
    // }

    campoSenha.type = campoSenha.type == "password" ? "text" : "password"
});

