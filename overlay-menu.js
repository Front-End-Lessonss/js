const overlayMenu = document.getElementsByClassName("overlay-menu");
const barIcon = document.getElementsByClassName("fa-bars");
const closeIcon =  document.getElementsByClassName("fa-xmark");

barIcon[0].addEventListener("click", openOverlayMenu);
closeIcon[0].addEventListener("click", closeOverlayMenu);

function openOverlayMenu(){

    overlayMenu[0].style.width = "250px"

}

function closeOverlayMenu(){
    overlayMenu[0].style.width = "0"
}