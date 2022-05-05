const menu = document.getElementById('main-menu');
const btn = document.getElementById('main-menu__toggle');

btn.addEventListener('click', () => {
   console.log('click');
   menu.classList.toggle('show');
});
