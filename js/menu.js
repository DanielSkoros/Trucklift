const trigger = document.querySelector('.navTrigger');

const menuContainer = document.querySelector('.nav__container');

const mainContainer = document.querySelector('#main');

const fixedLogo = document.querySelector('.mobile__fixed');

trigger.addEventListener('click', () => {
   mainContainer.classList.toggle('hide');
   fixedLogo.classList.toggle('hide');
   menuContainer.classList.toggle('visible');
   trigger.classList.toggle('active');
});
