/** A partir do resultado do desafio anterior adicione um indicador de carregamento 
 * em tela no lugar da lista apenas enquanto a requisição estiver acontecendo.
 */

var app = document.querySelector('#app');
var input = app.querySelector('#nome');
var btn = app.querySelector('#btn');
var ul = app.querySelector('ul');

function getRepositories() {
    btn.textContent = 'Carregando ...';
    ul.innerHTML = '';

    axios.get(`https://api.github.com/users/${input.value}/repos`)
        .then((response) => {
            response.data.forEach(item => {
                var li = document.createElement('li');
                var nomeRepo = document.createTextNode(item.name);

                li.appendChild(nomeRepo);
                ul.appendChild(li);
            });
        })
        .catch((error) => {
            alert('Usuário não encontrado');
        });

    setTimeout(() => {
        btn.textContent = 'Buscar';
    }, 1000);
}