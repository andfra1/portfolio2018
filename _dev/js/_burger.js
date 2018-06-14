var burger = document.getElementById('burger');
var menu = document.getElementsByClassName('header__items')[0];

burger.addEventListener('click', burgerOnOff, false);
menu.addEventListener('click', closeMenu, false);

function burgerOnOff(e) {
  if (this.value === "on") {
    this.classList.remove('burger--change');
    menu.classList.remove('header__items--show');
    this.value = "off";
  } else {
    this.classList.add('burger--change');
    menu.classList.add('header__items--show');
    this.value = "on";
  }
  e.stopPropagation();
  e.preventDefault();
};

function closeMenu() {
  menu.classList.remove('header__items--show');
  burger.classList.remove('burger--change');
  burger.value = "off";
}