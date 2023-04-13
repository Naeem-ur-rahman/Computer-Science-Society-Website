document.getElementById("navbar-btn").addEventListener("click", displayNavbar);
function displayNavbar() {
    element = document.getElementsByTagName('nav');
    if (element[0].id == 'nav-display') {
        element[0].id = 'nav-display-see';
    } else if (element[0].id == 'nav-display-see') {
        element[0].id = 'nav-display';
    }
}