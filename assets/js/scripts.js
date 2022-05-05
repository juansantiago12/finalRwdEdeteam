const menu = document.getElementById('menu');
const btn = document.getElementById('icon');

btn.addEventListener('click', () => {
   console.log('click');
   menu.classList.toggle('show');
});
