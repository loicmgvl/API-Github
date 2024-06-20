// ui/ui.js
export default function showUser(user) {
    const resultContainer = document.querySelector('.result');
    const today = new Date();
    const createdDate = new Date(user.created_at);
    const diffTime = Math.abs(today - createdDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const formattedCreatedDate = createdDate.toLocaleDateString('fr-FR');
    const dayText = diffDays > 1 ? 'jours' : 'jour';

    resultContainer.innerHTML = `
        <div class="card">
            <img src="${user.avatar_url}" alt="${user.login}'s avatar">
            <h2>${user.login}</h2>
            <p>Utilisateur créé le ${formattedCreatedDate}, il y a ${diffDays} ${dayText}</p>
            <p>Nombre de repos : ${user.public_repos}</p>
            <button class="button" onclick="window.open('${user.html_url}', '_blank')">Voir</button>
        </div>
    `;
}