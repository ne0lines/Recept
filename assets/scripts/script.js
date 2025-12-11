window.addEventListener('load', () => {
    fetch('/header.html')
        .then(response => response.text())
        .then(html => {
            const container = document.getElementById('header');
            const template = document.createElement('template');
            template.innerHTML = html.trim();
            container.prepend(...template.content.childNodes);
        })
        .catch(err => console.error('Failed to load header:', err));
});
