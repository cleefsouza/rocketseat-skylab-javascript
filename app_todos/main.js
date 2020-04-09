var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(
    localStorage.getItem('listTodos')) || [
        'Fazer café',
        'Estudar Javascript',
        'Acessar comunidade da Rocketseat'
    ];;

function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode(' Excluir');
        linkElement.appendChild(linkText);
        linkElement.setAttribute('href', '#');

        var index = todos.indexOf(todo);
        linkElement.setAttribute('onclick', `deleteTodo(${index})`);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem(
        'listTodos',
        JSON.stringify(todos)
    );
}