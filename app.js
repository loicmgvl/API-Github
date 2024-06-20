// app.js
import getUser from './request/request.js';
import showError from './error/error.js';
import showUser from './ui/ui.js';

document.querySelector('form').addEventListener('submit', async e => {
    e.preventDefault();
    const username = document.querySelector('input[name="username"]').value;

    try {
        const user = await getUser(username);
        showUser(user);
    } catch (err) {
        showError(new Error(`Failed to fetch user: ${err.message}`));
    }
});
