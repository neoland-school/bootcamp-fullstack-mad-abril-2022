
const displayName = document.querySelector('.username');
displayName.textContent = JSON.parse(localStorage.getItem('username'))

let logOutSession = document.querySelector('.log-out');

logOutSession.addEventListener('click', () => {
    localStorage.removeItem('username');

    history.back();
})