const nav = document.getElementById("nav");
const open = document.getElementById("open");
const close = document.getElementById("close");
 
open.addEventListener("click", () => {
    nav.classList.add("nav-view");
});

close.addEventListener("click", () => {
    nav.classList.remove("nav-view");
});