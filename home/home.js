
const menu = document.getElementById("menu"); //* Pegando o elemento pelo ID
const navMenu = document.querySelector(".navegacao"); //* Pegando o elemento de forma genérica - pode ser classe (precisa trazer o ponto) ou pode ser o ID (precisar trazer o hashtag)

//* Faz a mesma coisa que o function() - o arrow function 
menu.addEventListener("click", function() {
    if (navMenu.className == "navegacao") {
        navMenu.className = "navegacao ativo";
    }

    else {
        navMenu.className = "navegacao";
    }
})