console.log('About page TypeScript loaded!');

const aboutApp = document.getElementById('about-app');
if (aboutApp) {
    const content = document.createElement('div');
    content.innerHTML = `
        <h2>About This App</h2>
        <p>This is a TypeScript development server with multiple page support.</p>
    `;
    aboutApp.appendChild(content);
} 