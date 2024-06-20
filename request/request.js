// request/request.js
export default async function getUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
        throw new Error(`User not found: ${response.statusText}`);
    }
    return response.json();
}
