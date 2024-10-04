document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = '<h1>Hello from client!</h1>';
    
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => {
        const message = document.createElement('p');
        message.textContent = data.message;
        app.appendChild(message);
      });
  }
});