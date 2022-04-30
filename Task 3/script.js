/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

//=====================================1================================

document.querySelector('button').addEventListener('click', e => {
  e.preventDefault();
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((value) => {
        const users = value;
        console.log(value)
        users.forEach(element => {
            const login = document.createElement('h1')
            login.innerText = element.login;
            const img = document.createElement('img');
            img.src = element.avatar_url;
            document.getElementById('output').append(img, login);
            login.style.color = 'black';
        });
//======================================2===================================
    document.getElementById('message').style.display = 'none'; 
    });

})


