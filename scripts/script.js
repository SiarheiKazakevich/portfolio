const burger = document.querySelector('#burger-toggle');
const menunavbox = document.querySelector('.menunavbox');
const links = document.querySelectorAll('.menunav-list a');
burger.addEventListener('click', () => {
  //выезжающая меню
  menunavbox.style.right = burger.checked ? '0px' : '-100%';
  //когда менюшка выехала, блокируем прокрутку под ней.
  document.body.style.overflow = burger.checked ? 'hidden' : 'auto';
});
links.forEach(link => {
  link.addEventListener('click', () => {
    //крестик превращается в палочки:
    burger.checked = false;
    //менюшка заезжает назад:
    menunavbox.style.right = '-100%'
    //прокрутка по сайту опять активна:
    document.body.style.overflow = 'auto';
  });
});
