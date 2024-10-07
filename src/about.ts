document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    if (main) {
        const paragraph = document.createElement('p');
        paragraph.textContent = 'This is some additional information about our company. We are dedicated to providing high-quality services to our customers.';
        main.appendChild(paragraph);

        const link = document.createElement('a');
        link.href = '/index.html';
        link.textContent = 'Back to Home';
        main.appendChild(link);
    }
});
