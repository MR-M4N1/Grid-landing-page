const body = document.querySelector('body');

const overlay = document.querySelector('.overlay');

const menuPanel = document.querySelector('.menuPanel');

const hamburgerMenu = document.querySelector('.hamburgerMenu');

const navHam = document.querySelector('.navHam');

let isMenuOpen = false;

navHam.addEventListener("click", () => {

    if (!isMenuOpen) {
        body.classList.add('userClicked');
        overlay.classList.remove('hidden');
        menuPanel.classList.remove('hidden');
        hamburgerMenu.src = "./assets/images/icon-close.svg";
        navHam.setAttribute("aria-expanded", "true");
        navHam.setAttribute("aria-label", "Close menu");
        isMenuOpen = true;
    } else {
        body.classList.remove('userClicked');
        overlay.classList.add('hidden');
        menuPanel.classList.add('hidden');
        hamburgerMenu.src = "./assets/images/icon-menu.svg";
        navHam.setAttribute("aria-expanded", "false");
        navHam.setAttribute("aria-label", "Open menu");
        isMenuOpen = false;
    }


});