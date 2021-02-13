var pageHeader = document.querySelector('.page-header');
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
pageHeader.setAttribute('data-menu-state','closed');

navToggle.addEventListener('click', function() {
  if (pageHeader.dataset.menuState == 'closed') {
    pageHeader.setAttribute('data-menu-state','opened');
  } else {
    pageHeader.setAttribute('data-menu-state','closed');
  }

});
