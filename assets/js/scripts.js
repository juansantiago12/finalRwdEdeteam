const showMenu = (toggleId, menuId) => {
   const menu = document.getElementById(menuId);
   const toggle = document.getElementById(toggleId);

   if (menu && toggle) {
      toggle.addEventListener('click', () => {
         console.log('click');
         menu.classList.toggle('show');
      });
   }
};

showMenu('main-menu__toggle', 'main-menu');
