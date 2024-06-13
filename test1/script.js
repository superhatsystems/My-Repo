function toggleMenu() {
    const navMenu = document.querySelector('nav ul');
    const menuButton = document.querySelector('.menu-button');

    if (navMenu) {
        const isVisible = navMenu.classList.toggle('visible');
        menuButton.setAttribute('aria-expanded', isVisible);
    }
}
