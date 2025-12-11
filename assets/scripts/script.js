fetch('https://lexicon.davidhermansson.se/recept/header.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('header').insertAdjacentHTML('afterbegin', html);
    })
    .catch(err => console.error('Failed to load header:', err));