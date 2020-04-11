/** 
 * ajax 
 * promise
 * then | catch
 */

var myPromise = function () {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/cleefsouza');
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}

myPromise()
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.warn(error)
    });