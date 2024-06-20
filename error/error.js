// error/error.js
export default function showError(error) {
    const resultContainer = document.querySelector('.result');
    resultContainer.innerHTML = `
        <div class="error">
            ${error.message}
        </div>
    `;
}
