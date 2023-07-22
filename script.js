var control = document.querySelector("#controller")
var navItemText = document.querySelectorAll(".nav-link-text")
var menuIcon = document.querySelector(".menu-icon")
var closeIcon = document.querySelector(".close-icon")
var linkBox = document.querySelectorAll("#nav-link")
var navBar = document.querySelector("#nav-bar")


function openMenu() {
    setTimeout(
        () => {
            navItemText.forEach(
                (span, index) => {
                    span.style.display = 'block'
                    span.style.transform = 'translateX(10px)'
                }
            )
        }, 400);

    linkBox.forEach(
        (div, index) => {
            div.style.width = "90%"

        }
    )
    navBar.style.width = "300px"
    menuIcon.style.transform = "translateX(-40px)"
    closeIcon.style.transform = "translateX(-40px)"



}
function closeMenu() {
    setTimeout(() => {

        navItemText.forEach(
            (span, index) => {
                span.style.display = "none"
            }
        )
    }, 400);
    linkBox.forEach(
        (div, index) => {
            div.style.width = "10%"

        }
    )
    menuIcon.style.transform = "translateX(0px)"
    closeIcon.style.transform = "unset"
    navBar.style.width = "75px"


}
