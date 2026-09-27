const input = document.getElementById("tarefaInput");
const botao = document.getElementById("adicionarBtn");
const lista = document.getElementById("listaTarefas");

botao.addEventListener("click", function () {

    const texto = input.value.trim();

    if (texto === "") {
        return;
    }

    const item = document.createElement("li");

    item.textContent = texto;

    lista.appendChild(item);

    input.value = "";
});

lista.addEventListener("click", function (event) {

    if (event.target.tagName === "LI") {
        event.target.remove();
    }

});