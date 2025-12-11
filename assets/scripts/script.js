window.addEventListener('load', () => {
    fetch('https://lexicon.davidhermansson.se/recept/header.html')
        .then(response => response.text())
        .then(html => {
            const container = document.getElementById('header');
            container.insertAdjacentHTML('afterbegin', html);
        })
        .catch(err => console.error('Failed to load header:', err));
});
