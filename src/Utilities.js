
export const keepAlive = (url) => {
    fetch(url)
        .then(response => console.log(`Keep alive ${url}: status ${response.status}`))
        .catch(error => console.error(`Error keeping alive ${url}:`, error));
};
