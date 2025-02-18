
const mobileBtn = document.querySelector('#mobile-btn');
const mobileMenu = document.querySelector('#mobile-menu');
const mobileMenuItems = document.querySelectorAll('#mobile-menu a'); 


mobileBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});


mobileMenuItems.forEach(item => {
  item.addEventListener('click', () => {
    mobileMenu.classList.add('hidden'); 
  });
});


