const API = 'https://acme-users-api-rev.herokuapp.com/api/users/search/';

const input = document.querySelector('input[type="search"]');
const tbody = document.querySelector('tbody');
const clear = document.querySelector('#clear');
const thead = document.querySelector('thead');

input.addEventListener('search', () => {
    let html = ''
    window.location.hash = input.value;

    // create function clear()
    //run it when button clicked or here
    
    thead.style.visibility = "visible";
    fetch(`${API}${input.value}`)
        .then (response => response.json())
            .then( data => data.users.forEach((user)=>{
                // console.log(user.firstName)
                html = `<tr><td><img src='${user.avatar}' alt='user image'</td>
                            <td>${user.firstName}</td>
                            <td>${user.lastName}</td>
                            <td>${user.email}</td>
                            <td>${user.title}</td></tr>`;
                
                tbody.innerHTML += html;
            }));
});



clear.addEventListener('click', () => {
    window.location.hash = ''
    const cells = document.getElementById('user-table').getElementsByTagName(tr);
    //clear all the cells
    for( let cell of cells){
        tbody.removeChild(tbody.cell);
    }
})

