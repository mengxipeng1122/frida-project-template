// Example client-side code
console.log('Client-side TypeScript loaded!!!!');

// Add a button dynamically
const app = document.getElementById('app');
if (app){
const button = document.createElement('button');
button.textContent = 'Test API';
button.onclick = async () => {
    const response = await fetch('/api/hello');
    const data = await response.json();
    alert(data.message);
};
app.appendChild(button); 
}