//----- Responsive menu actions (Navbar) -----//
function menu(){
    var menu = document.getElementById("menu")
    var menuButton = document.getElementById("menu-button")

    menu.classList.toggle('menu-active')
    menuButton.classList.toggle("menu-btn-active")
}
