/** Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o 
 * nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme URL abaixo) 
 * os dados de repositórios do usuário e mostrá-los em tela. 
 * URL de exemplo: https://api.github.com/users/nome_usuario/repos
 */

var app = document.querySelector('#app');
var input = app.querySelector('#nome');
var btn = app.querySelector('#btn');
var ul = app.querySelector('ul');

function getRepositories() {
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
}
