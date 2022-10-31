const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY>0);
});

let menu = document.querySelector("#nav-bar-icon")
let navList = document.querySelector(".nav-bar-header");

menu.onclick=() =>{
    menu.classList.toggle('bx-x');
    navList.classList.toggle('active');
}
const sr = ScrollReveal({
    distance:'50px',
    duration:2500,
    reset:true
})