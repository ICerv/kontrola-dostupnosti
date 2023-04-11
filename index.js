const button = document.querySelector('#order-btn');
setTimeout(() => {
  button.textContent = 'Objednat';
  button.disabled = false;
}, 8000);
button.addEventListener('click', () => {
  button.textContent = 'Objednáno';
});