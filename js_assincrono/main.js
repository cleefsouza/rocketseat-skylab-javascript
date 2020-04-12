/** 
 * ajax 
 * promise
 * then | catch
 * axios
 */

// var myPromise = function () {
//     return new Promise(function (resolve, reject) {
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://api.github.com/users/cleefsouza');
//         xhr.send(null);

//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 } else {
//                     reject('Erro na requisição');
//                 }
//             }
//         }
//     });
// }

// myPromise()
axios.get('https://api.github.com/users/cleefsouza')
    .then((response) => {
        console.log(response.data.login)
    })
    .catch((error) => {
        console.warn(error)
    });